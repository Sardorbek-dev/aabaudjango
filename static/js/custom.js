/* ----------------------------------------------------------------

[ Custom settings ]

01. ScrollIt
02. Navbar scrolling background
03. Close navbar-collapse when a  clicked
04. Sections background image from data background 
05. Isotope active
06. Animations
07. YouTubePopUp
08. Testimonials owlCarousel
09. Projects owlCarousel
10. Project Page owlCarousel - NEW
11. Blog owlCarousel
12. Team owlCarousel
13. Clients owlCarousel
14. Services owlCarousel
15. Team owlCarousel
16. MagnificPopup (Image, Youtube, Vimeo and custom popup)
17. Scroll back to top
18. Slider
19. Accordion Box
20. Preloader
21. Contact Form

------------------------------------------------------------------- */

$(function () {

    "use strict";

    // Preloader
    $("#preloader").fadeOut(700);
    $(".preloader-bg").delay(600).fadeOut(700);

    var wind = $(window);

    // ScrollIt
    $.scrollIt({
        upKey: 38,                // key code to navigate to the next section
        downKey: 40,              // key code to navigate to the previous section
        easing: 'swing',          // the easing function for animation
        scrollTime: 600,          // how long (in ms) the animation takes
        activeClass: 'active',    // class given to the active nav element
        onPageChange: null,       // function(pageIndex) that is called when page is changed
        topOffset: -70            // offste (in px) for fixed top navigation
    });

    // Navbar scrolling background
    wind.on("scroll", function () {
        var bodyScroll = wind.scrollTop(),
            navbar = $(".navbar"),
            logo = $(".navbar .logo> img");
        if (bodyScroll > 100) {
            navbar.addClass("nav-scroll");
            logo.attr('src', 'img/logo.png');
        } else {
            navbar.removeClass("nav-scroll");
            logo.attr('src', 'img/logo.png');
        }
    });

    // Close navbar-collapse when a  clicked
    $(".navbar-nav .dropdown-item a").on('click', function () {
        $(".navbar-collapse").removeClass("show");
    });

    // Sections background image from data background
    var pageSection = $(".bg-img, section");
    pageSection.each(function (indx) {
        if ($(this).attr("data-background")) {
            $(this).css("background-image", "url(" + $(this).data("background") + ")");
        }
    });

    // Isotope Active
    $('.bauen-project-items').imagesLoaded(function () {
        // Add isotope on click filter function
        $('.bauen-project-filter li').on('click', function () {
            $(".bauen-project-filter li").removeClass("active");
            $(this).addClass("active");
            var selector = $(this).attr('data-filter');
            $(".bauen-project-items").isotope({
                filter: selector
                , animationOptions: {
                    duration: 750
                    , easing: 'linear'
                    , queue: false
                    ,
                }
            });
            return false;
        });
        $(".bauen-project-items").isotope({
            itemSelector: '.single-item'
            , layoutMode: 'masonry'
            ,
        });
    });

    // Isotope Active Masonry Gallery
    $('.bauen-gallery-items').imagesLoaded(function () {
        // Add isotope on click filter function
        $('.bauen-gallery-filter li').on('click', function () {
            $(".bauen-gallery-filter li").removeClass("active");
            $(this).addClass("active");
            var selector = $(this).attr('data-filter');
            $(".bauen-gallery-items").isotope({
                filter: selector
                , animationOptions: {
                    duration: 750
                    , easing: 'linear'
                    , queue: false
                    ,
                }
            });
            return false;
        });
        $(".bauen-gallery-items").isotope({
            itemSelector: '.single-item'
            , layoutMode: 'masonry'
            ,
        });
    });

    // Animations
    var contentWayPoint = function () {
        var i = 0;
        $('.animate-box').waypoint(function (direction) {
            if (direction === 'down' && !$(this.element).hasClass('animated')) {
                i++;
                $(this.element).addClass('item-animate');
                setTimeout(function () {
                    $('body .animate-box.item-animate').each(function (k) {
                        var el = $(this);
                        setTimeout(function () {
                            var effect = el.data('animate-effect');
                            if (effect === 'fadeIn') {
                                el.addClass('fadeIn animated');
                            }
                            else if (effect === 'fadeInLeft') {
                                el.addClass('fadeInLeft animated');
                            }
                            else if (effect === 'fadeInRight') {
                                el.addClass('fadeInRight animated');
                            }
                            else {
                                el.addClass('fadeInUp animated');
                            }
                            el.removeClass('item-animate');
                        }, k * 200, 'easeInOutExpo');
                    });
                }, 100);
            }
        }, {
            offset: '85%'
        });
    };
    $(function () {
        contentWayPoint();
    });

    // YouTubePopUp
    $("a.vid").YouTubePopUp();

    // Testimonials owlCarousel
    $('.testimonials .owl-carousel').owlCarousel({
        loop: true,
        margin: 30,
        mouseDrag: true,
        autoplay: false,
        dots: true,
        nav: false,
        navText: ["<span class='lnr ti-angle-left'></span>", "<span class='lnr ti-angle-right'></span>"],
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });

    // Projects owlCarousel
    $('.projects .owl-carousel').owlCarousel({
        loop: true
        , margin: 30
        , mouseDrag: true
        , autoplay: false
        , dots: true
        , autoplayHoverPause: true
        , responsiveClass: true
        , responsive: {
            0: {
                items: 1
                ,
            }
            , 600: {
                items: 2
            }
            , 1000: {
                items: 2
            }
        }
    });


    // Project Page owlCarousel
    $('.project-page .owl-carousel').owlCarousel({
        loop: true
        , margin: 30
        , mouseDrag: true
        , autoplay: false
        , dots: false
        , nav: true
        , navText: ['<i class="ti-arrow-left" aria-hidden="true"></i>', '<i class="ti-arrow-right" aria-hidden="true"></i>']
        , responsiveClass: true
        , responsive: {
            0: {
                items: 1
                ,
            }
            , 600: {
                items: 1
            }
            , 1000: {
                items: 1
            }
        }
    });

    // Blog owlCarousel
    $('.bauen-blog .owl-carousel').owlCarousel({
        loop: true
        , margin: 30
        , mouseDrag: true
        , autoplay: false
        , dots: true
        , responsiveClass: true
        , responsive: {
            0: {
                items: 1
                ,
            }
            , 600: {
                items: 2
            }
            , 1000: {
                items: 2
            }
        }
    });

    // Team owlCarousel
    $('.team .owl-carousel').owlCarousel({
        loop: true
        , margin: 30
        , dots: true
        , mouseDrag: true
        , autoplay: false
        , responsiveClass: true
        , responsive: {
            0: {
                items: 1,
                dots: true
            }
            , 600: {
                items: 2
            }
            , 1000: {
                items: 3
            }
        }
    });

    // Clients owlCarousel
    $('.clients .owl-carousel').owlCarousel({
        loop: true
        , margin: 30
        , mouseDrag: true
        , autoplay: true
        , dots: false
        , responsiveClass: true
        , responsive: {
            0: {
                margin: 10
                , items: 3
            }
            , 600: {
                items: 3
            }
            , 1000: {
                items: 5
            }
        }
    });

    // MagnificPopup
    $(".img-zoom").magnificPopup({
        type: "image"
        , closeOnContentClick: !0
        , mainClass: "mfp-fade"
        , gallery: {
            enabled: !0
            , navigateByImgClick: !0
            , preload: [0, 1]
        }
    })
    $('.magnific-youtube, .magnific-vimeo, .magnific-custom').magnificPopup({
        disableOn: 700
        , type: 'iframe'
        , mainClass: 'mfp-fade'
        , removalDelay: 300
        , preloader: false
        , fixedContentPos: false
    });

    //  Scroll back to top
    var progressPath = document.querySelector('.progress-wrap path');
    var pathLength = progressPath.getTotalLength();
    progressPath.style.transition = progressPath.style.WebkitTransition = 'none';
    progressPath.style.strokeDasharray = pathLength + ' ' + pathLength;
    progressPath.style.strokeDashoffset = pathLength;
    progressPath.getBoundingClientRect();
    progressPath.style.transition = progressPath.style.WebkitTransition = 'stroke-dashoffset 10ms linear';
    var updateProgress = function () {
        var scroll = $(window).scrollTop();
        var height = $(document).height() - $(window).height();
        var progress = pathLength - (scroll * pathLength / height);
        progressPath.style.strokeDashoffset = progress;
    }
    updateProgress();
    $(window).scroll(updateProgress);
    var offset = 150;
    var duration = 550;
    jQuery(window).on('scroll', function () {
        if (jQuery(this).scrollTop() > offset) {
            jQuery('.progress-wrap').addClass('active-progress');
        } else {
            jQuery('.progress-wrap').removeClass('active-progress');
        }
    });
    jQuery('.progress-wrap').on('click', function (event) {
        event.preventDefault();
        jQuery('html, body').animate({ scrollTop: 0 }, duration);
        return false;
    })

});

