var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    slidesPerGroup: 1,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});






$(document).ready(function() {
    var bigimage = $("#big");
    var thumbs = $("#thumbs");
    //var totalslides = 10;
    var syncedSecondary = true;

    bigimage
        .owlCarousel({
            items: 1,
            slideSpeed: 2000,
            nav: true,
            autoplay: true,
            dots: false,
            loop: true,
            responsiveRefreshRate: 200,

            // navText: [
            //     '<i class="fa fa-arrow-left" aria-hidden="true"></i>',
            //     '<i class="fa fa-arrow-right" aria-hidden="true">></i>'
            // ]
        })
        .on("changed.owl.carousel", syncPosition);

    thumbs
        .on("initialized.owl.carousel", function() {
            thumbs
                .find(".owl-item")
                .eq(0)
                .addClass("current");
        })
        .owlCarousel({
            items: 4,
            dots: false,
            nav: true,
            // navText: [
            //     '<i class="fa fa-arrow-left" aria-hidden="true"></i>',
            //     '<i class="fa fa-arrow-right" aria-hidden="true"></i>'
            // ],
            smartSpeed: 200,
            slideSpeed: 500,
            slideBy: 4,
            responsiveRefreshRate: 100,
            responsive: {
                1300: {
                    items:4
                },
                1200: {
                    items: 3
                },
                1100: {
                    items:3
                },
                1025: {
                    items:3
                },
                993: {
                    items:3
                },
                992: {
                    items:3
                },
                900: {
                    items:3
                },
                800: {
                    items:3
                },
                768: {
                    items:2
                },
                700: {
                    items:1
                },
                650: {
                    items:1
                },
                600: {
                    items:1
                },
                577: {
                    items:2
                },
            }
        })
        .on("changed.owl.carousel", syncPosition2);

    function syncPosition(el) {
        //if loop is set to false, then you have to uncomment the next line
        //var current = el.item.index;

        //to disable loop, comment this block
        var count = el.item.count - 1;
        var current = Math.round(el.item.index - el.item.count / 2 - 0.5);

        if (current < 0) {
            current = count;
        }
        if (current > count) {
            current = 0;
        }
        //to this
        thumbs
            .find(".owl-item")
            .removeClass("current")
            .eq(current)
            .addClass("current");
        var onscreen = thumbs.find(".owl-item.active").length - 1;
        var start = thumbs
            .find(".owl-item.active")
            .first()
            .index();
        var end = thumbs
            .find(".owl-item.active")
            .last()
            .index();

        if (current > end) {
            thumbs.data("owl.carousel").to(current, 100, true);
        }
        if (current < start) {
            thumbs.data("owl.carousel").to(current - onscreen, 100, true);
        }
    }

    function syncPosition2(el) {
        if (syncedSecondary) {
            var number = el.item.index;
            bigimage.data("owl.carousel").to(number, 100, true);
        }
    }

    thumbs.on("click", ".owl-item", function(e) {
        e.preventDefault();
        var number = $(this).index();
        bigimage.data("owl.carousel").to(number, 300, true);
    });
});





var owl = $('.box__owl');
owl.owlCarousel({
    loop:true,
    autoplay:true,
    margin: 20,
    autoplayTimeout: 3000,
    dotsContainer: '.owl-dots',
    responsive: {
        0: {
            items:1,
        },
        600: {
            items: 2
        },
        1024: {
            items: 2
        },
        1200: {
            items: 3
        }
    }
});

$('.box__arrow_next').click(function () {
    owl.trigger('next.owl.carousel');
});

$('.box__arrow_prev').click(function () {
    owl.trigger('prev.owl.carousel');
});

$('.owl-dot').click(function () {
    owl.trigger('to.owl.carousel', [$(this).index(), 300]);
});



// let burger = $('.burger');
// let list = $('.header__list');
// let icon = $('.header__icons');
// burger.on('click', function (e) {
//     burger.toggleClass('active');
//     list.toggleClass('active');
//     icon.toggleClass('active');
// });

let by = $('.by');
let overlay = $('.overlay');
let popupBy = $('.popup__by');
let popupClose = $('.popup__close');
let thanks = $('.popup__thanks');
let btn = $('.popup__by-btn');

by.on('click', function (e) {
    e.preventDefault();
    overlay.fadeIn('slow');
    popupBy.fadeIn('slow');
});

popupClose.on('click', function () {
    overlay.fadeOut('slow');
    popupBy.fadeOut('slow');
});

overlay.on('click', function (e) {
    if (e.target.className === 'overlay') {
        overlay.fadeOut('slow');
        popupBy.fadeOut('slow');
        thanks.fadeOut('slow')
    }
});

btn.on('click', function (e) {
    thanks.fadeIn('slow');
    by.fadeOut('slow');
});

$('#tel').inputmask("+\\9\\96(999)99-99-99");