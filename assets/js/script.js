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

const canvas = document.getElementById('matrixCanvas');
const ctx = canvas.getContext('2d');

// On ajuste le canvas à la taille de la section Hero
function resizeCanvas() {
    canvas.width = canvas.parentElement.offsetWidth;
    canvas.height = canvas.parentElement.offsetHeight;
}

window.addEventListener('resize', resizeCanvas);
resizeCanvas();

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789$+-*/=%§#!";
const fontSize = 16;
const columns = canvas.width / fontSize;
const drops = [];

// Initialisation des colonnes
for (let i = 0; i < columns; i++) {
    drops[i] = 1;
}

function drawMatrix() {
    // Fond noir transparent pour l'effet de traînée
    ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = "#0F0"; // Vert Matrix
    ctx.font = fontSize + "px monospace";

    for (let i = 0; i < drops.length; i++) {
        const text = letters.charAt(Math.floor(Math.random() * letters.length));
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        // Si la goutte arrive en bas, on la remonte aléatoirement
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
            drops[i] = 0;
        }
        drops[i]++;
    }
}

setInterval(drawMatrix, 33); // Environ 30 FPS

// Gestion des modales d'images (Zoom)
function openModal(imageSrc) {
    const modal = document.getElementById('imageModal');
    const modalImg = document.getElementById('img01');
    modal.style.display = "flex";
    modalImg.src = imageSrc;
}

// Fermer la modale
document.getElementById('imageModal')?.addEventListener('click', function() {
    this.style.display = "none";
});

document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('mobile-menu');
    const navLinks = document.querySelector('.nav-links');

    if (menuToggle) {
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
    }
}); 