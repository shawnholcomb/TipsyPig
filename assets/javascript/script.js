$(document).ready(function () {
    $('#menu-button').on('click', function () {
        $('.menu-box').slideToggle('slow');
    });

    $('#about-button').on('click', function () {
        $('.about-box').slideToggle('slow');
    });

    $('#contact-button').on('click', function () {
        $('.contact-box').slideToggle('slow');
    });
});