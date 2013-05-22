$(document).ready(function(){
  $(function(){
    SyntaxHighlighter.all();
  });

  $('.carousels').flexslider({
    animation: "slide",
    controlNav: false,
    animationLoop: true,
    slideshow: false,
    itemWidth:82,
    itemMargin:18,
    asNavFor: '.slider'
  });
 
   $('.carouse-bottom').flexslider({
    animation: "slide",
    controlNav: false,
    animationLoop: true,
    slideshow: false,
    itemWidth:229,
    itemMargin:18
  });

  $('.slider').flexslider({
    animation: "slide",
    controlNav: false,
    animationLoop: true,
    slideshow: false,
    sync: ".carousels",
    start: function(slider){
      $('body').removeClass('loading');
    }
  });

  $('.first-and-second-carousel').jcarousel();
    $('.mycarousel').jcarousel({
      vertical: true,
      scroll: 1,
      wrap: null,
      auto:500
    });

  $(".touch span + span").click(function(){
    $(".ipod-nav > ul").slideToggle();     
  });

});
      