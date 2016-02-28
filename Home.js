$(window).resize(function(){

	$('.circle').css({
		position:"absolute",
		left: ($(window).width() - $('.circle').outerWidth())/2,
		top: ($(window).height() - $('.circle').outerHeight())/2,
	});

	console.log($(window).height())
	console.log($('.circle').outerHeight()/2)
	console.log($(window).height() - $('.circle').outerHeight()/2)

});

$(window).resize()