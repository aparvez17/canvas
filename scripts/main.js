$(document).ready(function(){
    var menu = 0;
    $("#menu-link").click(function(){
        content_blur(10);
        open_close_menu();
    });
    $()
    $('.works-link').click(function(){
        var url = $(this).data('url');
        alert(url);
    });

    current_color = 0;
    colors = ["#ffbd00", "#ff2840", "#d03bfc", "#00cafc", "#00f785"]
    $("#menu a").hover(function(){
        $(this).css('background-color', colors[current_color]);
        $(this).css('color', '#fff');
        $(this).stop().animate({paddingLeft: '40px'}, 200);
        current_color += 1;
        if (current_color > 4){ current_color = 0; }
    }, function(){
        $(this).css('background-color', '#ffffff');
        $(this).css('color', '#000');
        $(this).stop().animate({paddingLeft: '25px'}, 200);
    });

    $('#menu-wrap').click(function(){
        content_blur(0);
        open_close_menu();
        close_contact();

    });

});
var width = window.innerWidth;
var height = window.innerHeight;
function open_close_menu(){
    if ($("#menu").attr( "active") == '0'){
        $("#menu-wrap, #menu").show();
        $("#menu-wrap, #menu").animate({opacity: 1}, 300);
        $("#content").css('-webkit-transform', 'scale(0.9)');
        $("#menu-link").animate({opacity: 0}, 300);
        $( "body" ).mousemove(function( event ) {
            mouse_x = event.pageX - (width/2);
            mouse_y = event.pageY - (height/2);
            $("#menu").css('-webkit-transform', 'rotateY('+mouse_x/80+'deg) rotateX('+mouse_y/50+'deg)');
        });
        $("#menu").attr( "active", "1");
    }
    else{
        $("#content").css('-webkit-transform', 'scale(1)');
        $("#menu-link").animate({opacity: 1}, 300);
        $("#menu-wrap, #menu").animate({opacity: 0}, 300);
        $("#menu-wrap, #menu").hide();
        $("#menu").attr( "active", "0");
    }
}

function open_contact(){
    open_close_menu();
    $("#menu").attr( "active", "1");
    $("#menu-wrap").show();
    
    $("#contact-form").show();
    $("#contact-form").animate({opacity: 1}, 300);
    $("#contact-form-wrap").animate({opacity: 0.6}, 300);
}

function close_contact(){
    $("#contact-form-wrap").animate({opacity: 0.0}, 300);
    $("#contact-form").animate({opacity: 0}, 300);
    $("#contact-form").hide();
}
function content_blur(amount){
        var filterVal = 'blur('+amount+'px)';
        $('#content').css('filter', filterVal)
         .css('webkitFilter', filterVal)
         .css('mozFilter', filterVal)
         .css('oFilter', filterVal)
         .css('msFilter', filterVal)
         .css('transition', 'all 0.2s ease-in-out')
         .css('-webkit-transition', 'all 0.2s ease-in-out')
         .css('-moz-transition', 'all 0.2s ease-in-out')
         .css('-o-transition', 'all 0.2s ease-in-out');
}

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