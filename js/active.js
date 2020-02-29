$(function () {
    "use strict";

    // Service Slider
    $('.serviceSlide').slick({
        infinite: true,
        autoplay: true,
        arrows: false,
        nextArrow: $('.serviceArrowLeft'),
        prevArrow: $('.serviceArrowRight'),
        dots: false,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,

                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });

    // Team  Slider JS
    $('.teamSlide').slick({
        infinite: true,
        autoplay: true,
        arrows: false,
        nextArrow: $('.serviceArrowLeft'),
        prevArrow: $('.serviceArrowRight'),
        dots: false,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,

                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });

    // Price Slider
    $('.priceDescribeSlide').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.priceSlide'
        });
        $('.priceSlide').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        asNavFor: '.priceDescribeSlide',
        dots: false,
        prevArrow: $('.priceArrowLeft'),
        nextArrow: $('.priceArrowRight'),
        focusOnSelect: true,
        responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,

            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
    });
    // Testimonial  Slider JS
    // $('.testimonialSlide').slick({
    //     infinite: true,
    //     autoplay: false,
    //     arrows: false,
    //     centerMode: true,
    //     dots: false,
    //     speed: 300,
    //     slidesToShow: 2,
    //     slidesToScroll: 1,
    //     responsive: [{
    //             breakpoint: 1024,
    //             settings: {
    //                 slidesToShow: 1,
    //                 slidesToScroll: 1,
    //                 infinite: true,

    //             }
    //         },
    //         {
    //             breakpoint: 600,
    //             settings: {
    //                 slidesToShow: 1,
    //                 slidesToScroll: 1
    //             }
    //         },
    //         {
    //             breakpoint: 480,
    //             settings: {
    //                 slidesToShow: 1,
    //                 slidesToScroll: 1
    //             }
    //         }
    //     ]
    // });
    // Variable
    var $window = $(window);
    var $offset = 500;
    var $fh = $('.main_header');
    var $toggleIcon = $('.toggleIcon');
    var $centerBlock = $('.centerBlock');
    // Responsive Menu
    $toggleIcon.on('click', function () {
        $toggleIcon.toggleClass('active');
        $centerBlock.slideToggle('1500');
        $centerBlock.addClass('mNav');
    });

    $('.menu li').click(function () {
        $('li').removeClass("current");
        $(this).addClass("current");
        $('.mNav').slideToggle('1500');
        $toggleIcon.toggleClass('active');
    });

    // Sticky Menu
    $window.on('scroll', function () {
        var $offset = $(this).scrollTop();
        if ($offset > .5) {
            $fh.addClass('sticky');
        } else {
            $fh.removeClass('sticky');
        }
    });

    // Scrollspy
    $('#nav').onePageNav();

    

    // Counter Up
    $('.counterOne h4').counterUp({
        delay: 2,
        time: 1000
    });
    // LightBox
    $('.venobox').venobox();


});