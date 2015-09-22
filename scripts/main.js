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