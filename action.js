$(document).ready(function() {
  function disp( divs ) {
    var imglist = [];
    for ( var i = 0; i < divs.length; i++ ) {
      imglist.push( divs[ i ].innerHTML );
    }
    return imglist 
  }
   
  var lister = disp( $( "img" ).toArray());
  console.log(lister)

  $(window).scroll(function () {
    var scrollTop = $(window).scrollTop();
    var height = $(window).height();

    
    $(lister[0]).css({
        'opacity': ((height - scrollTop) / height)
    }); 


  });
});
