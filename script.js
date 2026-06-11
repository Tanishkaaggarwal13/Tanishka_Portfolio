const toggle = document.getElementById('themeToggle');
  const body = document.body;
 
  const saved = sessionStorage.getItem('theme');
  if (saved) body.setAttribute('data-theme', saved);
 
  toggle.addEventListener('click', () => {
    const current = body.getAttribute('data-theme');
    const next = current === 'dark' ? 'light' : 'dark';
    body.setAttribute('data-theme', next);
    sessionStorage.setItem('theme', next);
  });