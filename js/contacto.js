// Script para inicializar y configurar el mapa dinámico usando Leaflet

// Coordenadas de la ubicación de la empresa
const empresaLat = 40.416775; // Latitud de ejemplo (Madrid)
const empresaLng = -3.703790; // Longitud de ejemplo (Madrid)

// Inicializar el mapa
const map = L.map('map').setView([empresaLat, empresaLng], 13);

// Añadir capa de mapa de OpenStreetMap
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
}).addTo(map);

// Añadir un marcador para la ubicación de la empresa
const marker = L.marker([empresaLat, empresaLng]).addTo(map);
marker.bindPopup('<b>Empresa Ficticia</b><br>Calle Falsa 123, Ciudad Imaginaria').openPopup();

// Función para calcular la ruta (simulada)
function calcularRuta() {
    alert('Funcionalidad de cálculo de ruta no implementada.');
}

// Botón o evento futuro para calcular la ruta
// document.getElementById('ruta-button').addEventListener('click', calcularRuta);
