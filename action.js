$(document).ready(function() {   
  var lister = $( "img" ).toArray();
  console.log(lister)

  $(window).scroll(function () {
    var scrollTop = $(window).scrollTop();
    var height = $(window).height();

    /* First page css */

    if (scrollTop > 200  ){
      $(lister[0]).addClass("vislble")
    }

    if (scrollTop > 700 ){
      $(lister[1]).addClass("vislble")
    }

    if (scrollTop > 1200 ){
      $(lister[2]).addClass("vislble")
    }

    if (scrollTop > 1700 ){
      $(lister[3]).addClass("vislble")
    }

    if (scrollTop > 2200  ){
      $(lister[4]).addClass("vislble")
    }

    if (scrollTop > 2700  ){
      $(lister[0]).removeClass("vislble")
      $(lister[1]).removeClass("vislble")
      $(lister[2]).removeClass("vislble")
      $(lister[3]).removeClass("vislble")
      $(lister[4]).removeClass("vislble")
    }

  });
});
