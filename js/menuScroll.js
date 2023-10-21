
$(function(){

    var nav = $("header nav").find("a");

    nav.click(function(){
        var href = $(this).attr("href");
        var offsetTop = $(href).offset().top;

        $("html, body").animate({
            "scrollTop":offsetTop
        });
    });

});