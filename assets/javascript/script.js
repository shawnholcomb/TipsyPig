$(document).ready(function () {
    // Trigger open /close on mobile

    if ($(window).width() < 769) {
        $('#menu-button').on('click', function () {
            $('.menu-box').slideToggle('slow');
        });

        $('#about-button').on('click', function () {
            $('.about-box').slideToggle('slow');
        });

        $('#contact-button').on('click', function () {
            $('.contact-box').slideToggle('slow');
        });
    }

    // Bootstrap carousel

    $('#picCarousel').carousel({
        interval: 10000
    })

    $('.carousel .carousel-item').each(function () {
        var next = $(this).next();
        if (!next.length) {
            next = $(this).siblings(':first');
        }
        next.children(':first-child').clone().appendTo($(this));

        for (var i = 0; i < 3; i++) {
            next = next.next();
            if (!next.length) {
                next = $(this).siblings(':first');
            }
            next.children(':first-child').clone().appendTo($(this));
        }
    });
});