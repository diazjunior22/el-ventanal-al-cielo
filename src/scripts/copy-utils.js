/**
 * UTILIDAD DE COPIADO AL PORTAPAPELES CON FEEDBACK HÁPTICO Y VISUAL
 */
export async function copyToClipboard(text, triggerButton) {
  let success = false;
  try {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      await navigator.clipboard.writeText(text);
      success = true;
    } else {
      throw new Error('Clipboard API not available');
    }
  } catch (err) {
    try {
      const textarea = document.createElement('textarea');
      textarea.value = text;
      textarea.setAttribute('readonly', '');
      textarea.style.position = 'absolute';
      textarea.style.left = '-9999px';
      document.body.appendChild(textarea);
      textarea.select();
      success = document.execCommand('copy');
      document.body.removeChild(textarea);
    } catch (fallbackErr) {
      console.warn('Fallback copy falló:', fallbackErr);
    }
  }

  if (triggerButton) {
    if (navigator.vibrate) {
      navigator.vibrate(40);
    }
    const originalHtml = triggerButton.innerHTML;
    triggerButton.innerHTML = `
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
        <polyline points="20 6 9 17 4 12"></polyline>
      </svg>
      <span>¡Copiado con éxito!</span>
    `;
    triggerButton.style.backgroundColor = '#2E7D32';
    triggerButton.style.color = '#FFFFFF';

    setTimeout(() => {
      triggerButton.innerHTML = originalHtml;
      triggerButton.style.backgroundColor = '';
      triggerButton.style.color = '';
    }, 2500);
  }

  return success;
}

