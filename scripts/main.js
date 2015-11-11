$(document).ready(function(){
    var menu = 0;
    $("#menu-link").click(function(){
        var filterVal = 'blur(5px)';
        $('#content').css('filter', filterVal)
         .css('webkitFilter', filterVal)
         .css('mozFilter', filterVal)
         .css('oFilter', filterVal)
         .css('msFilter', filterVal)
         .css('transition', 'all 0.2s ease-in')
         .css('-webkit-transition', 'all 0.2s ease-in')
         .css('-moz-transition', 'all 0.2s ease-in')
         .css('-o-transition', 'all 0.2s ease-in')
    });
    $('.works-link').click(function(){
        var url = $(this).data('url');
        alert(url);
    });
});

function fade_items(ids,dir,init) {
    // ids:  array of element handles to fade
    // dir:  0 to fade out, 1 to fade in
    // init: initial delay
    for (var i = 0, l = ids.length; i < l; i++) {
        $(ids[i]).delay(delay_calc(i)+init).animate({opacity:dir},400);
    }
}

function delay_calc(i) {
    // Calculates delay used in fading pages
    
    var a = 200;  // first delay
    var r = 0.75; // reduction parameter
    var delay = a*(Math.pow(r,i) - 1)/(r - 1);
    return delay;
    
}