// nav-active.js

document.addEventListener('DOMContentLoaded', () => {
  const page = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('nav a').forEach(link => {
    const linkPage = link.getAttribute('href');
    if (linkPage === page) {
      link.classList.add('active');
    }
  });
});

