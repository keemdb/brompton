const log = console.log;

$("body").imagesLoaded(function(){
	$(window).trigger("resize");
})

/* 네비게이션 underline */
$(".nav").click(function(){
	$(".act_link").removeClass("act_link");
	$(this).addClass("act_link");
});

/* 네비게이션 사이드 */
$(".nav_mo_btn").click(function(){
	$(".nav_mo_wrap").stop().animate({"right":0}, 200);
});
$("#nav_mo_close").click(function(){
	$(".nav_mo_wrap").stop().animate({"right":"-70%"}, 200);
});

/* 네비게이션 스크롤 */
$(".go_about").click(function(e) {
	var aboutTop = $(".about").offset();        
	$('body, html').animate({scrollTop: aboutTop.top});
}); ////click
$(".go_folding").click(function(e) {
	var foldingTop = $(".fd_guide").offset();        
	$('body, html').animate({scrollTop: foldingTop.top});
}); ////click
$(".go_custom").click(function(e) {
	var customTop = $(".customize").offset();        
	$('body, html').animate({scrollTop: customTop.top});
}); ////click
$(".go_acc").click(function(e) {
	var accTop = $(".acc").offset();        
	$('body, html').animate({scrollTop: accTop.top});
}); ////click
$(".go_bwck").click(function(e) {
	var bwckTop = $(".bwck").offset();        
	$('body, html').animate({scrollTop: bwckTop.top});
}); ////click


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




/**** Customize hover ****/
$(".close").click(function(){
	$(this).parent().parent().parent().css({"display":"none"});
});
$(".handle_btn").mouseenter(function(){
	$(".handle_info").css({"display":"block"});
});
$(".handle_btn").mouseleave(function(){
	$(".handle_info").css({"display":"none"});
});
$(".frame_btn").mouseenter(function(){
	$(".frame_info").css({"display":"block"});
});
$(".frame_btn").mouseleave(function(){
	$(".frame_info").css({"display":"none"});
});
$(".exf_btn").mouseenter(function(){
	$(".exf_info").css({"display":"block"});
});
$(".exf_btn").mouseleave(function(){
	$(".exf_info").css({"display":"none"});
});
$(".rack_btn").mouseenter(function(){
	$(".rack_info").css({"display":"block"});
});
$(".rack_btn").mouseleave(function(){
	$(".rack_info").css({"display":"none"});
});
$(".gear_btn").mouseenter(function(){
	$(".gear_info").css({"display":"block"});
});
$(".gear_btn").mouseleave(function(){
	$(".gear_info").css({"display":"none"});
});





/**** Top버튼 ****/


$(window, document, "html, body").scroll(scTopAni);

function scTopAni (){
	var body = $(window, document, "html, body").scrollTop();
	var active = 200;
	var $tops = $(".tops");
		if(body > active) {
		$tops.stop().animate({"opacity":1}, 500)
	}
	else{
		$tops.stop().animate({"opacity":0}, 500)
	}
}

$(".tops, .logo").click(function(){
	$("html, body").stop().animate({"scrollTop":0}, 300);
});