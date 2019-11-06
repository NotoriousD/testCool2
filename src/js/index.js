import '../sass/styles.scss';
import $ from 'jquery';
window.$ = window.jQuery = $;
import 'slick-carousel';


let slider = $('.slick-slider').slick({
    slidesToShow: 3,
    rows: 2,
    infinite: false,
    variableWidth: true,
    arrows: false,
    dots: true,
    responsive: [
        {
            breakpoint: 1250,
            settings: {
                slidesToShow: 2,
            }
        },
        {
            breakpoint: 700,
            settings: {
                slidesToShow: 2,
                centerMode: true,
                rows: 1,
            }
        },
    ]
});

$('.slider-next').on('click', function (e) {
    e.preventDefault();
    slider.slick('slickNext');
});

$('.slider-prev').on('click', function (e) {
    e.preventDefault();
    slider.slick('slickPrev');
});


