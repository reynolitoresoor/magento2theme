require([
    "jquery"
], function ($) {
    $(document).ready(function () {
        $('.navigation ul li.about-jaybro').hover(function () {
            $('.about-us-container').fadeIn().show();
        });
        $('.navigation ul li.our-range').hover(function () {
            $('.about-us-container').hide();
        });
        $('.navigation ul li.careers').hover(function () {
            $('.about-us-container').hide();
        });
        $('.navigation ul li.contact-us').hover(function () {
            $('.about-us-container').hide();
        });
        $('.navigation ul li.my-quoate').hover(function () {
            $('.about-us-container').hide();
        });
    });
});