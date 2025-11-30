// === Smooth Scroll para todos los enlaces ===
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const targetId = this.getAttribute('href').substring(1);
    const target = document.getElementById(targetId);
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

// === Resaltar enlace activo en el navbar ===
const currentPage = window.location.pathname.split('/').pop();

document.querySelectorAll('.navbar a').forEach(link => {
  const href = link.getAttribute('href');
  if (href === currentPage) {
    link.classList.add('active');
  } else {
    link.classList.remove('active');
  }
});

// === Botón "Explorar China" (solo en index.html) ===
const btnExplorar = document.getElementById('btn-explorar');
if (btnExplorar) {
  btnExplorar.addEventListener('click', () => {
    const paisSection = document.getElementById('pais');
    if (paisSection) paisSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
}

// === Scroll suave para subenlaces secundarios ===
document.querySelectorAll('.sub-link').forEach(a => {
  a.addEventListener('click', e => {
    const targetId = a.getAttribute('href').substring(1);
    const el = document.getElementById(targetId);
    if (el) {
      e.preventDefault();
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});
