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

	$('.circle3').css({
		position:"absolute",
		left: '300px',
		top: '175px',
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

    circle2.hover(function(){
        $("#puns").fadeIn();
        $("#puns").css({
        	transform: 'translateY(-100px) translateX(-150px)',
        })
        $("#memes").fadeIn();
        $("#memes").css({
        	transform: 'translateY(100px) translateX(-150px)',
        })
    });
});

$(document).ready()
