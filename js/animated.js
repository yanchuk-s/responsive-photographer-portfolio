

// aniamte secondtext
$(document).ready(function () {
        var objToStick = $(".box"); //Получаем нужный объект
        var topOfObjToStick = $(objToStick).offset().top; //Получаем начальное расположение нашего блока

        $(window).scroll(function () {
            var windowScroll = $(window).scrollTop(); //Получаем величину, показывающую на сколько прокручено окно

            if (windowScroll = topOfObjToStick) { // Если прокрутили больше, чем расстояние до блока, то приклеиваем его
                $(objToStick).addClass('animated slideInUp');
           
            };
        });
    });





// плавний скролінг
$(document).ready(function(){
    
    setBindings(); 
    
});

function setBindings() {
    
    $("li a").click(function(e){
        
        e.preventDefault();
        var sectionID = e.currentTarget.id + "Section";
        
       
        
        $("html body").animate({
            
            scrollTop: $("#" + sectionID).offset().top
        }, 1000)
    })
    
}
		 


$(".homesection h1").animated("bounceInDown", "bounceOutDown");

$(".homesection p").animated("bounceInLeft", "bounceOutDown");


$("#camera").animated("slideInRight", "bounceOutDown");

$(".aboutMe h1").animated("rotateInDownLeft", "bounceOutDown");
$(".aboutMe p").animated("slideInUp", "bounceOutDown");


$("#delay-1").animated("zoomInRight", "bounceOutDown");

$("#delay-2").animated("zoomInLeft", "bounceOutDown");

$("#delay-3").animated("zoomInRight", "bounceOutDown");

$("#delay-4").animated("zoomInLeft", "bounceOutDown");

$("#bright").animated("slideInLeft", "bounceOutDown");


$(".PortfolioShowcase h1").animated("lightSpeedIn", "bounceOutDown");

$(".PortfolioShowcase p").animated("fadeIn", "bounceOutDown");

// SLIDER PORTFOLIO 

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1} 
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none"; 
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block"; 
  dots[slideIndex-1].className += " active";
}