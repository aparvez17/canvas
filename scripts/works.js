$(document).ready(function(){
    var page = 1;
    $('#works-nav-next').click(function(){
        fade_items(['#p1-tile-1','#p1-tile-2','#p1-tile-3','#p1-tile-4','.image-tile','.intro'],[200,400,550,650,725,0],1);
    });
});

function fade_items(ids,delays,dir) {
    for (var i = 0, l = ids.length; i < l; i++) {
        if (dir == 0) {
            $(ids[i]).delay(delays[i]).animate({opacity:1},400);
        } else {
            $(ids[i]).delay(delays[i]).animate({opacity:0},400);   
        }
    }
}