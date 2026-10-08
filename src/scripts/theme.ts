// Wires up the dark/light toggle button (#themeBtn). The saved choice is
// applied before first paint by the inline script in Base.astro.
export function initTheme() {
  const root = document.documentElement;
  const btn = document.getElementById('themeBtn') as HTMLButtonElement | null;
  if (!btn) return;
  const mq = window.matchMedia('(prefers-color-scheme: dark)');
  const isDark = () => (root.dataset.theme ? root.dataset.theme === 'dark' : mq.matches);

  const paint = () => {
    const label = isDark() ? btn.dataset.light! : btn.dataset.dark!;
    btn.querySelector('.theme-label')!.textContent = label;
    btn.setAttribute('aria-label', label);
    btn.classList.toggle('is-dark', isDark());
  };

  btn.addEventListener('click', () => {
    const next = isDark() ? 'light' : 'dark';
    root.dataset.theme = next;
    try {
      localStorage.setItem('theme', next);
    } catch (e) {}
    paint();
  });
  mq.addEventListener('change', paint);
  paint();
}
