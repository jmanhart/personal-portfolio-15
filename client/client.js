$(window).scroll(function() {
if ($(this).scrollTop() > 1){
    $('header').addClass("stick");
  }
  else{
    $('header').removeClass("sticky");
  }
});




