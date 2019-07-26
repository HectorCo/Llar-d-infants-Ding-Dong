$(window).scroll(function() {
  $('#textoAnimado').each(function(){
  var imagePos = $(this).offset().top;

  var topOfWindow = $(window).scrollTop();
    if (imagePos < topOfWindow+400) {
      $(this).addClass("slideLeft");
    }
  });
});




$(window).scroll(function() {
  $('#entradaVideo').each(function(){
  var imagePos = $(this).offset().top;

  var topOfWindow = $(window).scrollTop();
    if (imagePos < topOfWindow+700) {
      $(this).addClass("fadeIn");
    }
  });
});


$(window).scroll(function() {
  $('#textoAnimado2').each(function(){
  var imagePos = $(this).offset().top;

  var topOfWindow = $(window).scrollTop();
    if (imagePos < topOfWindow+700) {
      $(this).addClass("fadeIn");
    }
  });
});


