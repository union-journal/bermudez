$(document).ready(function() {   
  var lister = $( "img" ).toArray();
  console.log(lister)

  $(window).scroll(function () {
    var scrollTop = $(window).scrollTop();
    var height = $(window).height();
    console.log(scrollTop)

    if (scrollTop > 200 && scrollTop < 400 ){
      $(lister[0]).removeClass("invisible")
      $(lister[0]).addClass("visible")
    }

    if (scrollTop > 1200 && scrollTop < 1400 ){
      $(lister[1]).removeClass("invisible")
      $(lister[1]).addClass("visible")
    }

    if (scrollTop > 2200 && scrollTop < 2400 ){
      $(lister[2]).removeClass("invisible")
      $(lister[2]).addClass("visible")
    }

    if (scrollTop > 3200 && scrollTop < 3400 ){
      $(lister[3]).removeClass("invisible")
      $(lister[3]).addClass("visible")
    }

    if (scrollTop > 4200 && scrollTop < 4400 ){
      $(lister[4]).removeClass("invisible")
      $(lister[4]).addClass("visible")
    }

    if (scrollTop > 5200 && scrollTop < 5400 ){
      
    
      $(lister[0]).css({'opacity': (( scrollTop - 2700 ) / 500) }); 
      $(lister[1]).css({'opacity': (( scrollTop - 2700 ) / 500) }); 
      $(lister[2]).css({'opacity': (( scrollTop - 2700 ) / 500) }); 
      $(lister[3]).css({'opacity': (( scrollTop - 2700 ) / 500) }); 
      $(lister[4]).css({'opacity': (( scrollTop - 2700 ) / 500) }); 

      $(lister[5]).css({'opacity': (( scrollTop - 2700 ) / 500) }); 
    }




  });
});
