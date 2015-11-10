$(document).ready(function(){
    /* Place work items */
    var i;
    var lr = 50; /* Diameter of circles */
    var w = $('#works').width();
    var r = Math.round(1 / 2 * w - lr);
    var positions = new Array();  
    var ids = new Array();

    for(i = 0; i < 12; i++){
        ids.push('#work-' + i);
    }

    function circles(rot){
        for (i = 0; i < 12; i++) {
            
            var xpos = Math.round(w / 2 + r * Math.sin((i*Math.PI/6)+rot));
            var ypos = Math.round(w / 2 - r * Math.cos((i*Math.PI/6)+rot));
            $(ids[i]).css({
                'top':ypos + 'px',
                'left':xpos + 'px'
            });
            positions.push([xpos, ypos]);
        }
    }
    circles(0)
    for(i = 0; i < 12; i++){
        $(ids[i]).delay(-1*i*i + 70*i).fadeIn(400);
    }
              
    var item_w = 90;
    var size_change = 20;
    var margin = -45;

    $('.works-item').mouseenter(function(){
        var img = $(this).data('img');
        var title = $(this).data('title');
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

    $( "body" ).mousemove(function( event ) {
        mouse_x = event.pageX;
        mouse_y = event.pageY;
        rot = mouse_x/1000;
        circles(rot);
    });
});