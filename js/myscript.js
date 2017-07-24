// JavaScript Document
$(document).ready(function(){
	var nav = $(".nav-list");
	$(".menu-btn").click(function(){
		nav.slideToggle();
	});
	
	$(window).resize(function(){
		if($(window).width() >= 640){
			nav.show();
		}else{
			nav.hide();
		}
	});
});