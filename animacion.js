// Menú móvil
const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');
if (burger && navLinks) {
burger.addEventListener('click', () => {
    const open = navLinks.classList.toggle('open');
    burger.setAttribute('aria-expanded', open ? 'true' : 'false');
});
}

// Animación al hacer scroll (IntersectionObserver)
const observer = new IntersectionObserver((entries) => {
entries.forEach(entry => {
    if (entry.isIntersecting) {
    entry.target.classList.add('show');
    observer.unobserve(entry.target);
    }
});
}, { threshold: 0.2 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

// Validación simple del formulario (sin enviar)
const form = document.querySelector('form');
const msg = document.querySelector('.form-msg');
if (form && msg) {
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const nombre = form.nombre.value.trim();
    const email = form.email.value.trim();
    const mensaje = form.mensaje.value.trim();

    if (!nombre || !email || !mensaje) {
    msg.textContent = 'Completa todos los campos.';
    msg.style.color = '#ffb3c9';
    return;
    }
    // Simulación de éxito
    msg.textContent = '¡Gracias! Te responderemos muy pronto.';
    msg.style.color = '';
    form.reset();
});
}
