$(function() {

    /* Centering images */

    function ibg(){
        $.each($('.ibg'), function(index, val) {
            if($(this).find('img').length>0){
            $(this).css('background-image','url("'+$(this).find('img').attr('src')+'")');
            }
        });
    }
        
    ibg();


    let header = $("#header"),
        intro = $("#main_screen"),
        introH = intro.innerHeight(),
        scrollOffset = $(window).scrollTop();

    /* Fixed Header */
    checkScroll(scrollOffset, introH);

    $(window).on("scroll resize", function() {
        introH = intro.innerHeight();
        scrollOffset = $(this).scrollTop();
        
        checkScroll(scrollOffset, introH);
    });

    function checkScroll(scrollOffset, introH) {
        if( scrollOffset >= introH ) {
            header.addClass("fixed");
        } else {
            header.removeClass("fixed");
        }
    }

    /* Smooth scroll */

    $("[data-scroll]").on("click", function(event) {
        event.preventDefault();

        let $this = $(this),
            blockId = $this.data('scroll'),
            blockOffset = $(blockId).offset().top;

            nav.removeClass("active");
            body.removeClass("lock");
            header.removeClass("active");
            navToggle.removeClass("active");

        $("html, body").animate( {
            scrollTop: blockOffset -65
        }, 700);
    });

    /* Nav Toggle */
    let nav = $("#menu_body");
    let navToggle = $("#navToggle");

    let body = $("body");
    let navLi = $("li");

    navToggle.on("click", function(event) {
        event.preventDefault();

        navToggle.toggleClass("active");
        nav.toggleClass("active");
        body.toggleClass("lock");
        header.toggleClass("active");
    })

    remClass(nav, navLi);

    function remClass(elem) {
        elem.on("click", function(event) {
            event.preventDefault();

            nav.removeClass("active");
            body.removeClass("lock");
            header.removeClass("active");
            navToggle.removeClass("active");
        })
    }

    /* Filter */

    let filter = $("[data-filter]");

    filter.on("click", function(event) {
        event.preventDefault();
        
        let cat = $(this).data('filter');

        if(cat == 'all') {
            $("[data-cat]").removeClass("hide");
        } else {
            $("[data-cat]").each(function() {

                let workCat = $(this).data('cat');
                
                if(workCat != cat) {
                    $(this).addClass('hide');
                } else {
                    $(this).removeClass('hide');
                }
            });
        }     
        
    });

    if($('.posts__row').length > 0) {
        $('.posts__row').slick({
            autoplay: false,
            infinite: true,
            dots: false,
            arrows: true,
            accessibility: false,
            slidesToShow: 3,
            autoplaySpeed: 3000,
            adaptiveHeight: true,
            nextArrow: '<button type="button" class="slick-next"></button>',
            prevArrow: '<button type="button" class="slick-prev"></button>',
            responsive: [{
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 576,
                    settings: {
                        dots: true,
                        arrows: false,
                        slidesToShow: 1,
                    }
            }
            ]
        });
    }

});