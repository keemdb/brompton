
$(window).scroll(function () { 
	var scTop = $(window).scrollTop();
	if( 0 < scTop) {
		$("header").stop().animate({
			"max-width":"100%",
			"top":0,
		}, 200)
	}
	if( 0 == scTop) {
		$("header").stop().animate({
			"max-width":"1600px",
			"top":"1em"
		}, 200)
	}
});