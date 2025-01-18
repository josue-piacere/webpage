$(document).ready(function() {

    const $logoImg = $('.navbar-logo');

    $logoImg.click(function(){
        window.location.href = "./index.html";
    });

    $('#toggle').click(function() {

        $(".navbar-links").toggleClass("navbar-open");
        $(".navbar-toggle").toggleClass("active-toggle");
    });
});