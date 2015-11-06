// Template.logo.Rendered ({
// 	$(window).scroll(function() {
// 		$('#pullUp').each(function(){
// 		var imagePos = $(this).offset().top;
//
// 		var topOfWindow = $(window).scrollTop();
// 			if (imagePos < topOfWindow+800) {
// 				$(this).addClass("pullUp");
// 			}
// 		});
// 	});
// })

$(window).scroll(function() {
if ($(this).scrollTop() > 1){
    $('header').addClass("stick");
  }
  else{
    $('header').removeClass("sticky");
  }
});
