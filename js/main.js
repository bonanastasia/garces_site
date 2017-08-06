$(document).ready(function() {

  /* Every time the window is scrolled ... */
  $(window).scroll(function() {

    /* Check the location of each desired element */
    $('.fade-in').each(function(i) {

      var bottom_of_object = $(this).offset().top;
      var bottom_of_window = $(window).scrollTop() + $(window).height();

      /* If the object is completely visible in the window, fade it it */
      if (bottom_of_window > bottom_of_object) {

        $(this).animate({
          'opacity': '1'
        }, 600);

      }

    });

  });
});

const totalSlides = $('.item').length;
var currentSlide = $("li.active").data("slide-to") + 1;

$('.slide-number.top').text(currentSlide);

$('#myCarousel').on('slid.bs.carousel', function() {
  currentSlide = $("li.active").data("slide-to") + 1;
  $('.slide-number.top').text(currentSlide);
});
