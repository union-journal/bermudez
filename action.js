$(document).ready(function() {
  function disp( divs ) {
    var imglist = [];
    for ( var i = 0; i < divs.length; i++ ) {
      imglist.push( divs[ i ].innerHTML );
    }
  }
   
  disp( $( "img" ).toArray());

  $(window).scroll(function () {
    var scrollTop = $(window).scrollTop();
    var height = $(window).height();

    
    $(imglist[0]).css({
        'opacity': ((height - scrollTop) / height)
    }); 


  });
});
