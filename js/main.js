

//Выравнивает изображение

/*function ibg(){
    $.each($('.ibg'), function(index, val) {
        if($(this).find('img').length>0){
        $(this).css('background-image','url("'+$(this).find('img').attr('src')+'")');
        }
    });
}
    
ibg(); */

//На чистом JS
function ibg(){
    let ibg = document.querySelectorAll(".ibg");
        for (var i = 0; i < ibg.length; i++) {
        if(ibg[i].querySelector('img')){
        ibg[i].style.backgroundImage = 'url('+ibg[i].querySelector('img').getAttribute('src')+')';
        }
    }
}
    
ibg();
// Добавляет/удаляет класс для бургер меню

$('.wrapper').addClass('loaded');

$('.icon-menu').click(function(event) {
    $(this).toggleClass('active');
    $('.menu__body').toggleClass('active');
    $('body').toggleClass('lock');
});

if($('.posts__row').length > 0) {
    $('.posts__row').slick({
        //autoplay: true,
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