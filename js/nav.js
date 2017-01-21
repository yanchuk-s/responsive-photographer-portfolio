 // адаптивное меню
$(document).ready(function() {
  $('#menu-trigger').click(function() {
    $('.nav').slideToggle(500);
  });//end slide toggle
  
  $(window).resize(function() {		
		if (  $(window).width() > 500 ) {			
			$('.nav').removeAttr('style');
		 }
	});//end resize
});//end ready




/* Open when someone clicks on the span element */
function openNav() {
    document.getElementById("myNav").style.width = "100%";
}

/* Close when someone clicks on the "x" symbol inside the overlay */
function closeNav() {
    document.getElementById("myNav").style.width = "0%";
};


// POrtfolio SECOND

// Gallery

$(function () {
  "use strict";
  
 $(".galer img").on({
    click: function () {
var src = $(this).attr("src");
     $(".show img").attr("src", src)
 },
   mouseout: function () {
   $(".show img")
.attr("src", src)
  }  
  });
});
