$(document).ready(function() {   
  var lister = $( "img" ).toArray();
  console.log(lister)

  $(window).scroll(function () {
    var scrollTop = $(window).scrollTop();
    var height = $(window).height();

    
    $(lister[0]).css({
        'opacity': ((height - scrollTop) / height)
    }); 


  });
});
