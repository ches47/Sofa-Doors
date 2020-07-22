$(function(){

    $(".js-range-slider").ionRangeSlider({
        type: "double",
        min: 15000,
        max: 50000,
        from: 15000,
        to: 35000,
    });


    $('.slider-slick').slick({
        centerMode: true,
        centerPadding: '0px',
        dots: true,
        nextArrow: false,
        prevArrow: false,
        slidesToShow: 3,
        responsive: [
          {
            breakpoint: 768,
            settings: {
              arrows: false,
              centerMode: true,
              centerPadding: '40px',
              slidesToShow: 3
            }
          },
          {
            breakpoint: 480,
            settings: {
              arrows: false,
              centerMode: true,
              centerPadding: '40px',
              slidesToShow: 1
            }
          }
        ]
      });


    

});