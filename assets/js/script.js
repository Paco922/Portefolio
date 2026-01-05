document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    if(menuToggle) {
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
    }
    
    // Ajoute la classe 'active' au lien correspondant à la page actuelle
    const currentPage = window.location.pathname.split("/").pop();
    const links = document.querySelectorAll('.nav-links a');
    
    links.forEach(link => {
        if(link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        }
    });
});