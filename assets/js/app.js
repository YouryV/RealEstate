$(function () {
    var header = $("#header"),
        introH = $("#intro").innerHeight(),
        scrollOffset = $(window).scrollTop();

//    Fixed Header
    checkScroll(scrollOffset);

    $(window).on("scroll", function () {
        scrollOffset = $(this).scrollTop();
        checkScroll(scrollOffset);
    });

    function checkScroll(scrollOffset) {
        if (scrollOffset >= introH) {
            header.addClass("fixed");
        } else {
            header.removeClass("fixed");
        }
    }


//    Smooth scroll
    $("[data-scroll]").on("click", function(event) {
        event.preventDefault();

        var $this = $(this),
            blockId = $this.data("scroll"),
            blockOffset = $(blockId).offset().top;

        $("nav a").removeClass("active");
        $this.addClass("active");
        $("html, body").animate({
           scrollTop: blockOffset
        }, 500);

        if (!$this.hasClass("header__logo")) {
            $("#nav_toggle").toggleClass("active");
            $("#nav").toggleClass("active");
        }

    });

//    Menu nav toogle
    $("#nav_toggle").on("click", function(event) {
        event.preventDefault();

        $(this).toggleClass("active");
        $("#nav").toggleClass("active");
    });

//    Slider
    if (window.innerWidth > 650) {
        sliderIsLive = false;
      } else {
        sliderIsLive = true;
        checkSlider(sliderIsLive);
      }

    window.addEventListener("resize", function() {
        if (window.innerWidth > 650) {
            sliderIsLive = false;
        } else {
            sliderIsLive = true;
        }
        checkSlider(sliderIsLive);
    });

    function checkSlider(sliderIsLive) {
        if (sliderIsLive) {
            $("[data-slider]").slick({
                infinite: true,
                fade: false,
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false,
                dots: true,
                dotsClass: "dots-style"
            });
        } else {
            $('[data-slider]').slick('unslick');
        }
    }

});


