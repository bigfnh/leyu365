// JavaScript Document
$(function(){
	$(".menu_slide").click(function(event){
			if($(".con").is(":hidden")){
				$(".con").slideDown();
			}
			event.stopPropagation();
	});
	$(".con").click(function(){
			event.stopPropagation();
	});
	$("body").click(function(){
			
			if(!$(".con").is(":hidden")){
				$(".con").slideUp();
			}
			
	})	
});