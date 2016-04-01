/* Navigation Scripts
=====================*/
jQuery(document).ready(function(){
	"use strict";
	
	function showHideMenu(){

		var $scrollPos = $(window).scrollTop();
		var $slideInPos = $(window).height() - 400;
		var $fadeInPos = $(window).height() - $(window).height() + 200;
		var $navBar = $('.pg-header');

		if ( $navBar.hasClass('slidein') && $navBar.hasClass('fixed') ){
			if ( $scrollPos > $slideInPos && !$navBar.hasClass('visible') ){
				$navBar.addClass('visible');
			}else if( $scrollPos < $slideInPos && $navBar.hasClass('visible') ){
				$navBar.removeClass('visible');
			}
		}else{
			if ( $scrollPos > $fadeInPos && !$navBar.hasClass('visible')  && !$navBar.hasClass('always-visible') ){
				$navBar.addClass('visible');
			}else if( $scrollPos < $fadeInPos && $navBar.hasClass('visible') && !$navBar.hasClass('always-visible') ){
				$navBar.removeClass('visible');
			}
		}

		if ( $navBar.hasClass("stick") ){
			if ( !$navBar.hasClass('visible') ){
				$navBar.addClass('visible');
			}
			if ( $scrollPos > $navBar.parent().offset().top && !$navBar.hasClass('fixed') ){
				$navBar.addClass('fixed');
			}
			else if ( $scrollPos < $navBar.parent().offset().top && $navBar.hasClass('fixed') ){
				$navBar.removeClass('fixed');
			}
		}
	}
	showHideMenu();

	$(window).scroll(function(){
		showHideMenu();
	});

	var $collapseWidth = 1024;

	$('.nav-toggle').on("click", function(e){
		e.preventDefault();
		if ( !$('.main-nav .nav').hasClass('open-nav') ){
			$('.main-nav .nav').slideToggle("slow");
			$('.main-nav .nav').addClass("open-nav");
		}else{
			$('.main-nav .nav').slideToggle("slow");
			$('.main-nav .nav').removeClass("open-nav");
			$('.dropdown').removeClass("open");
		}
	});

	$('.has-dropdown > a').on("click", function(event){

		$(this).parent().children('.dropdown').toggleClass("open");

	});

	$('body').on("click", function(event){

		$('.dropdown').removeClass("open");

	})

});


/* pg-full-bg
==============*/
jQuery(document).ready(function(){
	"use strict";

	//Set Screen Height
	var $pgFullBg = $(".pg-full-bg");
	var $windowHeight = $(window).height();

	$pgFullBg.css("height", $windowHeight);

	//Down Arrow Bounce Function
	function arrowbounce(){

		var $downArrow = $(".pg-full-bg-arrow");
		var $timer = 1000;

		$downArrow.animate({bottom: "20px"}, $timer);
		$downArrow.animate({bottom: "10px"}, $timer);

		setTimeout(function(){
			arrowbounce();
		}, $timer);

	}

	arrowbounce();
	

});

/* pg-full-video
================*/
jQuery(document).ready(function(){
	"use strict";

	//Set Screen Height
	var $pgFullVid = $(".pg-full-video");
	var $windowHeight = $(window).height();

	$pgFullVid.css("height", $windowHeight);

	if ( $.browser.desktop ){

		$(".pg-full-vid-player").mb_YTPlayer();

	}else{
		$pgFullVid.backstretch([
	      "img/stock/sunset.jpg",
	      "img/stock/throughthelight.jpg",
	      "img/stock/snowforest.jpg"
	      ], {
	        fade: 750,
	        duration: 4000
	    });
	}

	//Down Arrow Bounce Function
	function arrowbounce(){

		var $downArrow = $(".pg-full-video-arrow");
		var $timer = 1000;

		$downArrow.animate({bottom: "45px"}, $timer);
		$downArrow.animate({bottom: "35px"}, $timer);

		setTimeout(function(){
			arrowbounce();
		}, $timer);

	}

	arrowbounce();
	

});

