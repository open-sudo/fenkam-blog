(() => {
  const key = 'fenkam-theme';
  const choices = ['light', 'dark', 'system'];
  const system = window.matchMedia('(prefers-color-scheme: dark)');
  let preference = 'system';

  try {
    const saved = localStorage.getItem(key);
    if (choices.includes(saved)) preference = saved;
  } catch { /* The theme remains usable when browser storage is blocked. */ }

  function apply() {
    document.documentElement.dataset.theme = preference === 'system'
      ? (system.matches ? 'dark' : 'light')
      : preference;
    document.querySelectorAll('.theme-select').forEach(select => {
      select.value = preference;
    });
  }

  // Run in the head so the saved theme is applied before the page paints.
  apply();
  system.addEventListener('change', apply);
  window.addEventListener('storage', event => {
    if (event.key !== key && event.key !== null) return;
    preference = choices.includes(event.newValue) ? event.newValue : 'system';
    apply();
  });

  document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.theme-select').forEach(select => {
      select.value = preference;
      select.hidden = false;
      select.addEventListener('change', () => {
        preference = choices.includes(select.value) ? select.value : 'system';
        try { localStorage.setItem(key, preference); } catch { /* In-memory fallback. */ }
        apply();
      });
    });
  });
})();
