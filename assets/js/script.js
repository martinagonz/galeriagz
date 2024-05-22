document.addEventListener("DOMContentLoaded", function() {
    // Seleccionar todas las tarjetas de artistas
    const artistCards = document.querySelectorAll('.card');

    // Agregar evento para cada tarjeta
    artistCards.forEach(card => {
        card.addEventListener('mouseover', function() {
            card.classList.add('border', 'border-danger'); // Agregar borde rojo cuando pasa el mouse
        });

        card.addEventListener('mouseout', function() {
            card.classList.remove('border', 'border-danger'); // Quitar borde rojo cuando se retira el mouse
        });
    });
});
