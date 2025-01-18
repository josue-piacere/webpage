$(document).ready(function() {

    let currentIndex = 0;
    const $carouseles = $('.carousel-spaces-items');
    const $items = $('.carousel-spaces-item');
    const totalItems = $items.length;
    const itemWidth = 100 / totalItems;

    const $btnLeftExt = $('.control-spaces-left');
    const $btnRightExt = $('.control-spaces-right');

    $btnRightExt.click(function() {
        if (currentIndex < totalItems - 1) {
            currentIndex++;
            $carouseles.css('transform', `translateX(-${itemWidth * currentIndex}%)`);
        }
    });

    $btnLeftExt.click(function() {
        if (currentIndex > 0) {
            currentIndex--;
            $carouseles.css('transform', `translateX(-${itemWidth * currentIndex}%)`);
        }
    });

    const $btnLeft = $('.carousel-control-left');
    const $btnRight = $('.carousel-control-right');

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
});