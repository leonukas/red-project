// Slick slider

$(document).ready(function(){
   $('.photo-carousel').slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      nextArrow: '<i class="fa fa-angle-right"></i>',
      prevArrow: '<i class="fa fa-angle-left"></i>',
      responsive: [
         {
            breakpoint: 1100,
            settings: {
               slidesToShow: 3,
               slidesToScroll: 1,
            }
         },
         {
            breakpoint: 850,
            settings: {
               slidesToShow: 2,
               slidesToScroll: 1,
            }
         },
         {
            breakpoint: 550,
            settings: {
               slidesToShow: 1,
               slidesToScroll: 1,
            }
         }
      ]
   });
});

$(".header-btn-a").click(function(e) {
    e.preventDefault();
    $("html, body").animate({
        scrollTop: $("#team").offset().top
    }, 800);
});
