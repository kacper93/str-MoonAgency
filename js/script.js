$(document).on("scroll", function () {
	if ($(this).scrollTop() > 100) {
		$("nav .logo").css({
			"display": "none"
		})
	} else if ($(this).scrollTop() < 100) {
		$("nav .logo").css({
			"display": "block"
		})
	}
})


$(".bxslider").bxSlider({
	auto: true,
	pause: 10000,
	controls: false,
	pager: false,
	speed: 1000
});


$(document).on("scroll", function () {
	if ($(document).scrollTop() - 100 > $(".passion").offset().top - $(window).innerHeight()) {
		$(".passion").css({
			left: 0
		})
	} else if ($(document).scrollTop() - 50 < $(".passion").offset().top - $(window).innerHeight()) {
		$(".passion").css({
			left: "-200%"
		})
	}
})

$(document).on("scroll", function () {
	if ($(document).scrollTop() - 100 > $(".experience").offset().top - $(window).innerHeight()) {
		$(".experience").css({
			left: 0
		})
	} else if ($(document).scrollTop() - 50 < $(".experience").offset().top - $(window).innerHeight()) {
		$(".experience").css({
			left: "-200%"
		})
	}
})


$(document).on("scroll", function () {
	if ($(document).scrollTop() - 100 > $(".professional").offset().top - $(window).innerHeight()) {
		$(".professional").css({
			left: 0
		})
	} else if ($(document).scrollTop() - 50 < $(".professional").offset().top - $(window).innerHeight()) {
		$(".professional").css({
			left: "-200%"
		})
	}
})

$(document).on("scroll", function () {
	if ($(document).scrollTop() - 100 > $(".growth").offset().top - $(window).innerHeight()) {
		$(".growth").css({
			left: 0
		})
	} else if ($(document).scrollTop() - 50 < $(".growth").offset().top - $(window).innerHeight()) {
		$(".growth").css({
			left: "-200%"
		})
	}
})



$(document).on("scroll", function () {
	if ($(document).scrollTop() - 100 > $(".promises .one").offset().top - $(window).innerHeight()) {
		$(".promises .one").css({
			transform: "scale(1)"
		})
	}
})


$(document).on("scroll", function () {
	if ($(document).scrollTop() - 100 > $(".promises .two").offset().top - $(window).innerHeight()) {
		$(".promises .two").css({
			transform: "scale(1)"
		})
	}
})


$(".foragency").on("click", function () {
	$("body, html").animate({
		scrollTop: $(".for-us").offset().top
	}, 1000)
})


$(".whatusdif").on("click", function () {
	$("body, html").animate({
		scrollTop: $(".promises").offset().top
	}, 1000)
})

$(".ourcontact").on("click", function () {
	$("body, html").animate({
		scrollTop: $(".contact").offset().top
	}, 1000)
})

$(".burger").on("click", function () {
	$(this).toggleClass("active")
})

$(".burger").on("click", function () {
	$(".menu").toggleClass("menuB")
})
