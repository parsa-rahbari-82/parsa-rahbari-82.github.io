function toggleMenu() {
    const navLinks = document.getElementById('nav-links');
    navLinks.classList.toggle('active');
}

document.querySelectorAll('#nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        document.getElementById('nav-links').classList.remove('active');
    });
});