// Slider 
$(document).ready(function () {
    var owl = $('.header .owl-carousel');
    // Slider owlCarousel
    $('.slider .owl-carousel').owlCarousel({
        items: 1,
        loop: true,
        dots: false,
        margin: 0,
        autoplay: true,
        autoplayTimeout: 5000,
        nav: true,
        navText: ['<i class="ti-angle-left" aria-hidden="true"></i>', '<i class="ti-angle-right" aria-hidden="true"></i>']
    });
    // Slider owlCarousel
    $('.slider-fade .owl-carousel').owlCarousel({
        items: 1,
        loop: true,
        dots: false,
        margin: 0,
        autoplay: true,
        autoplayTimeout: 5000,
        animateOut: 'fadeOut',
        nav: true,
        navText: ['<i class="ti-angle-left" aria-hidden="true"></i>', '<i class="ti-angle-right" aria-hidden="true"></i>']
    });
    owl.on('changed.owl.carousel', function (event) {
        var item = event.item.index - 2;     // Position of the current item
        $('h4').removeClass('animated fadeInUp');
        $('h1').removeClass('animated fadeInUp');
        $('p').removeClass('animated fadeInUp');
        $('.butn-light').removeClass('animated fadeInUp');
        $('.owl-item').not('.cloned').eq(item).find('h4').addClass('animated fadeInUp');
        $('.owl-item').not('.cloned').eq(item).find('h1').addClass('animated fadeInUp');
        $('.owl-item').not('.cloned').eq(item).find('p').addClass('animated fadeInUp');
        $('.owl-item').not('.cloned').eq(item).find('.butn-light').addClass('animated fadeInUp');
    });
});

