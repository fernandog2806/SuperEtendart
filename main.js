document.getElementById('hamburger').addEventListener('click', function() {
    document.querySelector('.nav-links').classList.toggle('open');
});
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar'); 
    const scrollY = window.scrollY;  

    const newOpacity = Math.max(1 - scrollY / 500, 0);  
    
    navbar.style.opacity = newOpacity;
});
