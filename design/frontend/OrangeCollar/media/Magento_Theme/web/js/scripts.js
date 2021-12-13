require([
    "jquery"
], function ($) {
    $(document).ready(function () {
        $('div.navicon').click(function () {
            console.log('show sidebar');
            $('.sidebar-main').css('left', '0');
        });
        $('.cmsMobNacIcoClose').click(function () {
            console.log('hide sidebar');
            $('.sidebar-main').css('left', '-100%');
        });
    });
});