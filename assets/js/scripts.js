$(document).ready(function() {
    const $carrusel = $('#carrusel');
    const $siguiente = $('#siguiente');
    const $anterior = $('#anterior');
    
    let currentIndex = 0; // El índice del slide actual
    const totalSlides = $carrusel.children().length; // El número total de slides
    const slideWidth = 700; // El ancho de cada slide (coincide con el CSS)
    
    $siguiente.click(function() {
        if (currentIndex < totalSlides - 1) {
            currentIndex++;
        } else {
            currentIndex = 0; // Vuelve al inicio si es el último
        }
        moveCarrusel();
    });
    
    $anterior.click(function() {
        if (currentIndex > 0) {
            currentIndex--;
        } else {
            currentIndex = totalSlides - 1; // Vuelve al final si está en el primero
        }
        moveCarrusel();
    });
    
    function moveCarrusel() {
        const translateXValue = -currentIndex * slideWidth;
        $carrusel.css('transform', `translateX(${translateXValue}px)`);
    }
});