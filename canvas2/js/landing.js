$(document).ready(function(){
    $(".menu-button").click(function(){
        $(".menu-closed").toggleClass("menu-opened");
        $(".menu-sidebar-closed").toggleClass("menu-sidebar");
    });
});
