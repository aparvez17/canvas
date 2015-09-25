$(document).ready(function(){
    /* Place work items */
    var i;
    var lr = 50; /* Diameter of circles */
    var w = $('#works').width();
    var r = Math.round(1 / 2 * w - lr);
    for (i = 0; i < 12; i++) {
        var id = '#work-' + i;
        var xpos = Math.round(w / 2 + r * Math.sin(i*Math.PI/6));
        var ypos = Math.round(w / 2 - r * Math.cos(i*Math.PI/6));
        $(id).css({
            'top':ypos + 'px',
            'left':xpos + 'px'
        });
        $(id).delay(-1*i*i + 100*i).fadeIn(400);
    }

    var item_w = 90;
    var size_change = 20;
    var margin = -45;

    $('.works-item').mouseenter(function(){
        var img = $("#work-3").data('img');
        img = "url(" + img + ")";
        $('#background').css("background-image",img);
        $('#background').fadeTo(400,0.6);
        $(this).stop().animate({"width":(item_w+size_change),
                                "height":(item_w+size_change),
                                "margin-left":margin-(size_change/2),
                                "margin-top":margin-(size_change/2),
                                "background-size":"110%"}, 120);
    });
    
    $('.works-item').mouseleave(function(){
        $('#background').fadeTo(400,0);
        $(this).stop().animate({"width":(item_w),
                                "height":(item_w),
                                "margin-left":margin,
                                "margin-top":margin, 
                                "background-size":"100%"}, 120);
    });
    
    $('#works-icon-link').click(function() {
        window.location.href = "../index.html";
    });
});