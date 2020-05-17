
// FUNCIÓN PARA QUE LA NAVBAR SE CIERRE AUTOMÁTICAMENTE TRAS UN CLICK

$('.navbar-collapse a').click(function(){
  $(".navbar-collapse").collapse('hide');
});

// EFECTOS SLIDERS

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


$(window).scroll(function() {
  $('#nina').each(function(){
  var imagePos = $(this).offset().top;

  var topOfWindow = $(window).scrollTop();
    if (imagePos < topOfWindow+700) {
      $(this).addClass("fadeIn");
    }
  });
});

$(window).scroll(function() {
  $('#mono').each(function(){
  var imagePos = $(this).offset().top;

  var topOfWindow = $(window).scrollTop();
    if (imagePos < topOfWindow+600) {
      $(this).addClass("slideLeft");
    }
  });
});

$(window).scroll(function() {
  $('#hipo').each(function(){
  var imagePos = $(this).offset().top;

  var topOfWindow = $(window).scrollTop();
    if (imagePos < topOfWindow+600) {
      $(this).addClass("slideRight");
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

// EFECTO DESCRIPCIÓN PROFES
$( function() {
  // run the currently selected effect
  function runEffect() {
    // get effect type from
    var selectedEffect = $( "#effectTypes" ).val();

    // Most effect types need no options passed by default
    var options = {};
    // some effects have required parameters
    if ( selectedEffect === "scale" ) {
      options = { percent: 50 };
    } else if ( selectedEffect === "size" ) {
      options = { to: { width: 280, height: 185 } };
    }

    // Run the effect
    $( "#effect" ).show( selectedEffect, options, 500, callback );
  };

  //callback function to bring a hidden box back
  function callback() {
    setTimeout(function() {
      $( "#effect:visible" ).removeAttr( "style" ).fadeOut();
    }, 1000 );
  };

  // Set effect from select menu value
  $( "#button" ).on( "click", function() {
    runEffect();
  });

  $( "#effect" ).hide();
} );

