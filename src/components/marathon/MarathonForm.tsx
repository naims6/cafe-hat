'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Loader2 } from 'lucide-react';
import type { PaymentProvider } from '@/types/restaurant';

interface FormData {
  name: string;
  email: string;
  phone: string;
  provider: PaymentProvider | '';
  transactionId: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  provider?: string;
  transactionId?: string;
}

const PROVIDERS: { value: PaymentProvider; label: string; color: string; logo: string }[] = [
  { value: 'bkash', label: 'bKash', color: '#E2136E', logo: '৳' },
  { value: 'nagad', label: 'Nagad', color: '#F4732D', logo: '৳' },
  { value: 'rocket', label: 'Rocket', color: '#8B2FC9', logo: '৳' },
];

function validate(data: FormData): FormErrors {
  const errors: FormErrors = {};
  if (!data.name.trim()) errors.name = 'Name is required.';
  if (!data.email.trim()) {
    errors.email = 'Email is required.';
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.email = 'Enter a valid email address.';
  }
  if (!data.phone.trim()) {
    errors.phone = 'Phone number is required.';
  } else if (!/^(\+?880|0)[1-9]\d{8,9}$/.test(data.phone.replace(/\s/g, ''))) {
    errors.phone = 'Enter a valid Bangladeshi phone number.';
  }
  if (!data.provider) errors.provider = 'Select a payment provider.';
  if (!data.transactionId.trim()) errors.transactionId = 'Transaction ID is required.';
  return errors;
}

const inputClass =
  'w-full border-2 border-espresso/15 bg-cream px-4 py-3 text-sm font-medium text-espresso placeholder:text-espresso/40 outline-none transition-all duration-200 focus:border-tomato focus:ring-2 focus:ring-tomato/20';
const errorClass = 'mt-1.5 text-xs font-semibold text-tomato';
const labelClass = 'mb-1.5 block text-xs font-bold uppercase tracking-wider text-espresso/70';

