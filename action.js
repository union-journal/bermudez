$(document).ready(function() {   
  var lister = $( "img" ).toArray();
  console.log(lister)

  $(window).scroll(function () {
    var scrollTop = $(window).scrollTop();
    var height = $(window).height();

    if (scrollTop > 200 && scrollTop < 700 ){
      $(lister[0]).css({
        'opacity': (( scrollTop - 500 ) / 500)
      }); 
    }

    if (scrollTop > 700 && scrollTop < 1200 ){
      $(lister[1]).css({
        'opacity': (( scrollTop - 500 ) / 500)
      }); 
    }

    if (scrollTop > 1200 && scrollTop < 1700 ){
      $(lister[2]).css({
        'opacity': (( scrollTop - 500 ) / 500)
      }); 
    }

    if (scrollTop > 1700 && scrollTop < 2200 ){
      $(lister[3]).css({
        'opacity': (( scrollTop - 500 ) / 500)
      }); 
    }

    if (scrollTop > 1700 && scrollTop < 2200 ){
      $(lister[4]).css({
        'opacity': (( scrollTop - 500 ) / 500)
      }); 
    }

    if (scrollTop > 1700 && scrollTop < 2200 ){
      $(lister[5]).css({
        'opacity': (( scrollTop - 500 ) / 500)
      }); 
    }
  });
});