// Accordion Box
if ($(".accordion-box").length) {
    $(".accordion-box").on("click", ".acc-btn", function () {
        var outerBox = $(this).parents(".accordion-box");
        var target = $(this).parents(".accordion");

        if ($(this).next(".acc-content").is(":visible")) {
            //return false;
            $(this).removeClass("active");
            $(this).next(".acc-content").slideUp(300);
            $(outerBox).children(".accordion").removeClass("active-block");
        } else {
            $(outerBox).find(".accordion .acc-btn").removeClass("active");
            $(this).addClass("active");
            $(outerBox).children(".accordion").removeClass("active-block");
            $(outerBox).find(".accordion").children(".acc-content").slideUp(300);
            target.addClass("active-block");
            $(this).next(".acc-content").slideDown(300);
        }
    });
}


// Contact Form
var form = $('.contact__form'),
    message = $('.contact__msg'),
    form_data;
// success function
function done_func(response) {
    message.fadeIn().removeClass('alert-danger').addClass('alert-success');
    message.text(response);
    setTimeout(function () {
        message.fadeOut();
    }, 2000);
    form.find('input:not([type="submit"]), textarea').val('');
}
// fail function
function fail_func(data) {
    message.fadeIn().removeClass('alert-success').addClass('alert-success');
    message.text(data.responseText);
    setTimeout(function () {
        message.fadeOut();
    }, 2000);
}
form.submit(function (e) {
    e.preventDefault();
    form_data = $(this).serialize();
    $.ajax({
        type: 'POST',
        url: form.attr('action'),
        data: form_data
    })
        .done(done_func)
        .fail(fail_func);
});

