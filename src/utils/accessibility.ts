export function announceToScreenReader(message: string) {
  const announcement = document.createElement('div');
  announcement.setAttribute('aria-live', 'polite');
  announcement.setAttribute('aria-atomic', 'true');
  announcement.classList.add('sr-only');
  announcement.textContent = message;
  document.body.appendChild(announcement);
  
  setTimeout(() => {
    document.body.removeChild(announcement);
  }, 1000);
}

export function handleKeyboardNavigation(event: KeyboardEvent, elements: HTMLElement[]) {
  if (event.key === 'Tab') {
    const currentIndex = elements.indexOf(document.activeElement as HTMLElement);
    if (currentIndex === -1) return;

    if (event.shiftKey) {
      event.preventDefault();
      const prevIndex = (currentIndex - 1 + elements.length) % elements.length;
      elements[prevIndex].focus();
    } else {
      event.preventDefault();
      const nextIndex = (currentIndex + 1) % elements.length;
      elements[nextIndex].focus();
    }
  }
}