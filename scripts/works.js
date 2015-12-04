var page = 1;
$(document).ready(function() {
    works_resize();
    $(window).on('resize',works_resize);
    $('#works-nav-next').click(function(){
        change_page(page,page+1,arr);
    });
    $('#works-nav-previous').click(function(){
        change_page(page,page-1,arr);
    });
    $('.image-change-tile').mouseenter(function(){
        $( this ).stop().animate({backgroundSize:'120%'},200);
    });
    $('.image-change-tile').mouseleave(function(){
        $( this ).stop().animate({backgroundSize:'100%'},200);
    });
});

function change_page(from,to,arr) {
    var pages = arr.length; // num pages
    
    if (to < 1 || to > pages) {
        return;
    }
    
    // ids to fade in or out
    var ids_out = new Array(arr[from-1]);
    var ids_in  = new Array(arr[to-1]);
    for (var i = 0; i < ids_out.length; i++) {
       ids_out[i] = "#p"+from+"-fade-"+(i+1);
    }
    for (var i = 0; i < ids_in.length; i++) {
       ids_in[i] = "#p"+to+"-fade-"+(i+1);
    }
    
    // fade page out
    fade_items(ids_out,0,0);
    $('#works-p-'+to).show();
    fade_items(ids_in,1,delay_calc(arr[from-1]));
    $('#works-p-'+from).delay(delay_calc(arr[from-1])+400).hide(0);
    
    // progress bar
    var progress = to / arr.length * 100;
    $('#works-nav-progress-fill').animate({width:progress+'%'},800);
    
    // update navigation
    if (to > 1) {
        $('#works-nav-previous').fadeOut(300,function(){ 
            $('#works-nav-previous-title').html(titles[to-2]);
        }).fadeIn(300);
    } else {
        $('#works-nav-previous').fadeOut(300);
    }
    if (to < pages) {
        $('#works-nav-next').fadeOut(300,function(){ 
            $('#works-nav-next-title').html(titles[to]);
        }).fadeIn(300);
    } else {
        $('#works-nav-next').fadeOut(300);
    }
    
    // update page
    page = to;
}


function works_resize() {
    // Resizes all elements on workpage appropriately
    
    var h = $( document ).height();
    var w = $( document ).width();
    
    // Responsive calculations
    if (h > 700) {
        var c = h - 320;
    } else {
        var c = h - 250;   
    }
    
    d = c / 2;
    c1 = 0.6*w - c;
    d1 = 0.6*w - d;
    
    $('.tiles').css('height',c);
    $('.tile-grid4').css('width',c);
    $('.tile-grid4-rest').css('width',c1);
    $('.tile-grid2').css('width',d);
    $('.tile-grid2-rest').css('width',d1);
    
    if (w < 700) {
        $('.tiles').css('height',w);
    }
}