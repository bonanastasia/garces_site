const totalSlides = $('.item').length;
console.log(totalSlides);
var currentSlide = $("li.active").data("slide-to") + 1;
$('.slide-number.top').text(currentSlide);

$('#myCarousel').on('slid.bs.carousel', function() {
  currentSlide = $("li.active").data("slide-to") + 1;
  console.log(currentSlide);
  $('.slide-number.top').text(currentSlide);
})
