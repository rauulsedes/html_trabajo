document.addEventListener('DOMContentLoaded', () => {
    console.log('El sitio web ha cargado correctamente.');

    // Activar enlaces de navegación
    const navLinks = document.querySelectorAll('nav a');

    navLinks.forEach(link => {
        link.addEventListener('click', event => {
            navLinks.forEach(nav => nav.classList.remove('active'));
            event.target.classList.add('active');
        });
    });

    // Botón de desplazamiento al inicio
    const scrollTopButton = document.createElement('button');
    scrollTopButton.textContent = '↑';
    scrollTopButton.id = 'scroll-top-button';
    scrollTopButton.style.position = 'fixed';
    scrollTopButton.style.bottom = '20px';
    scrollTopButton.style.right = '20px';
    scrollTopButton.style.display = 'none';
    scrollTopButton.style.padding = '10px';
    scrollTopButton.style.border = 'none';
    scrollTopButton.style.borderRadius = '50%';
    scrollTopButton.style.backgroundColor = '#000';
    scrollTopButton.style.color = '#fff';
    scrollTopButton.style.cursor = 'pointer';
    scrollTopButton.style.zIndex = '1000';
    document.body.appendChild(scrollTopButton);

    window.addEventListener('scroll', () => {
        if (window.scrollY > 200) {
            scrollTopButton.style.display = 'block';
        } else {
            scrollTopButton.style.display = 'none';
        }
    });

    scrollTopButton.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // Mostrar un mensaje de confirmación al enviar formularios
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
        form.addEventListener('submit', event => {
            event.preventDefault();
            alert('Formulario enviado con éxito.');
            form.reset();
        });
    });

    // Añadir estilos dinámicos a elementos destacados
    const highlightElements = document.querySelectorAll('.highlight');
    highlightElements.forEach(element => {
        element.addEventListener('mouseenter', () => {
            element.style.backgroundColor = '#f0f0f0';
        });
        element.addEventListener('mouseleave', () => {
            element.style.backgroundColor = '';
        });
    });
});