// Create reusable components
// Header

class Header extends HTMLElement {
    connectedCallback() {
        this.innerHTML =
            `
            <!-- Preloader -->
            <div class="preloader-bg"></div>
            <div id="preloader">
                <div id="preloader-status">
                    <div class="preloader-position loader"><span></span></div>
                </div>
            </div>
        
            <!-- Progress scroll totop -->
            <div class="progress-wrap cursor-pointer">
                <svg class="progress-circle svg-content" width="100%" height="100%" viewBox="-1 -1 102 102">
                    <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" />
                </svg>
            </div>
            <!-- Navbar -->
            <nav class="navbar navbar-expand-lg">
                <!-- Logo -->
                <div class="logo-wrapper valign">
                    <div class="logo">
                        <a href="index.html"> <img src="img/logo_with_text.svg" class="logo-img" alt="">
                            <!-- <h3>A+A  B A U<span>INNOVATE DESIGN</span></h3> -->
                        </a>
                    </div>
                </div>
                <!-- Button -->
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbar"
                    aria-controls="navbar" aria-expanded="false" aria-label="Toggle navigation"> <span
                        class="navbar-toggler-icon"><i class="ti-menu"></i></span> </button>
                <!-- Menu -->
                <div class="collapse navbar-collapse p-md-4 p-lg-0" id="navbar">
                    <ul class="navbar-nav ms-auto">
                        <li class="nav-item"><a class="nav-link" href="index.html">Home</a></li>
                        <li class="nav-item"><a class="nav-link" href="about.html">Über uns</a></li>
                        <li class="nav-item"><a class="nav-link" href="our-services.html">Services</a></li>
                        <li class="nav-item dropdown"> <a class="nav-link dropdown-toggle" href="#" role="button"
                                data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-expanded="false">Aktuelles <i
                                    class="ti-angle-down"></i></a>
                            <ul class="dropdown-menu">
                                <li><a href="process.html" class="dropdown-item"><span>Work Process</span></a></li>
                                <li><a href="contact.html" class="dropdown-item"><span>Partner werden</span></a></li>
                            </ul>
                        </li>
                        <li class="nav-item"><a class="nav-link" href="contact.html">Kontakt</a></li>
                    </ul>
                </div>
            </nav>
            `
    }
}

//Footer

