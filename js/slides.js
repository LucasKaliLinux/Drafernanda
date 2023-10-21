$(function(){

    
    $("section.mosaico .center .mosaico-wraper").slick({
        centerMode: false,
        slidesToShow: 6,
        arrows: false,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    centerMode: true,
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 580,
                settings:{
                    arrows: false,
                    centerMode: true,
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 380,
                settings:{
                    arrows: false,
                    centerMode: true,
                    slidesToShow: 1
                }
            }
        ]
    });

    $("section.tratamentos .center").slick({
        centerMode: false,
        slidesToShow: 3,
        arrows: false,
        infinite: false,
        responsive:[
            {
                breakpoint:768,
                settings:{
                    arrows:false,
                    dots:true,
                    infinite: false,
                    centerMode: false,
                    slidesToShow: 2
                }
            },
            {
                breakpoint:580,
                settings:{
                    arrows:false,
                    dots:true,
                    infinite:false,
                    centerMode: false,
                    slidesToShow: 1
                }
            }
        ]
    });

    $("section.depoimentos .center").slick({
        arrows:false,
        centerMode:false,
        slidesToShow:1,
        infinite:false,
        dots:true
    });

});