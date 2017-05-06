
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




$( document ).ready(function() {
 
		
	$(window).scroll(function() {
		
		if ($(document).scrollTop() > 50){
			$('.head-nav .navbar-default').css({"min-height": "50px"});
			$('.navbar-brand>img').css({"top":"10px"});
			$('.navbar-nav').css({"top":"10px"});
		}
		
		else{
			
			$('.head-nav .navbar-default').css({"min-height": "100px"});
			$('.navbar-brand>img').css({"top":"45px"});
			$('.navbar-nav').css({"top":"40px"});
			
		}
		
		
	});
	

  });




$( document ).ready(function() {
 
		

	

  });