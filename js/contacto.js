// Script para inicializar y configurar el mapa dinámico usando Leaflet

// Coordenadas de la ubicación del negocio
const empresaLat = 40.416775; // Latitud de ejemplo (Madrid)
const empresaLng = -3.703790; // Longitud de ejemplo (Madrid)

// Inicializar el mapa
const map = L.map('map').setView([empresaLat, empresaLng], 13);

// Añadir capa de mapa de OpenStreetMap
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
}).addTo(map);

// Añadir un marcador para la ubicación del negocio
const negocioMarker = L.marker([empresaLat, empresaLng]).addTo(map);
negocioMarker.bindPopup('<b>Empresa Ficticia</b><br>Calle Falsa 123, Ciudad Imaginaria').openPopup();

// Obtener la ubicación del visitante
if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
        (position) => {
            const visitanteLat = position.coords.latitude;
            const visitanteLng = position.coords.longitude;

            // Añadir un marcador para la ubicación del visitante
            const visitanteMarker = L.marker([visitanteLat, visitanteLng]).addTo(map);
            visitanteMarker.bindPopup('<b>Tu ubicación</b>').openPopup();

            // Centrar el mapa entre ambas ubicaciones
            const bounds = L.latLngBounds([
                [empresaLat, empresaLng],
                [visitanteLat, visitanteLng]
            ]);
            map.fitBounds(bounds);

            // Dibujar la ruta entre la ubicación del visitante y el negocio
            const routingControl = L.Routing.control({
                waypoints: [
                    L.latLng(visitanteLat, visitanteLng),
                    L.latLng(empresaLat, empresaLng)
                ],
                routeWhileDragging: true
            }).addTo(map);
        },
        (error) => {
            console.error('Error al obtener la ubicación del visitante:', error);
        }
    );
} else {
    console.error('La geolocalización no está soportada por este navegador.');
}
