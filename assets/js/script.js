$(document).ready(function() {

    const $carouseles = $('.carousel-items');
    const $items = $('.carousel-item');
    const $btnLeft = $('.carousel-control-left');
    const $btnRight = $('.carousel-control-right');

    let currentIndex = 0;
    const totalItems = $items.length;
    const itemWidth = 100 / totalItems;

    const $items_proyects = $('.carousel-proyects-item');
    const $dots = $('.dot');
    let currentSlide = 0;

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
    
    
    function showSlide(index) {
        $items_proyects.hide(); 
        $items_proyects.eq(index).show(); 
        $dots.removeClass('active'); 
        $dots.eq(index).addClass('active'); 
    }

    
    $dots.on('click', function() {
        currentSlide = $(this).data('slide'); 
        showSlide(currentSlide); 
    });

    
    showSlide(currentSlide);
});