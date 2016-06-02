$(document).ready(function(){


    $('.scroll-fade').addClass('opacity0')

    // Scroll event listener
    $(window).scroll(function () {
        scrollFade();
    });

    setTimeout(function(){
        window.scrollTo(0,1);
    }, 0);

});



// Controls Elements which fade in and out with the page scroll position
function scrollFade(){
    $('.scroll-fade').each(function () {
       var pos = $(this).offset().top - $(window).scrollTop();
       if ( pos < 500 && pos > 20) {
           $(this).addClass('opacity100'); // Fade in the current obj
           $(this).removeClass('opacity0');
       } else {
           $(this).removeClass('opacity100') // Fade out the current obj
           $(this).addClass('opacity0');
       }
    });
}
