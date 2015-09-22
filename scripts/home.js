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
    
    $('.works-item').mouseenter(function(){
        var img = $("#work-3").data('img');
        img = "url(" + img + ")";
        $('#background').css("background-image",img);
        $('#background').fadeTo(400,0.6);
        $(this).animate({"width":"+=20px","height":"+=20px","margin-left":"-=10px","margin-top":"-=10px","border-radius":"+=10px"});
    });
    
    $('.works-item').mouseleave(function(){
        $('#background').fadeTo(400,0);
         $(this).animate({"width":"-=20px","height":"-=20px","margin-left":"+=10px","margin-top":"+=10px","border-radius":"-=10px"});
    });
    
    $('#works-icon-link').click(function() {
        window.location.href = "../index.html";
    });
});