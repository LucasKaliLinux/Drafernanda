
$(window).on("load", function(){

    var menu = $(".menu-mobile");

    menu.click(function(){
        $(this).find("ul").slideToggle();
    })

});
