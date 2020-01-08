$(document).ready(function() {   
  var lister = $( "img" ).toArray();
  $('html, body').animate({scrollTop: $("#page").offset().top}, 2000);

  console.log(lister)

  $(window).scroll(function () {
    var scrollTop = $(window).scrollTop();
    var height = $(window).height();
    console.log(scrollTop)

    /* FIRST PAGE */
    if (scrollTop > 200 && scrollTop < 400 ){
      $(lister[0]).removeClass("invisible")
      $(lister[0]).addClass("visible")
    }

    if (scrollTop > 2200 && scrollTop < 2400 ){
      $(lister[1]).removeClass("invisible")
      $(lister[1]).addClass("visible")
    }

    if (scrollTop > 4200 && scrollTop < 4400 ){
      $(lister[2]).removeClass("invisible")
      $(lister[2]).addClass("visible")
    }

    if (scrollTop > 6200 && scrollTop < 6400 ){
      $(lister[3]).removeClass("invisible")
      $(lister[3]).addClass("visible")
    }

    if (scrollTop > 8200 && scrollTop < 8400 ){
      $(lister[4]).removeClass("invisible")
      $(lister[4]).addClass("visible")
    }

    if (scrollTop > 10200 && scrollTop < 10400 ){
      for (let i = 0; i < 5; ++i) {
        $(lister[i]).removeClass("visible")
        $(lister[i]).addClass("invisible")

      }
      $(lister[5]).removeClass("invisible")
      $(lister[5]).addClass("visible")
    }

    /* SECOND PAGE */
    if (scrollTop > 13200 && scrollTop < 13400 ){
      $(lister[5]).removeClass("visible")
      $(lister[5]).addClass("invisible")

      $(lister[6]).removeClass("invisible")
      $(lister[6]).addClass("visible")
    }

    if (scrollTop > 15200 && scrollTop < 15400 ){
      $(lister[7]).removeClass("invisible")
      $(lister[7]).addClass("visible")
    }

    if (scrollTop > 17200 && scrollTop < 17400 ){
      $(lister[8]).removeClass("invisible")
      $(lister[8]).addClass("visible")
    }

    if (scrollTop > 19200 && scrollTop < 19400 ){
      for (let i = 5; i < 9; ++i) {
        $(lister[i]).removeClass("visible")
        $(lister[i]).addClass("invisible")

      }
      $(lister[9]).removeClass("invisible")
      $(lister[9]).addClass("visible")
    }

  });
});
