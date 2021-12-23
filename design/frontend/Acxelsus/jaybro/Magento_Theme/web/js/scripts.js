require([
    "jquery"
], function ($) {
    $(document).ready(function () {
        grecaptcha.ready(function() {
            grecaptcha.execute('6LcLUL4dAAAAABA-cbJjMDOX6ZFlWbrPiYG0GyO9', {action: '/'}).then(function(token) {
                console.log(token);
            });
        });
        $('.btn-signin').click(function() {
            var response = grecaptcha.getResponse();

            if(response.length == 0){
               console.log('recaptcha is not verified');
            } else {
               $('#login-form').submit();
            }
        });
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
        $('div.navicon').click(function () {
            console.log('show sidebar');
            $('.sidebar-main').css('left', '0');
        });
        $('.cmsMobNacIcoClose').click(function () {
            console.log('hide sidebar');
            $('.sidebar-main').css('left', '-100%');
        });
        $('.nav-toggle').click(function () {
            $('.nav-sections').css('left', 'auto');
            $('.nav-sections').toggle();
        });
        $('.mobile-toggle-btn').click(function () {
            $('ul.navigation-aboutus').toggle();
        });
        
    });
});