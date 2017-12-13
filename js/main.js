(function(){
      "use strict";
      $('.counter').counterUp({
          delay: 10,
          time: 4000
      });
    	$('.winner_area').parallax("50%", 0.3);
      $('.client_area').parallax("50%", 0.3);
    	$('.welcome-image-area').parallax("50%", 0.3);
      $('.portfolio_items').mixItUp();
      $( window ).on( "load", function(){
          jQuery("#P1").YTPlayer();
      });

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
        $("a").on('click', function(event) {

        if (this.hash !== "") {
          event.preventDefault();

          var hash = this.hash;
          $('html, body').animate({
            scrollTop: $(hash).offset().top
          }, 1200, function(){
            window.location.hash = hash;
          });
        }
        });

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


        Typed.new(".joyonto", {
            strings: ["Bienvenue sur","Web Génération"],
            typeSpeed: 60,
            loop:true,
            backDelay: 1000
        });

        jQuery(window).load(function() {
            $('.preloader').fadeOut(500);
        });

})(jQuery);

function blocDyn(bloc){
    $('#blocDyn').attr('style','display: block');
	$('#team').addClass('bg_color1');
	$('#contact').removeClass('bg_color1');
	var html = $("#"+bloc).html();
	$("#blocDyn").html(html);
}

$("#creation").on("click", function(){
    blocDyn("blocCreation");
});

$("#refonte").on("click", function(){
    blocDyn("blocRefonte");
});

$("#consult").on("click", function(){
    blocDyn("blocConsult");
});

function makeDevis(type){
	var html = $("#blocDevis").html();
	$("#blocDyn").html(html);
	$("#hiddenType").val(type);
}

function sendMail(typeMail)
{
	if(typeMail != ''){
		var type = typeMail;
		var nom = $("#nameContact").val();
		var mail = $("#emailContact").val();
		var msg = $("#contact_message").val();
	}
	else{
		var type = $("#hiddenType").val();
		var nom = $("#name").val();
		var mail = $("#mail").val();
		var msg = $("#devis_message").val();
	}
	if(nom == "" || mail == "" || msg == ""){
		return;
	}
	
	var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	if(!re.test(mail)){
		return;
	}
	
  var MailMsg = "Type de contact : "+type+" | ";
  MailMsg += "Nom : "+nom+" | ";
  MailMsg += "Adresse mail : "+mail+" | ";
  MailMsg += "Message : "+msg;

		$.ajax({
		type: "POST",
		url: 'devis.php',
		dataType: 'json',
		data: {mail: mail, msg: MailMsg, type: type},
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

