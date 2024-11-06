$(document).ready(function() {

    const $carouseles = $('.carouseles');
    const $items = $('.item-carousel');
    const $btnLeft = $('.btn-left');
    const $btnRight = $('.btn-right');

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
        $(".nav-list-container").toggleClass("nav-open");
        $(".nav-toggle").toggleClass("active");
        $(".")
    });   
});