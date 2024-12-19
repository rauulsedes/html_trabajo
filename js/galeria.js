// Script para manejar la galería dinámica
const galleryContainer = document.getElementById('gallery-container');

// Datos simulados para la galería (pueden cargarse de un JSON o API)
const images = [
    { src: 'images/bosque.jpg', alt: 'Bosque nevado en invierno' },
    { src: 'images/calle.jpg', alt: 'Vista aerea de una calle' },
    { src: 'images/montaña.jpg', alt: 'Montaña invernal' },
    { src: 'images/navidad.jpg', alt: 'Arbol de navidad en miniatura' },
    { src: 'images/puente.jpg', alt: 'Puente en Nueva York' }
];

// Renderizar las imágenes en la galería
document.addEventListener('DOMContentLoaded', () => {
    images.forEach(image => {
        const imgElement = document.createElement('img');
        imgElement.src = image.src;
        imgElement.alt = image.alt;
        imgElement.classList.add('gallery-image');
        galleryContainer.appendChild(imgElement);
    });

    // Agregar funcionalidad de clic para mostrar imagen en grande
    galleryContainer.addEventListener('click', event => {
        if (event.target.tagName === 'IMG') {
            mostrarImagen(event.target.src);
        }
    });
});

// Script para galería dinámica

document.addEventListener('DOMContentLoaded', () => {
    const galleryImages = document.querySelectorAll('.gallery img');

    galleryImages.forEach(image => {
        // Agregar clase inicial para el estilo de imágenes pequeñas
        image.classList.add('thumbnail');

        // Evento al pasar el cursor
        image.addEventListener('mouseenter', () => {
            image.classList.add('zoomed');
        });

        // Evento al quitar el cursor
        image.addEventListener('mouseleave', () => {
            image.classList.remove('zoomed');
        });
    });
});