/* pg-content-slider
====================*/
jQuery(document).ready(function(){
	"use strict";

	//Set Screen Height
	var $pgFullBg = $(".pg-content-slider");
	var $windowHeight = $(window).height() /*- $(".pg-header").height()*/;

	$pgFullBg.css("height", $windowHeight);

	$('.pg-content-slider-content').owlCarousel({
		navigation : false,
    	singleItem:true,
    	transitionStyle : "fadeUp",
    	autoPlay: true
	});

	//Down Arrow Bounce Function
	function arrowbounce(){

		var $downArrow = $(".pg-content-slider-arrow");
		var $timer = 1000;

		$downArrow.animate({bottom: "20px"}, $timer);
		$downArrow.animate({bottom: "10px"}, $timer);

		setTimeout(function(){
			arrowbounce();
		}, $timer);

	}

	arrowbounce();
	

});

/* pg-img-content-slider
=========================*/
jQuery(document).ready(function(){
	"use strict";

	//Set Screen Height
	var $pgFullBg = $(".pg-img-content-slider");
	var $windowHeight = $(window).height() /*- $(".pg-header").height()*/;

	$pgFullBg.css("height", $windowHeight);

	$('.pg-img-content-slider-content').owlCarousel({
		navigation : false,
    	singleItem:true,
    	transitionStyle : "fadeUp",
    	autoPlay: true
	});

	$('.pg-img-content-slider-img-cont').backstretch([
      "img/stock/glasses.jpg",
      "img/stock/throughthelight.jpg",
      "img/stock/snowforest.jpg"
      ], {
        fade: 750,
        duration: 4000
    });

	//Down Arrow Bounce Function
	function arrowbounce(){

		var $downArrow = $(".pg-img-content-slider-arrow");
		var $timer = 1000;

		$downArrow.animate({bottom: "20px"}, $timer);
		$downArrow.animate({bottom: "10px"}, $timer);

		setTimeout(function(){
			arrowbounce();
		}, $timer);

	}

	arrowbounce();
	

});

/* Scroll Function
==================*/
jQuery(document).ready(function($){
	"use strict";

	$(".main-nav a").on("click", function(){
		var $dest = $(this).attr("href");
		
		if ( $dest == "#" ){return false;}

		$('.dropdown').removeClass("open");

		if ( $dest.charAt(0) === "#" ){
			var $destTop = $("body").find($dest).offset().top - 70;
			$('body, html').animate({ scrollTop: $destTop }, {duration: 2000, specialEasing: {scrollTop: "easeOutQuint"}} );
			return false;
		}

	});

	$("a.scroll").on("click", function(){
		var $dest = $(this).attr("href");
		
		if ( $dest == "#" ){return false;}

		var $destTop = $("body").find($dest).offset().top - 70;
		$('body, html').animate({ scrollTop: $destTop }, {duration: 2000, specialEasing: {scrollTop: "easeOutQuint"}});
		return false;

	});

});

/* Portfolio
==============*/
//Isotope Gallery
jQuery(document).ready(function(){
	"use strict";

	$ = jQuery;

	var $container = $('.portfolio-items');

	function createPortfolio(){
		var $windowWidth = $(window).width();
		if ( $windowWidth <= 628 ){
			var $itemWidth = $container.width();
		}
		else if ( $windowWidth > 628 && $windowWidth <= 768 )
		{
			var $itemWidth = $container.width() / 2;
			$itemWidth -= 0.3;
		}
		else if ( $windowWidth > 768 && $windowWidth <= 992 ){
			var $itemWidth = $container.width() / 2;
			$itemWidth -= 0.3;
		}
		else if ( $windowWidth > 992 && $windowWidth <= 1440 ){
			var $itemWidth = $container.width() / 4;
			$itemWidth -= 0.3;
		}
		else{
			var $itemWidth = $container.width() / 4;
			$itemWidth -= 0.3;
		}
		$('.portfolio-item').css("width", $itemWidth );
		$container.isotope("reLayout");
	}

	$container.isotope({
		itemSelector: '.portfolio-item',
        layoutMode: 'masonry'
	});

	$container.imagesLoaded(function(){
		createPortfolio();
	});

	$(window).bind("resize", function(){
		createPortfolio();
	});

	// filter items when filter link is clicked
	$('#filters a').click(function(){
	  var selector = $(this).attr('data-filter');
	  $container.isotope({ filter: selector });
	  $('#filters a').removeClass('active');
	  $(this).addClass('active');
	  return false;
	});

	$(".portfolio-popup").magnificPopup({
		type: 'ajax',
		gallery: {
			enabled: true,
			arrowMarkup: ''
		},
		closeOnBgClick: false,
		closeOnContentClick:false,
		callbacks: {
			ajaxContentAdded: function (){
				projectSliderInit();
				$('.video').fitVids();

				$(".project-nav a").on("click", function(){
					if ( $(this).data('target') == "next" ){
						$(".project-popup").magnificPopup('next');
					}else if ( $(this).data('target') == "prev" ){
						$(".project-popup").magnificPopup('prev');
					}
				});

				//Set Screen Height
				var $pgFullVid = $(".pg-full-video");
				var $windowHeight = $(window).height();

				$pgFullVid.css("height", $windowHeight);

				$(".pg-full-vid-player").mb_YTPlayer();

				$('#project-full-slider').superslides({
					play: 6000
				});
			}
		}
	});

	//Single Project Slider
	function projectSliderInit(){
		$(".project-slides").owlCarousel({
			navigation : false, // Show next and prev buttons
		    slideSpeed : 300,
		    paginationSpeed : 400,
		    singleItem:true,
		    autoHeight: true,
		    autoPlay: false
		});

		$(".project-slide-nav .prev").on("click", function(){
			$(".project-slides").data('owlCarousel').prev();
		});
		$(".project-slide-nav .next").on("click", function(){
			$(".project-slides").data('owlCarousel').next();
		});
	}

});