class Footer extends HTMLElement {
    connectedCallback() {
        this.innerHTML =
            `
            <!-- Footer -->
            <footer class="main-footer dark">
                <div class="container">
                    <div class="row">
                        <div class="col-md-4 mb-30">
                            <div class="item fotcont">
                                <div class="fothead">
                                    <h6>A + A BAU</h6>
                                </div>
                                <div class="info-wrapper">
                                    <div class="more"><a href="about.html" class="link-btn" style="text-transform: none;"
                                            tabindex="0">Über uns</a></div>
                                    <div class="more"><a href="contact.html" class="link-btn" style="text-transform: none;"
                                            tabindex="0">Kontakt</a></div>
                                    <div class="more"><a href="process.html" class="link-btn" style="text-transform: none;"
                                            tabindex="0">Work Process</a></div>
                                    <div class="more"><a href="contact.html" class="link-btn" style="text-transform: none;"
                                            tabindex="0">Partner werden</a></div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4 mb-30">
                            <div class="item fotcont">
                                <div class="fothead">
                                    <h6>Services</h6>
                                </div>
                                <div class="info-wrapper">
                                    <div class="more"><a href="about.html" class="link-btn" style="text-transform: none;"
                                            tabindex="0">Renovierung</a></div>
                                    <div class="more"><a href="contact.html" class="link-btn" style="text-transform: none;"
                                            tabindex="0">Sanierung</a></div>
                                    <div class="more"><a href="about.html" class="link-btn" style="text-transform: none;"
                                            tabindex="0">Tapetizieren</a></div>
                                    <div class="more"><a href="contact.html" class="link-btn" style="text-transform: none;"
                                            tabindex="0">Möbel aufbauen</a></div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4 mb-30">
                            <div class="item fotcont">
                                <div class="fothead">
                                    <h6>Kontakt</h6>
                                </div>
                                <p class="white">Franz-Wolter-Straße 5</p>
                                <p class="white">81925 München</p>
                                <p class="white">info@aplusabau.de</p>
                                <p class="white">+49 17621754911</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="sub-footer">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-4">
                                <div class="text-left">
                                    <p>© 2023 A+A Bau. Alle Rechte vorbehalten.</p>
                                </div>
                            </div>
                            <div class="col-md-4 abot">
                                <div class="social-icon"> <a href="index.html"><i class="ti-facebook"></i></a> <a
                                        href="index.html"><i class="ti-twitter"></i></a> <a href="index.html"><i
                                            class="ti-instagram"></i></a> <a href="index.html"><i
                                            class="ti-pinterest"></i></a> </div>
                            </div>
                            <div class="col-md-4">
                                <p class="right">
                                    <a href="impressum.html">Impressum</a>
                                    &amp;
                                    <a href="data-protection.html">Datenschutz</a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>

            `
    }
}

customElements.define('main-header', Header);
customElements.define('main-footer', Footer);


// cookies

var cookieAccepted = getCookie('cookieAccepted');
if (cookieAccepted === 'true') {
    // Cookie wurde bereits akzeptiert
    console.log('Cookie wurde akzeptiert.');
} else if (cookieAccepted === 'false') {
    // Cookie wurde bereits abgelehnt
    console.log('Cookie wurde abgelehnt.');
} else {
    // Cookie-Banner anzeigen
    var cookieModal = new bootstrap.Modal(document.getElementById('cookieModal'));
    cookieModal.show();
}

// Event Listener für den Akzeptieren-Button
document.getElementById('acceptButton').addEventListener('click', function () {
    setCookie('cookieAccepted', 'true', 365); // Cookie für 365 Tage speichern
    var cookieModal = bootstrap.Modal.getInstance(document.getElementById('cookieModal'));
    cookieModal.hide();
});

// Event Listener für den Ablehnen-Button
document.getElementById('rejectButton').addEventListener('click', function () {
    setCookie('cookieAccepted', 'false', 365); // Cookie für 365 Tage speichern
    var cookieModal = bootstrap.Modal.getInstance(document.getElementById('cookieModal'));
    cookieModal.hide();
});

// Funktion zum Setzen des Cookies
function setCookie(name, value, days) {
    var expires = '';
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = '; expires=' + date.toUTCString();
    }
    document.cookie = name + '=' + value + expires + '; path=/';
}

// Funktion zum Auslesen des Cookies
function getCookie(name) {
    var nameEQ = name + '=';
    var cookies = document.cookie.split(';');
    for (var i = 0; i < cookies.length; i++) {
        var cookie = cookies[i];
        while (cookie.charAt(0) === ' ') {
            cookie = cookie.substring(1, cookie.length);
        }
        if (cookie.indexOf(nameEQ) === 0) {
            return cookie.substring(nameEQ.length, cookie.length);
        }
    }
    return null;
}