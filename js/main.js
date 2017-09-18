/*
* ----------------------------------------------------------------------------------------
    Author       : miniboss
    Template Name: Hamra - Personal Portfolio Template
    Tags: One Page, Creative Template, Portfolio, Personal
    Version      : 1.0
* ----------------------------------------------------------------------------------------
*/
    (function(){
        "use strict";
    // activate counter up
        $('.counter').counterUp({
            delay: 10,
            time: 4000
        });
    // activate parallax
    	$('.winner_area').parallax("50%", 0.3);
        $('.client_area').parallax("50%", 0.3);
    	$('.welcome-image-area').parallax("50%", 0.3);
        
        // activate mixItUp
        $('.portfolio_items').mixItUp();
	/*
        YTPlayer active
    */ 
        $( window ).on( "load", function(){
            jQuery("#P1").YTPlayer();
        });
    


    /*
    * -----------------------------------------------------------
    *  Owl-carousel active
    * -----------------------------------------------------------
    */
    	$('.clients_says').owlCarousel({
            loop:true,
            autplay:false,
            autoplayTimeout:3000,
            smartSpeed:1000,
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:1
                },
                1000:{
                    items:1
                }
            }
        });
    /*------------smooth scroll---------------*/
  // Add smooth scrolling to all links
        $("a").on('click', function(event) {

        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
          // Prevent default anchor click behavior
          event.preventDefault();

        // Store hash
          var hash = this.hash;

        // Using jQuery's animate() method to add smooth page scroll
        // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
          $('html, body').animate({
            scrollTop: $(hash).offset().top
          }, 1200, function(){
       
        // Add hash (#) to URL when done scrolling (default click behavior)
            window.location.hash = hash;
          });
        } // End if
        });

    /*-------------add sticky class----------------*/
        $(window).on('scroll',function(){
            if($(this).scrollTop() > 50)
            {              
              $('.navigation_area').addClass('sticky');
            }
            else
            {
              $('.navigation_area').removeClass('sticky');
            }

        });

    /*
    * -------------------------------------------------------
    *  scroll to top 
    * -------------------------------------------------------
    */
        $('.scrolltotop').fadeOut(1000);
            $(window).on('scroll', function(){

            if($(this).scrollTop()>500){

                $('.scrolltotop').fadeIn(1000);
            }
            else
            {
                $('.scrolltotop').fadeOut(1000);
            }
         });
        $('.scrolltotop').on('click', function(){
        $('html,body').animate({scrollTop: 0}, 1000);
    });
        

    /*
    * -------------------------------------------------------
    *  responsive menu
    * -------------------------------------------------------
    */
        function mobileMenu(){
            var windwidth = $(window).width();
                if(windwidth < 768){
                $('.main_menu').hide();
                $('.mobile_menu').on('click',function(){
                    $('.main_menu').slideToggle("slow");
                });
                $('.main_menu .nav > li > a').on('click',function(){
                    $('.main_menu').hide();
                });
            }
        }
            mobileMenu();
                $(window).on('resize',function() {
                mobileMenu();
                $('.main_menu').hide();
            });

    /*-------------- typed custom----------*/
        Typed.new(".joyonto", {
            strings: ["Bienvenue sur","Web Generation"],
            typeSpeed: 60,
            loop:true,
            backDelay: 1000
        });
    /*-------------Preloader active-------------*/
        jQuery(window).load(function() {
            $('.preloader').fadeOut(1000);
        });

})(jQuery);

function creation(){
	$('#blocDyn').attr('style','display: block');
	$('#team').addClass('bg_color1');
	$('#contact').removeClass('bg_color1');
	var html = $("#blocCreation").html();
	$("#blocDyn").html(html);
}

function refonte(){
	$('#blocDyn').attr('style','display: block');
	$('#team').addClass('bg_color1');
	$('#contact').removeClass('bg_color1');
	var html = $("#blocRefonte").html();
	$("#blocDyn").html(html);
}

function consult(){
	$('#blocDyn').attr('style','display: block');
	$('#team').addClass('bg_color1');
	$('#contact').removeClass('bg_color1');
	var html = $("#blocConsult").html();
	$("#blocDyn").html(html);
}

$("#creation").on("click", function(){
	creation();
});
	
$("#refonte").on("click", function(){
	refonte();
});

$("#consult").on("click", function(){
	consult();
});

function makeDevis(type){
	var html = $("#blocDevis").html();
	$("#blocDyn").html(html);
	$("#hiddenType").val(type);
}

function sendMail()
{
	var type = $("#hiddenType").val();
	var nom = $("#name").val();
	var mail = $("#mail").val();
	var msg = $("#contact_message").val();
	var MailMsg = type + " / "+ nom + " / "+mail+" / "+msg;
		$.ajax({
		type: "POST",
		url: 'devis.php',
		dataType: 'json',
		data: {mail: mail, msg: msg},
		success: function (obj, textstatus) {
			retourMail(type);
		}
	});

}

function retourMail(type){
	switch(type){
		case "s":
			creation();
			break;
		case "p":
			creation();
			break;
		case "r":
			refonte();
			break;
		case "c":
			consult();
			break;
	}
}