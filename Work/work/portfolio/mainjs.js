$('#goToBottom').click(function(){

  var WH = $(window).height();  
  var SH = $('body').prop("scrollHeight");
  $('html, body').stop().animate({scrollTop: SH-WH}, 2500);

}); 

// $("#footer ,.gallery_product").hide().fadeIn(4000); {
	$(window).on("load",function() {
  $(window).scroll(function() {
    var windowBottom = $(this).scrollTop() + $(this).innerHeight();
    $("#footer ,.gallery_product").each(function() {
      /* Check the location of each desired element */
      var objectBottom = $(this).offset().top + $(this).outerHeight();
      
      /* If the element is completely within bounds of the window, fade it in */
      if (objectBottom < windowBottom) { //object comes into view (scrolling down)
        if ($(this).css("opacity")==0) {$(this).fadeTo(900,1);}
      } else { //object goes out of view (scrolling up)
        if ($(this).css("opacity")==1) {$(this).fadeTo(500,0);}
      }
    });
  }).scroll(); //invoke scroll-handler on page-load
});

$("#middle").click(function() {
    $('html, body').animate({
        scrollTop: $("#Gallery").offset().top
    }, 2000);
});

$("#gotoTop").click(function() {
    $('html, body').animate({
        scrollTop: $("#navbar").offset().top
    }, 1000);
});

