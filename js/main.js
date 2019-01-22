const log = console.log;

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


//메인배너 / .bans
fadeShow();
function fadeShow() {
	var $wrap = $(".ban");
	var $slide = $(".ban > li");	
	var depth = 10;									//z-index
	var now = 0;										//Animation 대상
	var speed = 500;								//Animation 속도(animation-duration)
	var timeout = 3000;							//Animaton 간격(animation-delay)
	var end = $slide.length - 1;		//마지막 객체의 index값
	var interval;										//Animation 간격에 맞춰 특정된 함수를 실행한다.
	var hei;
	//Pager 초기화
	$slide.each(function(){
		$(this).css({"position":"absolute", "top":0});	//$(".ban > li")의 css 설정
		$(".cycle-pager").append("<span>●</span>");
	});
	$(".cycle-pager span").click(function(){
		now = $(this).index();
		fadeAni();
		clearInterval(interval);
		interval = setInterval(fadeAni, timeout);
	});
	$(".bans").height($slide.eq(0).height());
	$(window).resize(function(){
		$(".bans").height($slide.eq(now).height());
	});
	//최초 실행
	interval = setInterval(fadeAni, timeout);
	function fadeAni() {
		$(window).trigger("resize");
		$(".cycle-pager span").removeClass("cycle-pager-active");
		$(".cycle-pager span").eq(now).addClass("cycle-pager-active");
		var hei = $slide.eq(now).height();
		$(".bans").stop().animate({"height":hei+"px"}, speed);
		$slide.eq(now).css({"z-index":depth++, "opacity":0}).stop().animate({"opacity":1}, speed, function(){
			if(now == end) now = 0;
			else now++;
		});
	}
}