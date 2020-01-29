$(document).ready(function() {   
  var lister = $( "img" ).toArray();
  $("html, body").animate({ scrollTop: 0 }, "slow");
  for (let i = 0; i < 19; ++i) {
    $(lister[i]).removeClass("visible")
    $(lister[i]).addClass("invisible")
  }
  console.log(lister)

  $(window).scroll(function () {
    var scrollTop = $(window).scrollTop();
    var height = $(window).height();
    console.log(scrollTop)

    /* 
    
    FIRST PAGE 
    
    */
    if (scrollTop > 200 && scrollTop < 600 ){
      $(lister[0]).css("opacity",  ($(window).scrollTop() -200 )/ 400) 
    }
    if (scrollTop < 200){
      $(lister[0]).css("opacity",  0) 
    }

    if (scrollTop > 800 && scrollTop < 1200 ){
      $(lister[1]).css("opacity",  ($(window).scrollTop() -800 )/ 400) 
    }
    if (scrollTop < 800){
      $(lister[1]).css("opacity",  0) 
    }

    if (scrollTop > 1400 && scrollTop < 1800){
      $(lister[2]).css("opacity",  ($(window).scrollTop() -1400)/ 400) 
    }
    if (scrollTop < 1400){
      $(lister[2]).css("opacity",  0) 
    }

    if (scrollTop > 2000 && scrollTop < 2400 ){
      $(lister[3]).css("opacity",  ($(window).scrollTop() -2000 )/ 400) 
    }
    if (scrollTop < 2000){
      $(lister[3]).css("opacity",  0) 
    }

    if (scrollTop > 2600 && scrollTop < 3000 ){
      $(lister[4]).css("opacity",  ($(window).scrollTop() -2600 )/ 400) 
    }
    if (scrollTop < 2600){
      $(lister[4]).css("opacity",  0) 
    }

    if (scrollTop > 3400 && scrollTop < 3800 ){
      $(lister[0]).css("opacity",  1- ($(window).scrollTop() -3400 )/ 400) 
      $(lister[1]).css("opacity",  1- ($(window).scrollTop() -3400 )/ 400) 
      $(lister[2]).css("opacity",  1- ($(window).scrollTop() -3400 )/ 400) 
      $(lister[3]).css("opacity",  1- ($(window).scrollTop() -3400 )/ 400) 
      $(lister[4]).css("opacity",  1- ($(window).scrollTop() -3400 )/ 400) 
    }

    if (scrollTop > 3800 && scrollTop < 4400 ){
      $(lister[5]).css("opacity",  ($(window).scrollTop() -3800 )/ 400) 

    }
    
    if (scrollTop > 4400 && scrollTop < 4800 ){
      $(lister[5]).css("opacity",  (1-$(window).scrollTop() -4400 )/ 400) 

    }


    if (scrollTop > 3800){
      $(lister[0]).css("opacity", 0) 
      $(lister[1]).css("opacity", 0) 
      $(lister[2]).css("opacity", 0) 
      $(lister[3]).css("opacity", 0) 
      $(lister[4]).css("opacity", 0) 
    }

    if (scrollTop < 3800){
      $(lister[5]).css("opacity",  0) 
    }

    /* 
    
    SECOND PAGE 
    
    */
    if (scrollTop > 5200 && scrollTop < 5600 ){
      $(lister[6]).css("opacity",  ($(window).scrollTop() -5200 )/ 400) 
    }
    if (scrollTop < 5200){
      $(lister[6]).css("opacity",  0) 
    }

    if (scrollTop > 5800 && scrollTop < 6200 ){
      $(lister[7]).css("opacity",  ($(window).scrollTop() -5800 )/ 400) 
    }
    if (scrollTop < 5800){
      $(lister[7]).css("opacity",  0) 
    }

    if (scrollTop > 6400 && scrollTop < 6800){
      $(lister[8]).css("opacity",  ($(window).scrollTop() -6400)/ 400) 
    }
    if (scrollTop < 6400){
      $(lister[8]).css("opacity",  0) 
    }

    if (scrollTop > 7000 && scrollTop < 7400 ){
      $(lister[6]).css("opacity",  1-($(window).scrollTop() -7000)/ 400) 
      $(lister[7]).css("opacity",  1-($(window).scrollTop() -7000)/ 400) 
      $(lister[8]).css("opacity",  1-($(window).scrollTop() -7000)/ 400) 

    }

    if (scrollTop < 7400){
      $(lister[9]).css("opacity",  0) 
    }

    if (scrollTop > 7400 && scrollTop < 7800 ){
      $(lister[9]).css("opacity",  ($(window).scrollTop() -7400)/ 400) 
    }

    if (scrollTop > 7800 && scrollTop < 8200 ){
      $(lister[9]).css("opacity",  1-($(window).scrollTop() -7800)/ 400) 
    }
    
    
    if (scrollTop > 7400){
      $(lister[6]).css("opacity", 0) 
      $(lister[7]).css("opacity", 0) 
      $(lister[8]).css("opacity", 0) 
    }

    if (scrollTop > 8200){
      $(lister[9]).css("opacity",  0) 
    }
    
    /* 
    
    PAGE THREE
    
    */
   
    if (scrollTop > 23200 && scrollTop < 23400 ){


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
