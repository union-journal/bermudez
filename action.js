$(document).ready(function() {   
  var lister = $( "img" ).toArray();
  console.log(lister)

  $(window).scroll(function () {
    var scrollTop = $(window).scrollTop();
    var height = $(window).height();

    $(lister[0]).css({
      'opacity': ((height - scrollTop) / height)
    }); 

    if (scrollTop > 500 && scrollTop < 1000 ){
      $(lister[1]).css({
        'opacity': (( scrollTop - 500 ) / 500)
      }); 
    }

  });
});
