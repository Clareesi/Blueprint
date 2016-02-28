$(window).resize(function(){

	$('.circle').css({
		position:"absolute",
		left: ($(window).width() - $('.circle').outerWidth())/2,
		top: ($(window).height() - $('.circle').outerHeight())/2,
	});

	$('#circle2').css({
		position:"absolute",
		left: ($(window).width() - $('.circle').outerWidth())/2,
		top: ($(window).height() - $('.circle').outerHeight())/2,
	});

});

$(window).resize()

$(document).ready(function(){
	var circle2 = $("#circle2");
    $(".circle").hover(function(){
        circle2.fadeIn();
        circle2.css({
        	transform: 'translateY(-75px) translateX(-200px)',
        })

    });
});

$(document).ready()
