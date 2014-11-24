// Avoid `console` errors in browsers that lack a console.
(function() {
    var method;
    var noop = function () {};
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
}());

// Place any jQuery/helper plugins in here.


// jQuery to collapse the navbar on scroll
$(window).scroll(function() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
});

//Setting the carousel speed interval - http://getbootstrap.com/javascript/#carousel
 $('.carousel').carousel({
    interval: 2500 //The amount of time to delay between automatically cycling an item
})
    
//jQuery Easing that uses jQuery for scrolling between sections
//Reference: http://gsgd.co.uk/sandbox/jquery/easing/ and http://easings.net/
$(function() {
    $('a.scroll-section').bind('click', function(event) {
        var section = $(this);
        $('html, body').stop().animate({
            scrollTop: $(section.attr('href')).offset().top
        }, 2500, 'easeOutQuint');
        event.preventDefault();
    });
});