/* Blog Post
====================*/
jQuery(document).ready(function($){
	"use strict";

	//Column Split
	$('.posts .post-content').columnize({ columns: 2 });

	//Sliders
	var $postSlider = $('.post-slides');

	$postSlider.owlCarousel({
 		autoPlay: 6000,
 		items:1
	});

	$('.post-slider-nav .nav-left').click(function(e){
		e.preventDefault();
		$(this).parent().parent().children('.post-slides').data('owlCarousel').prev();
	});
	$('.post-slider-nav .nav-right').click(function(e){
		e.preventDefault();
		$(this).parent().parent().children('.post-slides').data('owlCarousel').next();
	});
	
});

/* Team Members
===============*/
jQuery(document).ready(function($){
	"use strict";

	var $teamSlider = $('.team-members');

	$(".team-popup").magnificPopup({
		type: 'ajax',
		gallery: {
			enabled: true,
			arrowMarkup: ''
		},
		closeOnBgClick: false,
		closeOnContentClick:false,
		callbacks: {
			ajaxContentAdded: function (){
				$(".team-member-nav a").on("click", function(){
					if ( $(this).data('target') == "next" ){
						$(".team-popup").magnificPopup('next');
					}else if ( $(this).data('target') == "prev" ){
						$(".team-popup").magnificPopup('prev');
					}
				});
				adjustTeamHeight();
			}
		}
	});

	function adjustTeamHeight(){
		$ = jQuery;
		//$(".team-member-single").css("height", $(window).height() );
	}
	
});

/* Services
===============*/
jQuery(document).ready(function($){
	"use strict";

	var $serviceSlider = $('.service-items');

	$serviceSlider.owlCarousel({
 		autoPlay: 6000,
 		items:4,
	    itemsDesktop : [1199,4],
	    itemsDesktopSmall : [980,3],
	    itemsTablet: [768,2],
	    itemsTabletSmall: false,
	    itemsMobile : [479,1],
 
	});

	var $serviceSliderInstance = $serviceSlider.data('owlCarousel');

	$('.service-nav .nav-left').click(function(e){
		e.preventDefault();
		$serviceSliderInstance.prev();
	});
	$('.service-nav .nav-right').click(function(e){
		e.preventDefault();
		$serviceSliderInstance.next();
	});
	
});

/* Testimonials
===============*/
jQuery(document).ready(function($){
	"use strict";

	var $testimonialSlider = $('.testimonial-container');

	$testimonialSlider.owlCarousel({
 		autoPlay: 6000,
 		items:2,
	    itemsDesktop : [1199,2],
	    itemsDesktopSmall : [980,2],
	    itemsTablet: [768,2],
	    itemsTabletSmall: false,
	    itemsMobile : [479,1],
 
	});

	var $testimonialSliderInstance = $testimonialSlider.data('owlCarousel');

	$('.testimonial-nav .nav-left').click(function(e){
		e.preventDefault();
		$testimonialSliderInstance.prev();
	});
	$('.testimonial-nav .nav-right').click(function(e){
		e.preventDefault();
		$testimonialSliderInstance.next();
	});
	
});

