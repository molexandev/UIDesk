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
        responsive: [
            {
              breakpoint: 650,
              settings: {
                slidesToShow: 1,
              }
            }
        ]
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

    // ANIMATION

    wow = new WOW(
        {
        boxClass:     'wow',
        animateClass: 'animate__animated',
        offset:       0,
        mobile:       true,
        live:         true
      }
      )
      wow.init();

      // SLOW sCROLL

      $("#menu").on("click", "a", function (e) {
        e.preventDefault();
        var id = $(this).attr("href"),
            top = $(id).offset().top;
        $("body, html").animate({ scrollTop: top }, 1500);
    });

});
