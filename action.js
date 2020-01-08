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
      $(lister[5]).addClass("invisible")
      $(lister[5]).addClass("visible")
    }
  });
});
