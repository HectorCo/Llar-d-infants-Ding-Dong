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



/* BOTÓN SUBIR */
document.addEventListener("scroll", yScroll);

function yScroll() {

  var yPos = window.pageYOffset;

  if (yPos > 10) {
    document.getElementById("top-btn").style.bottom = "10px";
  } else {
    document.getElementById("top-btn").style.bottom = "-50px";
  }
}

function ScrollTop() {

  var i = window.pageYOffset;

  var intervalTimer = setInterval(function() {
    if (i > 0) {
      window.scrollTo(0, i);
      i -= 15;
    } else {
      document.getElementById("top-btn").style.bottom = "-50px";
      clearInterval(intervalTimer);
    }
  }, 0.5);
}

