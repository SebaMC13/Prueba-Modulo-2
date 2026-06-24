/**
 * Proyecto: Viajes Chile
 * Componentes de Bootstrap JS utilizados:
 * - Carousel (v5.3.8) - Control nativo de diapositivas
 * - Tooltips (v5.3.8) - Inicializados mediante Popper.js y Bootstrap JS
 */
// Inicializa los tooltips
console.log("Script cargado");

const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');

tooltipTriggerList.forEach((tooltipTriggerEl) => {
    new bootstrap.Tooltip(tooltipTriggerEl);
});
