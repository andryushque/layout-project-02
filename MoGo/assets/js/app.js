/* jslint devel: true */
/* global $ */

$(function () {
    
    var header = $("#header"), /* селектор элемента header */
        introH = $("#intro").innerHeight(), /* высота блока intro */
        scrollOffset = $(window).scrollTop(); /* текущий скролл */
    
    
    
    /* ==Fixed header== */
    
    /* проверка положения скролла при загрузке страницы */
    checkScroll(scrollOffset); /* проверка положения скролла при загрузке страницы */
    
    /* проверка положения скролла при самом скролле */
    $(window).on("scroll", function() {
        
        scrollOffset = $(this).scrollTop(); /* записываем в переменную, сколько мы проскроллили */
        
        checkScroll(scrollOffset); /* проверяем полученное значение через функцию проверки */
        
    });

    /* функция проверки положения скролла */
    function checkScroll(scrollOffset) {
        
        if ( scrollOffset >= introH ) { /* если величина скролла > высоты intro */
            header.addClass("fixed"); /* то добавляем к шапке класс fixed, т.е. закрепляем шапку */
        }
        else {
            header.removeClass("fixed"); /* иначе убираем класс fixed */
        }
    }
    
    
    
    
    /* ==Smooth scroll== */
    
    /* действия при клике на ссылки навигации */
    $("[data-scroll]").on("click", function(event) {
        event.preventDefault(); /* убираем стандартное поведение ссылок */
        
        var $this = $(this),  
            blockId = $this.data('scroll'), /* значение атрибута data-scroll */
            blockOffset = $(blockId).offset().top; /* позиция элемента от верха */
        
        $("#nav a").removeClass("active"); /* сначала удаляем класс active у всех ссылок */
        $this.addClass("active"); /* затем добавляем класс active только к той ссылке, на которую мы нажали */
        
        $("html, body").animate({
            scrollTop: blockOffset - 50 /* плавный скролл к позиции blockOffset за 500ms */
        }, 500);
        
    });
    
    
    
    
    /* ==Burger menu== */
    
    /* выпадающее меню при нажатии на бургер-меню */
    $("#nav_toggle").on("click", function(event) {
        event.preventDefault(); /* убираем стандартное поведение кнопки */
    
        $("#header, #nav, #nav_toggle").toggleClass("active"); /* добавляем/убираем класс active у шапки и меню навигации */
    
    });
    
    /* выпадающее меню при нажатии на ссылку */
    $("#nav a").on("click", function(event) {
        event.preventDefault(); /* убираем стандартное поведение кнопки */
    
        $("#nav, #nav_toggle").removeClass("active"); /* скрыть выпадающее меню при нажатии на ссылку */
    
    });
    
    
    
    
    /* ==Collapse== */
    
    /* действия при нажатии на аккордеон */
    $("[data-collapse]").on("click", function(event) {
        event.preventDefault(); /* убираем стандартное поведение аккордеона */
    
        var $this = $(this),  
            blockId = $this.data('collapse'); /* значение атрибута data-collapse */
        
        $(blockId).slideToggle(); /* раскрыть/закрыть аккордеон */
        $(this).toggleClass("active"); /* добавляем/убираем класс active у аккордеона - поворот стрелки */
    });
    
    
    
    /* ==Slider== */
    
    /* слайдеры в блоке review1 */
    $("[data-slider]").slick({
        infinite: true,
        fade: false,
        slidesToShow: 1,
        slidesToScroll: 1
    });
    
    
});
