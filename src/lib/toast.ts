export function triggerToast(title: string, message: string) {
  if (typeof window !== 'undefined') {
    window.dispatchEvent(
      new CustomEvent('cafe-toast', {
        detail: { title, message },
      })
    );
  }
}
