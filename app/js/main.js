$(function () {
    // SLIDER

    $(".happy-clients__slider-wrapper").slick({
        dots: false,
        arrows: true,
        speed: 1000,
        autoplay: true,
        autoplaySpeed: 2000,
        slidesToScroll: 1,
        slidesToShow: 2,
        draggable: true,
    });

    // MOBILE MENU

    $(".menu__btn, .menu a").on("click", function () {
        $(".menu__btn").toggleClass("menu__btn--active");
        $(".menu__list").toggleClass("menu__list--active");
        $("body").toggleClass("lock");
    });

    // FooterSlideToggle

    $(".footer-top__title").on("click", function () {
        $(this).toggleClass("footer-top__title--active");
        $(this).next().slideToggle();
    });
});