/* Clients
===============*/
jQuery(document).ready(function($){
	"use strict";

	var $clientSlider = $('.client-items');

	$clientSlider.owlCarousel({
 		autoPlay: 6000,
 		items:4,
	    itemsDesktop : [1199,4],
	    itemsDesktopSmall : [980,3],
	    itemsTablet: [768,2],
	    itemsTabletSmall: false,
	    itemsMobile : [479,1],
 
	});
	
});

/* Pricing
===========*/
jQuery(document).ready(function($){
	"use strict";

	$('.pricing-table').hover(
		function(){
			if ( $(window).width() > 768 ){
				$(this).animate({marginTop: -15});
			}
		},
		function(){
			if ( $(window).width() > 768 ){
				$(this).animate({marginTop: 0});
			}
		}
	);

});


/* Contact Form
===============*/
jQuery(document).ready(function($){
	"use strict";

	var $contactForm = $(".contact-wrapper");
	var $contactMap = $(".contact-form-map");

	$contactMap.css("height", $contactForm.outerHeight() );

	initContactAjax();

});

//Initialize
function initContactAjax(){
	$ = jQuery;

	$("#contact-form").submit( submitContactForm );
	return false;
}

function submitContactForm(){

	var $contactForm = $(this);

	if ( $contactForm.valid() ){
		$.ajax({
	        url: "mail.php",
	        type: "POST",
	        data: $contactForm.serialize(),
	        success: contactDone
	    });

	    return false;
	}

}

//After Ajax Request Function
function contactDone( response ){
    $ = jQuery;
    $response = $.trim( response );

    if ( $response == "success" ){

        //Clear All Form Fields
        $('#contact input[name="contact-name"]').val( "" );
        $('#contact input[name="contact-email"]').val( "" );
        $('#contact input[name="contact-subject"]').val( "" );
        $('#contact textarea[name="contact-message"]').val( "" );

        //Show Success Message
        $('#contact .alert-success').show("slow");
        setTimeout(function(){
        	$('#contact .alert-success').hide("slow");
        }, 5000);
    }else{

        //Show Error message
        $('#contact .alert-danger').show("slow");
        setTimeout(function(){
        	$('#contact .alert-danger').hide("slow");
        }, 5000);
    }
}

/* Map
=======*/
jQuery(document).ready(function($){
	"use strict";

	if ( $(".contact-form-map") != undefined && $(".contact-form-map") != "" ){
		$(".contact-form-map").gmap3({
			marker:{
				values:[
					{
						address: "Empire State Building", 
						data:"What an amazing place",
						options:{
				          icon: "http://maps.google.com/mapfiles/marker_grey.png"
				        }
					}
				],
				events:{
			      mouseover: function(marker, event, context){
			        var map = $(this).gmap3("get"),
			          infowindow = $(this).gmap3({get:{name:"infowindow"}});
			        if (infowindow){
			          infowindow.open(map, marker);
			          infowindow.setContent(context.data);
			        } else {
			          $(this).gmap3({
			            infowindow:{
			              anchor:marker, 
			              options:{content: context.data}
			            }
			          });
			        }
			      },
			      mouseout: function(){
			        var infowindow = $(this).gmap3({get:{name:"infowindow"}});
			        if (infowindow){
			          infowindow.close();
			        }
			      }
			    }
			},
			map:{
			    options:{
			     zoom:14,
			     'disableDefaultUI': false,
			     'styles': [{
	                stylers: [{
	                    lightness: 7
	                }, {
	                    saturation: -100
	                }]
	            }],
			     mapTypeId: google.maps.MapTypeId.ROADMAP,
			     mapTypeControl: true,
			     mapTypeControlOptions: {
			       style: google.maps.MapTypeControlStyle.DROPDOWN_MENU
			     },
			     navigationControl: true,
			     scrollwheel: false,
			     streetViewControl: true
			    }
			 }
		});
	}

});

/* Back To Top
==================*/
jQuery(document).ready(function($){
	"use strict";

	function checkBTT(){
		if ( $(window).scrollTop() > 100 ){
            $('.back-to-top').show();
        }
        else
        {
            $('.back-to-top').hide();
        }
	}
	checkBTT();

	$(window).scroll(function(){
		checkBTT();
	});

});

/* General Scripts
==================*/
jQuery(document).ready(function($){
	"use strict";

	$('.video').fitVids();

	$('.counter').counterUp({
	    delay: 60,
	    time: 2000
	});

	$('.animated').animReach({
		distance: 120,
		mobile: false
	});

	$('input, textarea').placeholder();

});