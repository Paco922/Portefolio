// Ajoute la classe active au lien correspondant à la page
document.querySelectorAll('nav a').forEach(link => {
  if (link.href === window.location.href) {
    link.classList.add('active');
  }
});
