$(document).ready(function() {   
  var lister = $( "img" ).toArray();
  $('html, body').animate({scrollTop: $("#page").offset().top}, 2000);
  for (let i = 0; i < 5; ++i) {
    $(lister[i]).removeClass("visible")
    $(lister[i]).addClass("invisible")
  }
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


    /* PAGE THREE */
    if (scrollTop > 23200 && scrollTop < 23400 ){
      $(lister[9]).removeClass("visible")
      $(lister[9]).addClass("invisible")

      $(lister[10]).removeClass("invisible")
      $(lister[10]).addClass("visible")
    }

    if (scrollTop > 25200 && scrollTop < 25400 ){
      $(lister[11]).removeClass("invisible")
      $(lister[11]).addClass("visible")
    }
    if (scrollTop > 27200 && scrollTop < 27400 ){
      $(lister[12]).removeClass("invisible")
      $(lister[12]).addClass("visible")
    }
    if (scrollTop > 29200 && scrollTop < 29400 ){
      $(lister[13]).removeClass("invisible")
      $(lister[13]).addClass("visible")
    }

    
    if (scrollTop > 31200 && scrollTop < 31400 ){
      for (let i = 9; i < 14; ++i) {
        $(lister[i]).removeClass("visible")
        $(lister[i]).addClass("invisible")

      }
      $(lister[14]).removeClass("invisible")
      $(lister[14]).addClass("visible")
    }

    /* PAGE FOUR */
    if (scrollTop > 33200 && scrollTop < 33400 ){
      $(lister[14]).removeClass("visible")
      $(lister[14]).addClass("invisible")

      $(lister[15]).removeClass("invisible")
      $(lister[15]).addClass("visible")
    }

    if (scrollTop > 35200 && scrollTop < 35400 ){
      $(lister[16]).removeClass("invisible")
      $(lister[16]).addClass("visible")
    }
    if (scrollTop > 37200 && scrollTop < 37400 ){
      $(lister[17]).removeClass("invisible")
      $(lister[17]).addClass("visible")
    }
    if (scrollTop > 39200 && scrollTop < 39400 ){
      $(lister[18]).removeClass("invisible")
      $(lister[18]).addClass("visible")
    }


  });
});
