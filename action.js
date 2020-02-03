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
    ///OBJECT 1///
    if (scrollTop > 200 && scrollTop < 1200 ){
      $(lister[0]).css("opacity",  ($(window).scrollTop() -200 )/ 1000) 
    }
    if (scrollTop < 200){
      $(lister[0]).css("opacity",  0) 
    }
    if (scrollTop > 1000 && scrollTop < 3400){
      $(lister[0]).css("opacity",  1) 
    }

    ///OBJECT 2///
    if (scrollTop > 1200 && scrollTop < 2200 ){
      $(lister[1]).css("opacity",  ($(window).scrollTop() -1200 )/ 1000) 
    }
    if (scrollTop < 1200){
      $(lister[1]).css("opacity",  0) 
    }
    if (scrollTop > 2200 && scrollTop < 3400){
      $(lister[1]).css("opacity",  1) 
    }


    ///OBJECT 3///
    if (scrollTop > 2200 && scrollTop < 3200 ){
      $(lister[2]).css("opacity",  ($(window).scrollTop() -2200 )/ 1000) 
    }
    if (scrollTop < 2200){
      $(lister[2]).css("opacity",  0) 
    }
    if (scrollTop > 3200 && scrollTop <10400){
      $(lister[2]).css("opacity",  1) 
    }

    ///OBJECT 4///

    if (scrollTop > 3200 && scrollTop < 4200 ){
      $(lister[3]).css("opacity",  ($(window).scrollTop() -3200 )/ 1000) 
    }
    if (scrollTop < 3200){
      $(lister[3]).css("opacity",  0) 
    }
    if (scrollTop > 4200 && scrollTop < 15400){
      $(lister[3]).css("opacity",  1) 
    }

    ///OBJECT 5///

    if (scrollTop > 4200 && scrollTop < 5200 ){
      $(lister[4]).css("opacity",  ($(window).scrollTop() -4200 )/ 1000) 
    }
    if (scrollTop < 4200){
      $(lister[4]).css("opacity",  0) 
    }
    if (scrollTop > 5200 && scrollTop < 16400){
      $(lister[4]).css("opacity",  1) 
    }

    ///Transition///

    if (scrollTop > 6200 && scrollTop < 7200 ){
      $(lister[0]).css("opacity",  1- ($(window).scrollTop() -6200 )/ 1000) 
      $(lister[1]).css("opacity",  1- ($(window).scrollTop() -6200 )/ 1000) 
      $(lister[2]).css("opacity",  1- ($(window).scrollTop() -6200 )/ 1000) 
      $(lister[3]).css("opacity",  1- ($(window).scrollTop() -6200 )/ 1000) 
      $(lister[4]).css("opacity",  1- ($(window).scrollTop() -6200 )/ 1000) 
    }

    if (scrollTop > 7200){
      $(lister[0]).css("opacity", 0) 
      $(lister[1]).css("opacity", 0) 
      $(lister[2]).css("opacity", 0) 
      $(lister[3]).css("opacity", 0) 
      $(lister[4]).css("opacity", 0) 
    }

    ///OBJECT 6///

    if (scrollTop > 6700 && scrollTop < 7700 ){
      $(lister[5]).css("opacity",  ($(window).scrollTop() -6700 )/ 1000) 

    }
    
    if (scrollTop > 8700 && scrollTop < 9700 ){
      $(lister[5]).css("opacity",  (1-$(window).scrollTop() -8700 )/ 1000) 

    }

    if (scrollTop < 6700){
      $(lister[5]).css("opacity",  0) 
    }

    if (scrollTop > 9700){
      $(lister[5]).css("opacity",  0) 
    }

    /* 
    
    SECOND PAGE 
    
    */

    ///OBJECT 7///

    if (scrollTop > 10000 && scrollTop < 11000 ){
      $(lister[6]).css("opacity",  ($(window).scrollTop() -10000 )/ 1000) 
    }
    if (scrollTop < 10000){
      $(lister[6]).css("opacity",  0) 
    }
    if (scrollTop > 11000 && scrollTop < 13500){
      $(lister[6]).css("opacity",  1) 
    }

    ///OBJECT 8///

    if (scrollTop > 11000 && scrollTop < 12000 ){
      $(lister[7]).css("opacity",  ($(window).scrollTop() -11000 )/ 1000) 
    }
    if (scrollTop < 11000){
      $(lister[7]).css("opacity",  0) 
    }
    if (scrollTop > 12000 && scrollTop < 13500){
      $(lister[7]).css("opacity",  1) 
    }

    ///OBJECT 9///

    if (scrollTop > 12000 && scrollTop < 13000){
      $(lister[8]).css("opacity",  ($(window).scrollTop() -13000)/ 1000) 
    }
    if (scrollTop < 12000){
      $(lister[8]).css("opacity",  0) 
    }
    if (scrollTop > 13000 && scrollTop < 13500){
      $(lister[8]).css("opacity",  1) 
    }

    ///Transition ///

    if (scrollTop > 13500 && scrollTop < 14500 ){
      $(lister[6]).css("opacity",  1-($(window).scrollTop() -13500)/ 1000) 
      $(lister[7]).css("opacity",  1-($(window).scrollTop() -13500)/ 1000) 
      $(lister[8]).css("opacity",  1-($(window).scrollTop() -13500)/ 1000) 

    }

    if (scrollTop > 14500){
      $(lister[6]).css("opacity", 0) 
      $(lister[7]).css("opacity", 0) 
      $(lister[8]).css("opacity", 0) 
    }

    /// Object 10 ///

    if (scrollTop < 14500){
      $(lister[9]).css("opacity",  0) 
    }

    if (scrollTop > 14500 && scrollTop < 15500 ){
      $(lister[9]).css("opacity",  ($(window).scrollTop() -14500)/1000) 
    }

    if (scrollTop > 16500 && scrollTop < 17500 ){
      $(lister[9]).css("opacity",  1-($(window).scrollTop() -15500)/ 1000) 
    }
    
    if (scrollTop > 17500){
      $(lister[9]).css("opacity",  0) 
    }
    
    /* 
    
    PAGE THREE
    
    */
   
    /// Object 11 ///

    if (scrollTop > 18000 && scrollTop < 19000 ){
      $(lister[10]).css("opacity",  ($(window).scrollTop() -18000)/ 1000) 
    }
    if (scrollTop < 18000){
      $(lister[10]).css("opacity",  0) 
    }
    if (scrollTop > 19000 && scrollTop < 23000){
      $(lister[10]).css("opacity",  1) 
    }

    /// Object 12 ///

    if (scrollTop > 19000 && scrollTop < 20000 ){
      $(lister[11]).css("opacity",  ($(window).scrollTop() -19000)/ 1000) 
    }
    if (scrollTop < 19000){
      $(lister[11]).css("opacity",  0) 
    }
    if (scrollTop > 20000 && scrollTop < 23000){
      $(lister[11]).css("opacity",  1) 
    }
    
    /// Object 13 ///

    if (scrollTop > 20000 && scrollTop < 21000 ){
      $(lister[12]).css("opacity",  ($(window).scrollTop() -20000)/ 1000) 
    }
    if (scrollTop < 20000){
      $(lister[12]).css("opacity",  0) 
    }
    if (scrollTop > 21000 && scrollTop < 23000){
      $(lister[12]).css("opacity",  1) 
    }

    /// Object 14 ///

    if (scrollTop > 21000 && scrollTop < 22000 ){
      $(lister[13]).css("opacity",  ($(window).scrollTop() -10400)/ 1000) 
    }
    if (scrollTop < 21000){
      $(lister[13]).css("opacity",  0) 
    }
    if (scrollTop > 22000 && scrollTop < 23000){
      $(lister[13]).css("opacity",  1) 
    }

    /// Transition ///

    if (scrollTop > 23000 && scrollTop < 24000){
      $(lister[10]).css("opacity",  1-($(window).scrollTop() -11000)/ 1000) 
      $(lister[11]).css("opacity",  1-($(window).scrollTop() -11000)/ 1000) 
      $(lister[12]).css("opacity",  1-($(window).scrollTop() -11000)/ 1000 )
      $(lister[13]).css("opacity",  1-($(window).scrollTop() -11000)/ 1000) 
    }

    if (scrollTop > 24000){
      $(lister[10]).css("opacity", 0) 
      $(lister[11]).css("opacity", 0) 
      $(lister[12]).css("opacity", 0) 
      $(lister[13]).css("opacity", 0) 
    }

    /// Object 15 ///

    if (scrollTop < 23500){
      $(lister[14]).css("opacity", 0) 
    }

    if (scrollTop > 23500 && scrollTop < 24500 ){
      $(lister[14]).css("opacity",  ($(window).scrollTop() -23500)/ 1000) 
    }
    
    if (scrollTop > 25500 && scrollTop < 26500 ){
      $(lister[14]).css("opacity", 1 - ($(window).scrollTop() -25500)/ 1000) 
    }

    if (scrollTop > 26500){
      $(lister[14]).css("opacity", 0) 
    }


    /*
    
    PAGE FOUR 
    
    */

    /// Object 16 ///

    if (scrollTop > 27000 && scrollTop < 28000 ){
      $(lister[15]).css("opacity",  ($(window).scrollTop() -27000)/ 1000) 
    }
    if (scrollTop < 27000){
      $(lister[15]).css("opacity",  0) 
    }
    if (scrollTop > 28000 && scrollTop < 33000){
      $(lister[15]).css("opacity",  1) 
    }

    /// Object 17 ///


    if (scrollTop > 28000 && scrollTop < 29000 ){
      $(lister[16]).css("opacity",  ($(window).scrollTop() -28000)/ 1000) 
    }
    if (scrollTop < 29000){
      $(lister[16]).css("opacity",  0) 
    }
    if (scrollTop > 29000 && scrollTop < 33000){
      $(lister[16]).css("opacity",  1) 
    }

    /// Object 18 ///

    if (scrollTop > 29000 && scrollTop < 30000 ){
      $(lister[17]).css("opacity",  ($(window).scrollTop() -29000)/ 1000) 
    }
    if (scrollTop < 29000){
      $(lister[17]).css("opacity",  0) 
    }
    if (scrollTop > 30000 && scrollTop < 33000){
      $(lister[17]).css("opacity",  1) 
    }

    /// Object 19 ///

    if (scrollTop > 30000 && scrollTop < 31000 ){
      $(lister[18]).css("opacity",  ($(window).scrollTop() -30000)/ 1000) 
    }
    if (scrollTop < 30000){
      $(lister[18]).css("opacity",  0) 
    }
    if (scrollTop > 31000 && scrollTop < 33000){
      $(lister[18]).css("opacity",  1) 
    }

    /// Transition ///

    if (scrollTop > 31500 && scrollTop < 32500){
      $(lister[15]).css("opacity",  1-($(window).scrollTop() -31500)/ 1000) 
      $(lister[16]).css("opacity",  1-($(window).scrollTop() -31500)/ 1000) 
      $(lister[17]).css("opacity",  1-($(window).scrollTop() -31500)/ 1000) 
      $(lister[18]).css("opacity",  1-($(window).scrollTop() -31500)/ 1000) 
    }

    if (scrollTop > 32500){
      $(lister[15]).css("opacity", 0) 
      $(lister[16]).css("opacity", 0) 
      $(lister[17]).css("opacity", 0) 
      $(lister[18]).css("opacity", 0) 

    }

  });
});
