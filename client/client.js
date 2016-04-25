<<<<<<< HEAD
$(window).scroll(function() {
if ($(this).scrollTop() > 1){
    $('header').addClass("stick");
  }
  else{
    $('header').removeClass("sticky");
  }
});
=======
// $(window).scroll(function() {
// if ($(this).scrollTop() > 1){
//     $('header').addClass("stick");
//   }
//   else{
//     $('header').removeClass("sticky");
//   }
// });


>>>>>>> df31d5f52985b6de86418c4270c47d2d54c36518


// we use touchstart and touchend events on buttons
var enterEvent = "touchstart";
var leaveEvent = "touchend";
// we use mousedown and mouseup events on big items
var enterBigEvent = "mousedown";
var leaveBigEvent = "mouseup";
if(!("ontouchstart" in window)){
    // if no touch we use mouseenter and mouseleave events on buttons and big items
    enterEvent = enterBigEvent = "mouseenter";
    leaveEvent = leaveBigEvent = "mouseleave";
}

$(".button").on(enterEvent, function(e){
    // code here
});
$(".button").on(leaveEvent, function(e){
    // code here
});

<<<<<<< HEAD


=======
$(".big-item").on(enterBigEvent, function(e){
    // code here
});
$(".big-item").on(leaveBigEvent, function(e){
    // code here
});
>>>>>>> df31d5f52985b6de86418c4270c47d2d54c36518
