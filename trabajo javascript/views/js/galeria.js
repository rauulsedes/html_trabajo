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

// Función para mostrar una imagen en grande
function mostrarImagen(src) {
    const overlay = document.createElement('div');
    overlay.classList.add('overlay');
    const bigImage = document.createElement('img');
    bigImage.src = src;
    bigImage.classList.add('big-image');
    overlay.appendChild(bigImage);
    document.body.appendChild(overlay);

    // Cerrar la imagen al hacer clic en el overlay
    overlay.addEventListener('click', () => {
        document.body.removeChild(overlay);
    });
}
