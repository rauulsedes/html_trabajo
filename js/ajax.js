// Archivo ajax.js para cargar noticias dinámicamente

document.addEventListener('DOMContentLoaded', () => {
    const noticiasContainer = document.getElementById('noticias-container');

    if (noticiasContainer) {
        fetch('data/noticias.json')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Error al cargar las noticias');
                }
                return response.json();
            })
            .then(noticias => {
                noticias.forEach(noticia => {
                    const noticiaElement = document.createElement('div');
                    noticiaElement.classList.add('noticia');

                    noticiaElement.innerHTML = `
                        <h3>${noticia.titulo}</h3>
                        <p>${noticia.descripcion}</p>
                        <a href="${noticia.enlace}" target="_blank">Leer más</a>
                    `;

                    noticiasContainer.appendChild(noticiaElement);
                });
            })
            .catch(error => {
                noticiasContainer.innerHTML = '<p>Error al cargar las noticias. Intente nuevamente más tarde.</p>';
                console.error(error);
            });
    }
});
