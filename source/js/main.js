$(document).ready(function () {

    $('#nav-icon').click(function () {
        $(this).toggleClass('open');
        $(".overlay").toggleClass("open");
        $(".overlay a").toggleClass("open");
    });

});


AOS.init({
    duration: 2000,
})