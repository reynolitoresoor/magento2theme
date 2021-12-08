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

        $('h3.about-jaybro').click(function () {
            $(this).find('span').toggleClass('fa-angle-down');
            $('ul.about-jaybro').slideToggle();
        });
        $('h3.customer-support').click(function () {
            $(this).find('span').toggleClass('fa-angle-down');
            $('ul.customer-support').slideToggle();
        });
        $('h3.my-account').click(function () {
            $(this).find('span').toggleClass('fa-angle-down');
            $('ul.my-account').slideToggle();
        });
        $('h3.contact-info').click(function () {
            $(this).find('span').toggleClass('fa-angle-down');
            $('ul.contact-info').slideToggle();
        });
    });
});