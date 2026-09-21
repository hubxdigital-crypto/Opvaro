import { CALENDLY_URL } from './constants';
export { WHATSAPP_LINK } from './constants';

let scriptPromise = null;

function loadCalendlyScript() {
  if (window.Calendly && window.Calendly.initPopupWidget) {
    return Promise.resolve();
  }
  if (!scriptPromise) {
    scriptPromise = new Promise((resolve, reject) => {
      const s = document.createElement('script');
      s.src = 'https://assets.calendly.com/assets/external/widget.js';
      s.async = true;
      s.onload = resolve;
      s.onerror = reject;
      document.head.appendChild(s);
    });
  }
  return scriptPromise;
}

export function openCalendly(e) {
  if (e) e.preventDefault();
  loadCalendlyScript()
    .then(() => {
      if (window.Calendly && window.Calendly.initPopupWidget) {
        window.Calendly.initPopupWidget({ url: CALENDLY_URL });
      } else {
        window.open(CALENDLY_URL, '_blank', 'noopener');
      }
    })
    .catch(() => {
      window.open(CALENDLY_URL, '_blank', 'noopener');
    });
}
