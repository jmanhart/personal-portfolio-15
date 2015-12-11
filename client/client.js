// sImageBox.open('images/rtj.jpg', {
//     originalHeight: false, // image will be responsive you can enable original height
//     originalWidth: false, // image will be responsive you can enable original width
//     animation: '' //image entry animation (scale, fadeIn, zoomIn, slideInDown)
// });


// Template.design.events({
//     'click .js-open-popup': function (e) {
//         var imgPath = $(e.currentTarget).data('image');
//         if (imgPath) {
//             sImageBox.open(imgPath, {
//                 animation: 'zoomIn'
//             });
//         }
//     }
// });


$(window).scroll(function() {
if ($(this).scrollTop() > 1){
    $('header').addClass("stick");
  }
  else{
    $('header').removeClass("sticky");
  }
});
