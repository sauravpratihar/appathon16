/*  
	Kss - Klipie Stylesheet Switcher is Copyright (c) by Klipie245 (B.A Pieterse)
*/
jQuery(document).ready(function($){
	"use strict";

	//Init
	createKss();

	//Read Init Cookies
	var $color = getCookie("kssColor");
	var $layout = "";

	//Set Init Values
	if ( $color != ""){
		setTimeout(function(){
			$("link[href*='css/main']").attr({href: "css/main-"+ $color +".css"});
		}, 500);
	}
	if ( $layout != "" && $layout != "full" ){
		$("body").addClass("boxed");
	}

	//Basic Function
	$(".kss-gears").on("click", function(){
		$("#kss").toggleClass("open");
	});

	//Set Stylesheets
	$('.kss-color').on("click", function(){
		$("link[href*='css/main']").attr({href: "css/main-"+ $(this).data("stylesheet-color") +".css"});
		createCookie( "kssColor", $(this).data("stylesheet-color"), 10 )
	});

	//Set Body Class
	$('.kss-layout').on("click", function(){
		if ( $(this).data("layout-option") == "boxed" ){
			createCookie( "kssLayout", "boxed", 10);
		}else{
			createCookie( "kssLayout", "full", 10);
		}
		location.reload();
	});

	//Reset Options
	$('.kss-reset').on("click", function(){

		$("link[href*='css/main']").attr({href: "css/main.css"});
		createCookie("kssColor", "",10);
		//createCookie("kssLayout", "", 10);

		if ( $("body").hasClass("boxed") ){
			createCookie( "kssLayout", "full", 10);
			location.reload();
		}else{

		}
	});

});

//Function To Create HTML For The StyleSwitcher & Link Stylesheet
function createKss(){
	$ = jQuery;

	//Load Stylesheet
	$('head').append('<link rel="stylesheet" href="styleswitcher/styleswitcher.css" type="text/css" />');

	//Create Style Switcher
	$("body").append("<div id='kss'><div class='kss-gears'><i class='fa fa-cogs'></i></div><div class='kss-heading'><h4>Style Changer</h4></div></div>");
	
	//Create Color Section
	$("#kss").append("<div class='kss-colors'><h6>Choose A Color</h6></div>");
	$(".kss-colors").append("<div class='kss-color blue' data-stylesheet-color='blue'></div>");
	$(".kss-colors").append("<div class='kss-color green' data-stylesheet-color='green'></div>");
	$(".kss-colors").append("<div class='kss-color purple' data-stylesheet-color='purple'></div>");
	$(".kss-colors").append("<div class='kss-color orange' data-stylesheet-color='orange'></div>");
	$(".kss-colors").append("<div class='kss-color turquoise' data-stylesheet-color='turquoise'></div>");
	$(".kss-colors").append("<div class='clearfix'></div>");

	//Create Layout Section
	//$("#kss").append("<div class='kss-layouts'><h6>Choose A Layout</h6></div>");
	//$(".kss-layouts").append("<div class='kss-layout full' data-layout-option='full'>Full Width</div>");
	//$(".kss-layouts").append("<div class='kss-layout boxed' data-layout-option='boxed'>Boxed</div>");
	//$(".kss-layouts").append("<div class='clearfix'></div>");

	//Create Reset Section
	$("#kss").append("<div class='kss-buttons'><div class='kss-reset'>Reset Options</div></div>");
}

//Function To Create A Cookie
function createCookie( name, value, exp ){
	var d = new Date();
	d.setTime(d.getTime() + (exp*24*60*60*1000) );

	var expires = "expires=" + d.toGMTString();
	document.cookie = name + "=" + value + "; " + expires; 
}

//Function To Retrieve A Cookie
function getCookie( name ){
	var cookie = name + "=";
	var cookieValues = document.cookie.split(';');
	for ( var i = 0; i < cookieValues.length; i++ ){
		var cookieValue = cookieValues[i].trim();
		if ( cookieValue.indexOf( cookie ) == 0 ) return cookieValue.substring(cookie.length, cookieValue.length);
	}
	return "";
}




















