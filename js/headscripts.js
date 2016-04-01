/* Run Head Scripts
====================*/
jQuery(document).ready(function($){
	"use strict";

			
});

/* PreLoader
===============*/

jQuery(window).load(function() {
	"use strict";

    function hidePreloader(){
		$(".preLoader").fadeOut();
	};

	if ( $('#home').hasClass('pg-full-video') && $.browser.desktop ){
		$('#pg-full-vid').on("YTPStart",function(){
		   hidePreloader();
		});
	}else{
		setTimeout(function(){
			hidePreloader();
		}, 1500);
	}

});