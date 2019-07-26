$(window).scroll(function() {
  $('#textoAnimado').each(function(){
  var imagePos = $(this).offset().top;

  var topOfWindow = $(window).scrollTop();
    if (imagePos < topOfWindow+600) {
      $(this).addClass("slideLeft");
    }
  });
});




$(window).scroll(function() {
  $('#entradaVideo').each(function(){
  var imagePos = $(this).offset().top;

  var topOfWindow = $(window).scrollTop();
    if (imagePos < topOfWindow+900) {
      $(this).addClass("fadeIn");
    }
  });
});


