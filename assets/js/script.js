$(document).ready(function() {

    const $carouseles = $('.carousel-items');
    const $items = $('.carousel-item');
    const $btnLeft = $('.carousel-control-left');
    const $btnRight = $('.carousel-control-right');

    let currentIndex = 0;
    const totalItems = $items.length;
    const itemWidth = 100 / totalItems;

    $btnRight.click(function() {
        if (currentIndex < totalItems - 1) {
            currentIndex++;
            $carouseles.css('transform', `translateX(-${itemWidth * currentIndex}%)`);
        }
    });

    $btnLeft.click(function() {
        if (currentIndex > 0) {
            currentIndex--;
            $carouseles.css('transform', `translateX(-${itemWidth * currentIndex}%)`);
        }
    });


    $('#toggle').click(function() {
        $(".navbar-links").toggleClass("navbar-open");
        $(".navbar-toggle").toggleClass("active");
    });   
});