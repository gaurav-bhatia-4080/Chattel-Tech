$(function () {

    // ================================================
    //  NAVBAR BEHAVIOR
    // ================================================
    $(window).on('scroll load', function () {
        if ($(window).scrollTop() > 5) {
            $('.navbar').addClass('active');
            $('.navbar').addClass('shadow');

        } else {
            $('.navbar').removeClass('active');
            $('.navbar').removeClass('shadow');
        }

        // if ($(window).scrollTop() > 1000) {
        //     $('#scrollTop').addClass('active');
        // } else {
        //     $('#scrollTop').removeClass('active');
        // }
    });


    // ================================================
    //  TESTIMONIALS SLIDER
    // ================================================
    $('.testimonials-slider').owlCarousel({
        items: 1,
        dots: true
    });

    // ================================================
    //  MODAL VIDEO
    // ================================================
    new ModalVideo('.js-modal-btn');


    // ================================================
    // Move to the top of the page
    // ================================================
    $('#scrollTop').on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({ scrollTop: 0}, 1000);
    });

    // ================================================
    // Preventing URL update on navigation link click
    // ================================================
    // $('.link-scroll').on('click', function (e) {
    //     var anchor = $(this);
    //     $('html, body').stop().animate({
    //         scrollTop: $(anchor.attr('href')).offset().top
    //     }, 1000);
    //     e.preventDefault();
    // });

    // smooth scroll
    $("a").on("click", function(event) {

        if (this.hash !== "") {
            event.preventDefault();

            var hash = this.hash;

            $("html, body").animate({

                scrollTop: $(hash).offset().top - 100

            }, 850);

        }

    });
    // ================================================
    // Scroll Spy
    // ================================================
    $('body').scrollspy({
        target: '#navbarSupportedContent',
        // offset: 100
    });
});
