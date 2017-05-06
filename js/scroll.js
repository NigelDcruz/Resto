
$( document ).ready(function() {
 
$('a[href^="#"]').on('click',function(e) {
               e.preventDefault();

               var target = this.hash;
               var $target = $(target); //wraps it in an jqury object so that method and properties
	
       // scroll and dont show hash
               $('html, body').animate({
                   'scrollTop': $target.offset().top
               }, 3000,'swing');
           });

  });

	




$( document ).ready(function() {
 
		

  });


