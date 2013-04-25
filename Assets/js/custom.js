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
        itemMargin:18,
        asNavFor: '.slider'
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
      
      //ipod nav 
      
      $(".touch span + span").click(function(){
	 $(".ipod-nav > ul").slideToggle();     
      });
 });
 
 //contten scroll function
jQuery(document).ready(function() {
	jQuery('.first-and-second-carousel').jcarousel();
    jQuery('.mycarousel').jcarousel({
        vertical: true,
        scroll: 1,
	wrap: 'circular',
	auto:500
    });
    
    //font resize function
      $('.font-resize').jfontsize({
                            btnMinusClasseId: '#jfontsize-m',
                            btnDefaultClasseId: '#jfontsize-d',
                            btnPlusClasseId: '#jfontsize-p'
                        });
});
