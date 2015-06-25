$(document).ready(function() {
   $('div').mouseenter(function() {
       $('rojo').animate({
           height: '+=10px'
       });
   });
   $('div').mouseleave(function() {
       $(this).animate({
           height: '-=10px'
       }); 
   });
   $('div').click(function() {
       $('rojo').toggle(1000);
   }); 
});