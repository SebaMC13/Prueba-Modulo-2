/**
 * Proyecto: Viajes Chile
 * Componentes de Bootstrap JS utilizados:
 * - Carousel (v5.3.8) - Control nativo de diapositivas
 * - Tooltips (v5.3.8) - Inicializados mediante Popper.js y Bootstrap JS
 * - Smooth scroll (Bootstrap CSS) - Desplazamiento suave
 */
// Inicializa los tooltips
console.log("Script cargado");

const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');

tooltipTriggerList.forEach((tooltipTriggerEl) => {
    new bootstrap.Tooltip(tooltipTriggerEl);
});


$(document).ready(function () {
    $("a").on('click', function (event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function () {

                window.location.hash = hash;
            });
        }
    });
});