export function MarathonForm() {
  const [form, setForm] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    provider: '',
    transactionId: '',
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');
  const [registrationId, setRegistrationId] = useState('');

  const handleChange = (field: keyof FormData, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate(form);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setStatus('loading');

    // Simulate a brief loading state (no backend yet)
    await new Promise((resolve) => setTimeout(resolve, 900));
    const mockId = `mara-${Date.now().toString(36).toUpperCase()}`;
    setRegistrationId(mockId);
    setStatus('success');
  };

  if (status === 'success') {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="flex flex-col items-center gap-5 py-10 text-center"
      >
        <div className="flex h-20 w-20 items-center justify-center rounded-full bg-fresh/10">
          <CheckCircle className="h-10 w-10 text-fresh" />
        </div>
        <div>
          <h3 className="font-display text-3xl font-black text-espresso">
            You&apos;re Registered!
          </h3>
          <p className="mt-2 text-base text-espresso/60">
            Your marathon registration has been received. We&apos;ll verify your payment and
            contact you at <span className="font-bold text-tomato">{form.email}</span>.
          </p>
        </div>
        <div className="w-full rounded-none border-2 border-espresso/10 bg-cream-dark px-5 py-4 text-left">
          <p className="text-xs font-bold uppercase tracking-wider text-espresso/50">
            Registration ID
          </p>
          <p className="mt-1 font-mono text-sm font-bold text-espresso">{registrationId}</p>
          <p className="mt-2 text-xs text-espresso/50">
            Save this ID for your records.
          </p>
        </div>
        <button
          onClick={() => {
            setForm({ name: '', email: '', phone: '', provider: '', transactionId: '' });
            setStatus('idle');
            setRegistrationId('');
          }}
          className="text-sm font-bold text-tomato underline underline-offset-2 hover:text-tomato-dark"
        >
          Register another person
        </button>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
      {/* Name */}
      <div>
        <label htmlFor="name" className={labelClass}>
          Full Name
        </label>
        <input
          id="name"
          type="text"
          autoComplete="name"
          placeholder="e.g. Rahim Uddin"
          value={form.name}
          onChange={(e) => handleChange('name', e.target.value)}
          className={inputClass}
          aria-invalid={!!errors.name}
          aria-describedby={errors.name ? 'name-error' : undefined}
        />
        {errors.name && (
          <p id="name-error" className={errorClass}>
            {errors.name}
          </p>
        )}
      </div>

      {/* Email + Phone side by side on desktop */}
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="email" className={labelClass}>
            Email Address
          </label>
          <input
            id="email"
            type="email"
            autoComplete="email"
            placeholder="you@example.com"
            value={form.email}
            onChange={(e) => handleChange('email', e.target.value)}
            className={inputClass}
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? 'email-error' : undefined}
          />
          {errors.email && (
            <p id="email-error" className={errorClass}>
              {errors.email}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="phone" className={labelClass}>
            Phone Number
          </label>
          <input
            id="phone"
            type="tel"
            autoComplete="tel"
            placeholder="+880 1700-000000"
            value={form.phone}
            onChange={(e) => handleChange('phone', e.target.value)}
            className={inputClass}
            aria-invalid={!!errors.phone}
            aria-describedby={errors.phone ? 'phone-error' : undefined}
          />
          {errors.phone && (
            <p id="phone-error" className={errorClass}>
              {errors.phone}
            </p>
          )}
        </div>
      </div>

      {/* Payment Provider */}
      <div>
        <p className={labelClass}>Payment Provider</p>
        <div
          className="flex gap-3"
          role="radiogroup"
          aria-label="Payment provider"
          aria-describedby={errors.provider ? 'provider-error' : undefined}
        >
          {PROVIDERS.map((p) => {
            const selected = form.provider === p.value;
            return (
              <button
                key={p.value}
                type="button"
                role="radio"
                aria-checked={selected}
                onClick={() => handleChange('provider', p.value)}
                className={`flex flex-1 flex-col items-center gap-1.5 border-2 py-3 px-2 text-xs font-bold uppercase tracking-wider transition-all duration-200 cursor-pointer ${
                  selected
                    ? 'border-current text-cream'
                    : 'border-espresso/15 text-espresso hover:border-espresso/30 bg-cream'
                }`}
                style={
                  selected
                    ? { backgroundColor: p.color, borderColor: p.color }
                    : {}
                }
              >
                <span className="text-xl font-black">{p.logo}</span>
                {p.label}
              </button>
            );
          })}
        </div>
        {errors.provider && (
          <p id="provider-error" className={errorClass}>
            {errors.provider}
          </p>
        )}
      </div>

      {/* Transaction ID */}
      <div>
        <label htmlFor="transactionId" className={labelClass}>
          Transaction ID
        </label>
        <input
          id="transactionId"
          type="text"
          placeholder="e.g. 8N7A2B4X3Z"
          value={form.transactionId}
          onChange={(e) => handleChange('transactionId', e.target.value)}
          className={inputClass}
          aria-invalid={!!errors.transactionId}
          aria-describedby={errors.transactionId ? 'txn-error' : undefined}
        />
        <p className="mt-1.5 text-xs text-espresso/50">
          Enter the Transaction ID you received after sending the registration fee.
        </p>
        {errors.transactionId && (
          <p id="txn-error" className={errorClass}>
            {errors.transactionId}
          </p>
        )}
      </div>

      {/* Submit */}
      <button
        type="submit"
        disabled={status === 'loading'}
        className="group flex w-full items-center justify-center gap-2 bg-tomato px-6 py-4 text-sm font-bold uppercase tracking-wider text-cream transition-all duration-300 hover:bg-tomato-dark hover:shadow-xl disabled:cursor-not-allowed disabled:opacity-60 cursor-pointer"
      >
        {status === 'loading' ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" />
            Submitting…
          </>
        ) : (
          <>
            Register Now
            <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
          </>
        )}
      </button>
    </form>
  );
}
