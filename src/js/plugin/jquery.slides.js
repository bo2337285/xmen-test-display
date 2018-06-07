$(function () {
	var sWidth = $("#slider_name").width();
	var len = $("#slider_name .silder_panel").length;
	var index = 0;
	$(window).resize(function () {
		$(".silder_panel").css("width", $(document.body).width());
	});
	$(".silder_panel").css("width", $(document.body).width());

	var btn = "<a class='prev'></a><a class='next'></a>";
	$("#slider_name").append(btn);

	$("#slider_name .silder_nav li").css({ "opacity": "0.6", "filter": "alpha(opacity=60)" }).on("click", function () {
		index = $("#slider_name .silder_nav li").index(this);
		showPics(index);
	}).eq(0).trigger("click");

	$("#slider_name .prev,#slider_name .next").css({ "opacity": "0.2", "filter": "alpha(opacity=20)" }).hover(function () {
		$(this).stop(true, false).animate({ "opacity": "0.6", "filter": "alpha(opacity=60)" }, 300);
	}, function () {
		$(this).stop(true, false).animate({ "opacity": "0.2", "filter": "alpha(opacity=20)" }, 300);
	});

	// Prev
	$("#slider_name .prev").on("click", function () {
		index -= 1;
		if (index == -1) {
			index = len - 1;
		}
		showPics(index);
	});

	// Next
	$("#slider_name .next").on("click", function () {
		index += 1;
		if (index == len) {
			index = 0;
		}
		showPics(index);
	});

	$("#slider_name .silder_con").css("width", sWidth * len);

	// showPics
	function showPics(index) {
		var nowLeft = -index * sWidth;
		$("#slider_name .silder_con").stop(true, false).animate({ "left": nowLeft }, 300);
		$("#slider_name .silder_nav li").removeClass("current").eq(index).addClass("current");
		$("#slider_name .silder_nav li").stop(true, false).animate({ "opacity": "0.5" }, 300).eq(index).stop(true, false).animate({ "opacity": "1" }, 300);

		$("#lottery > .item").eq(index).fadeIn().siblings().fadeOut();
	}
});