/* jslint devel: true */
/* global $ */

$(function () {

    var header = $("#header"),
        introH = $("#intro").innerHeight(),
        scrollOffset = $(window).scrollTop();



    /* ==Fixed header== */

    checkScroll(scrollOffset);

    $(window).on("scroll", function() {
        scrollOffset = $(this).scrollTop();
        checkScroll(scrollOffset);
    });

    /* Функция проверки положения скролла */
    function checkScroll(scrollOffset) {

        if ( scrollOffset >= introH ) {
            header.addClass("fixed");
        }
        else {
            header.removeClass("fixed");
        }
    }



    /* ==Smooth scroll== */

    $("[data-scroll]").on("click", function(event) {
        event.preventDefault();

        var $this = $(this),
            blockId = $this.data('scroll'),
            blockOffset = $(blockId).offset().top;

        $("#nav a").removeClass("active");
        $this.addClass("active");

        $("html, body").animate({
            scrollTop: blockOffset - 50
        }, 500);

    });



    /* ==Burger menu== */

    $("#nav_toggle").on("click", function(event) {
        event.preventDefault();
        $("#header, #nav, #nav_toggle").toggleClass("active");

    });

    $("#nav a").on("click", function(event) {
        event.preventDefault();
        $("#nav, #nav_toggle").removeClass("active");
    });



    /* ==Collapse== */

    $("[data-collapse]").on("click", function(event) {
        event.preventDefault();

        var $this = $(this),
            blockId = $this.data('collapse');

        $(blockId).slideToggle();
        $(this).toggleClass("active");
    });



    /* ==Slider== */

    $("[data-slider]").slick({
        infinite: true,
        fade: false,
        slidesToShow: 1,
        slidesToScroll: 1
    });

});
