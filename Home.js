$(window).resize(function(){

	$('.circle').css({
		position:"absolute",
		left: ($(window).width() - $('.circle').outerWidth())/2,
		top: ($(window).height() - $('.circle').outerHeight())/2,
	});

	$('.circle2').css({
		position:"absolute",
		left: ($(window).width() - $('.circle').outerWidth())/2,
		top: ($(window).height() - $('.circle').outerHeight())/2,
	});

});

$(window).resize()

$(document).ready(function(){
	var circle2 = $(".circle2");
    $(".circle").hover(function(){
        $("#archive").fadeIn();
        $("#archive").css({
        	transform: 'translateY(-75px) translateX(-200px)',
        })
        $("#random").fadeIn();
        $("#random").css({
        	transform: 'translateY(275px) translateX(50px)',
        })
        $("#about").fadeIn();
        $("#about").css({
        	transform: 'translateY(-200px) translateX(200px)',
        })
    });
});

$(document).ready()
