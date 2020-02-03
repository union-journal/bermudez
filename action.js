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

    for (let k = 0; k < lister.length; k++) {
    }

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
   
    if (scrollTop > 8600 && scrollTop < 9000 ){
      $(lister[10]).css("opacity",  ($(window).scrollTop() -8600)/ 400) 
    }
    if (scrollTop < 8600){
      $(lister[10]).css("opacity",  0) 
    }

    if (scrollTop > 9200 && scrollTop < 9600 ){
      $(lister[11]).css("opacity",  ($(window).scrollTop() -9200)/ 400) 
    }
    if (scrollTop < 9200){
      $(lister[11]).css("opacity",  0) 
    }

    if (scrollTop > 9800 && scrollTop < 10200 ){
      $(lister[12]).css("opacity",  ($(window).scrollTop() -9800)/ 400) 
    }
    if (scrollTop < 9800){
      $(lister[12]).css("opacity",  0) 
    }

    if (scrollTop > 10400 && scrollTop < 10800 ){
      $(lister[13]).css("opacity",  ($(window).scrollTop() -10400)/ 400) 
    }
    if (scrollTop < 10400){
      $(lister[13]).css("opacity",  0) 
    }
       
    if (scrollTop > 11000 && scrollTop < 11400){
      $(lister[10]).css("opacity",  1-($(window).scrollTop() -11000)/ 400) 
      $(lister[11]).css("opacity",  1-($(window).scrollTop() -11000)/ 400) 
      $(lister[12]).css("opacity",  1-($(window).scrollTop() -11000)/ 400) 
      $(lister[13]).css("opacity",  1-($(window).scrollTop() -11000)/ 400) 
    }

    if (scrollTop > 11400){
      $(lister[10]).css("opacity", 0) 
      $(lister[11]).css("opacity", 0) 
      $(lister[12]).css("opacity", 0) 
      $(lister[13]).css("opacity", 0) 
    }

    if (scrollTop < 11400){
      $(lister[14]).css("opacity", 0) 
    }

    if (scrollTop > 11400 && scrollTop < 11800 ){
      $(lister[14]).css("opacity",  ($(window).scrollTop() -11400)/ 400) 
    }
    
    if (scrollTop > 11800 && scrollTop < 12200 ){
      $(lister[14]).css("opacity", 1 - ($(window).scrollTop() -11800)/ 400) 
    }

    if (scrollTop > 12200){
      $(lister[14]).css("opacity", 0) 
    }


    /*
    
    PAGE FOUR 
    
    */
    if (scrollTop > 12400 && scrollTop < 12800 ){
      $(lister[15]).css("opacity",  ($(window).scrollTop() -12400)/ 400) 
    }
    if (scrollTop < 12400){
      $(lister[15]).css("opacity",  0) 
    }

    if (scrollTop > 13000 && scrollTop < 13400 ){
      $(lister[16]).css("opacity",  ($(window).scrollTop() -13000)/ 400) 
    }
    if (scrollTop < 13000){
      $(lister[16]).css("opacity",  0) 
    }

    if (scrollTop > 13600 && scrollTop < 14000 ){
      $(lister[17]).css("opacity",  ($(window).scrollTop() -13600)/ 400) 
    }
    if (scrollTop < 13600){
      $(lister[17]).css("opacity",  0) 
    }

    if (scrollTop > 14200 && scrollTop < 14600 ){
      $(lister[18]).css("opacity",  ($(window).scrollTop() -14200)/ 400) 
    }
    if (scrollTop < 14200){
      $(lister[18]).css("opacity",  0) 
    }

    if (scrollTop > 14800 && scrollTop < 15200){
      $(lister[15]).css("opacity",  1-($(window).scrollTop() -14800)/ 400) 
      $(lister[16]).css("opacity",  1-($(window).scrollTop() -14800)/ 400) 
      $(lister[17]).css("opacity",  1-($(window).scrollTop() -14800)/ 400) 
      $(lister[18]).css("opacity",  1-($(window).scrollTop() -14800)/ 400) 
    }

    if (scrollTop > 15200){
      $(lister[15]).css("opacity", 0) 
      $(lister[16]).css("opacity", 0) 
      $(lister[17]).css("opacity", 0) 
      $(lister[18]).css("opacity", 0) 

    }

  });
});
