$(function(){
         //Keep track of last scroll
         var lastScroll = 0;
         $(window).scroll(function(event){
             //Sets the current scroll position
             var st = $(this).scrollTop();

             //Determines up-or-down scrolling
             if (st > lastScroll){
               $(".footer").css("display",'inline')
             }
             if(st == -1){
               $(".footer").css("display",'none')
             }
             //Updates scroll position
             lastScroll = st;
         });
       });
