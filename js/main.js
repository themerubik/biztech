(function($) {
	'use strict';
	// Offset start //
	var html_body = $('html, body'),
		nav = $('nav'),
		navOffset = nav.offset().top,
		$window = $(window);
	$('nav a').on('click', function() {
		if(location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
			if(target.length) {
				html_body.animate({
					scrollTop: target.offset().top - 30
				}, 1500);
				return false;
			}
		}
	});
	//navbar fixed js //
	$window.on('scroll', function() {
		var scrollPos = $window.scrollTop();
		if(scrollPos > navOffset) {
			$('nav').addClass('navbar-fixed');
		} else {
			$('nav').removeClass('navbar-fixed');
		}
	});
	//scrollspy menu //
	$('body').scrollspy({
		target: '#navbarSupportedContent',
		offset: 80
	});
	//preloader//
	$(window).load(function() {
		$(".loader").delay(2000).fadeOut("slow");
		$("#overlayer").delay(2000).fadeOut("slow");
	});
	// background image//
	$(document).on('ready', function() {
		background();
	});

	function background() {
		var img = $('.bg_img');
		img.css('background-image', function() {
			var bg = ('url(' + $(this).data('background') + ')');
			return bg;
		});
	}
	// banner Slider//
	$(".homepage-slides").owlCarousel({
		items: 1,
		dots: true,
		nav: true,
		autoplay: true,
		navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></>"],
		loop: true,
		animateOut: 'fadeOut'
	});
	//testiminial_slider	
	var testiminial_slider = $('.testiminial_slider');
	testiminial_slider.owlCarousel({
		items: 1,
		animateIn: 'fadeIn',
		animateOut: 'fadeOut',
		loop: true,
		dots: true,
		autoplay: true,
		nav: false,
	});
	//isotop js //
	var portfolioitems = $(".portfolios");
	var portfoliofilterli = $(".iso-nav li a");
	portfolioitems.isotope({
		itemSelector: '.mix',
		layoutMode: 'fitRows',
	});
	portfoliofilterli.on('click', function() {
		portfoliofilterli.removeClass("active");
		$(this).addClass("active");
		var selector = $(this).attr('data-filter');
		portfolioitems.isotope({
			filter: selector,
			animation0ptions: {
				duration: 750,
				easing: 'linear',
				queue: false,
			}
		});
		return false;
	});
	//testimonial slider//
	$("#testimonial-slider").owlCarousel({
		items: 1,
		itemsDesktop: [1000, 1],
		itemsDesktopSmall: [979, 1],
		itemsTablet: [767, 1],
		pagination: false,
		transitionStyle: "fade",
		navigation: true,
		navigationText: ["", ""],
		autoPlay: true
	});
	//materialScrollTop//
	$('body').materialScrollTop({
		revealElement: 'header',
		revealPosition: 'bottom',
		onScrollEnd: function() {
			console.log('Scrolling End');
		}
	});
})(jQuery);