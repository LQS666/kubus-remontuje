$(document).ready(function () {
    $("#nav-icon").click(function () {
        $(this).toggleClass("open"), $(".overlay").toggleClass("open"), $(".overlay a").toggleClass("open")
    })

    function changeDot() {
        const scrollValue = $(window).scrollTop();
        const heightAbout = $('#about').offset().top;
        const heightServices = $('#services').offset().top;
        const heightGallery = $('#gallery').offset().top;
        const heightContact = $('#contact').offset().top;

        if (scrollValue + 5 < heightAbout) {
            $('.overlay a').not('.home').removeClass('overlay-active');
            $('.overlay .home').addClass('overlay-active');
        } else if (scrollValue + 5 < heightServices) {
            $('.overlay a').not('.about').removeClass('overlay-active');
            $('.overlay .about').addClass('overlay-active');
        } else if (scrollValue + 5 < heightGallery) {
            $('.overlay a').not('.services').removeClass('overlay-active');
            $('.overlay .services').addClass('overlay-active');
        } else if (scrollValue + 5 < heightContact) {
            $('.overlay a').not('.gallery').removeClass('overlay-active');
            $('.overlay .gallery').addClass('overlay-active');
        } else {
            $('.overlay a').not('.contact').removeClass('overlay-active');
            $('.overlay .contact').addClass('overlay-active');
        }
    }

    $(window).on("scroll", changeDot)


    $('a[href*="#"]').not('[href="#"]').not('[href="#0"]').click(function (event) {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname ==
            this.hostname) {
            let target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                event.preventDefault();
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 1000, function () {
                    let $target = $(target);
                    $target.focus();
                    if ($target.is(':focus')) {
                        return false;
                    } else {
                        $target.attr('tabindex', '-1');
                        $target.focus();
                    };
                });
            }
        }
    });
});

AOS.init({
    duration: 2e3
});