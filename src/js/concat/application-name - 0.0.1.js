/*!application-name - 0.0.1-2017-03-16 */$("#down-arrow,#check-case").click(function(){
					$("html,body").animate({
						scrollTop: $("#case").offset().top-160
					}, 1000);
				});
				$("#case-menu").click(function(){
					$(".nav li").removeClass("active");
					$(this).addClass("active");
					$("html,body").animate({
						scrollTop: $("#case").offset().top-160
					}, 1000);
				});
				$("#about-menu").click(function(){
					$(".nav li").removeClass("active");
					$(this).addClass("active");
					$("html,body").animate({
						scrollTop: $("#about").offset().top-230
					}, 1000);
				});
				$("#service-menu").click(function(){
					$(".nav li").removeClass("active");
					$(this).addClass("active");
					$("html,body").animate({
						scrollTop: $("#service").offset().top-160
					}, 1000);
				});
				$("#contact-menu").click(function(){
					$(".nav li").removeClass("active");
					$(this).addClass("active");
					$("html,body").animate({
						scrollTop: $("#contact").offset().top-160
					}, 1000);
				});
				
				$(".img-box").hover(function(){
					$(this).find(".hover-content").fadeIn();
				},function(){
					$(this).find(".hover-content").fadeOut();
				});
				
			$(".icon-caidan").click(function(){
				$(".nav").slideToggle();
			});
function checkPosition() {
		var ws = $(window).scrollTop();
		var wh = $(window).height();
		if(ws > wh) {
			$("#backTop").fadeIn();
		} else {
			$("#backTop").fadeOut();

		}
	};
	checkPosition(); //页面载入的时候就先执行这个方法
	$(window).on("scroll", checkPosition);
	$("#backTop").on("click", function() {
			var $this = $("html,body");
			if(!$this.is(':animated')) {
				$this.animate({
					scrollTop: 0
				}, 1000)
			}
		});