// $(window).scroll(function() {
// if ($(this).scrollTop() > 1){
//     $('header').addClass("stick");
//   }
//   else{
//     $('header').removeClass("sticky");
//   }
// });




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

$(".big-item").on(enterBigEvent, function(e){
    // code here
});
$(".big-item").on(leaveBigEvent, function(e){
    // code here
});