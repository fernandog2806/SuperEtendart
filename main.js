// Navbar hamburguesa y opacidad al hacer scroll
document.getElementById('hamburger').addEventListener('click', function () {
    document.querySelector('.nav-links').classList.toggle('open');
});
window.addEventListener('scroll', function () {
    const navbar = document.querySelector('.navbar');
    const scrollY = window.scrollY;
    const newOpacity = Math.max(1 - scrollY / 500, 0);
    navbar.style.opacity = newOpacity;
});

// Eliminar el div .integrante-card pero dejar su contenido en mobile/tablet
let originalHTML = null;
const mediaQuery = window.matchMedia('(max-width: 1223px)');

function unwrapCards() {
    const container = document.querySelector('.integrantes-cards');
    if (!container) return;

    // Guardar el HTML original solo la primera vez
    if (originalHTML === null) {
        originalHTML = container.innerHTML;
    }

    const cards = container.querySelectorAll('.integrante-card');
    if (cards.length === 0) return;

    cards.forEach(card => {
        const parent = card.parentNode;
        while (card.firstChild) {
            parent.insertBefore(card.firstChild, card);
        }
        parent.removeChild(card);
    });
}

function restoreOriginal() {
    const container = document.querySelector('.integrantes-cards');
    if (container && originalHTML !== null) {
        container.innerHTML = originalHTML;
    }
}

function handleResize(e) {
    if (e.matches) {
        unwrapCards(); // Entra al media query (<= 1223)
    } else {
        restoreOriginal(); // Sale del media query (> 1223)
    }
}

mediaQuery.addEventListener('change', handleResize);

window.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('.integrantes-cards');
    if (container) {
        originalHTML = container.innerHTML;
        if (mediaQuery.matches) {
            unwrapCards();
        }
    }
});