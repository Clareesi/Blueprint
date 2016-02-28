$(window).resize(function(){

	$('.circle').css({
		position:"absolute",
		left: ($(window).width() - $('.circle').outerWidth())/2,
		top: ($(window).height() - $('.circle').outerHeight())/2,
	});

<<<<<<< Updated upstream
	$('.circle2').css({
		position:"absolute",
		left: ($(window).width() - $('.circle').outerWidth())/2,
		top: ($(window).height() - $('.circle').outerHeight())/2,
	});
=======
	console.log($(window).height())
	console.log($('.circle').outerHeight()/2)
	console.log($(window).height() - $('.circle').outerHeight()/2)
>>>>>>> Stashed changes

});

$(window).resize()
<<<<<<< Updated upstream

// var line_angle = function(a, b){
// 	var dy = a.position().top - b.position().top;
// 	var dx = a.position().left - b.position().left;
// 	return Math.arctan(dy/dx);
// }

$(document).ready(function(){
	var circle2 = $(".circle2");
	// $(".line_wrapper").position().top = circle2.position().top;
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

    // $(".line").animate({width:"15%"}, '5s');


    });
});

$(document).ready()
=======
>>>>>>> Stashed changes
