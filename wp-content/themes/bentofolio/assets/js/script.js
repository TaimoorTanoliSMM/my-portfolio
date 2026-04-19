(function ($) {
	"use strict";

	// Theme color control js
	const isDarkMode = localStorage.getItem('darkMode') === 'true';
	$('body').toggleClass('dark-theme', isDarkMode);

	$('#page-content').fadeIn(0);

	$('.theme-control-btn').on("click", function () {
		$('body').toggleClass('dark-theme');

		const isDark = $('body').hasClass('dark-theme');
		localStorage.setItem('darkMode', isDark);
	});

	// Mobile menu control js
	$(".mobile-menu-control-bar").on("click", function () {
		$(".mobile-menu-overlay").addClass("show");
		$(".navbar-main").addClass("show");
	})
	$(".mobile-menu-overlay, .close-menu .close").on("click", function () {
		$(".mobile-menu-overlay").removeClass("show");
		$(".navbar-main").removeClass("show");
	})

    // Parallax scroll effect js
    $(".move-with-cursor").each(function () {
        var $this = $(this);
        $(document).on("mousemove", function (e) {
            var t = e.clientX,
                e = e.clientY;
            $this.css({
                "transition": "transform 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)",
                "transform": `translate(${0.01 * t}px, ${0.01 * e}px) rotate(${0.01 * (t + e)}deg)`
            });
        });
    });

	// Email copy button js
	new ClipboardJS('.btn-copy');

	// Email copy button tooltip js
	$(".btn-copy").on("click", function () {
		$(this).addClass("active");

		setTimeout(() => {
			$(this).removeClass("active");
		}, 1000);
	});

	// Magnific popup js
	$(".parent-container").magnificPopup({
		delegate: ".gallery-popup",
		type: "image",
		gallery: {
			enabled: true,
		},
	});

	// Client feedback slider js
	function  bentofolio_testimonial_slider(){
		$(".client-feedback-slider").slick({
			slidesToShow: 2,
			slidesToScroll: 1,
			autoplay: false,
			dots: false,
			infinite: true,
			arrows: true,
			speed: 500,
			prevArrow: '<i class="fas left icon fa-arrow-left"></i>',
			nextArrow: '<i class="fas right icon fa-arrow-right"></i>',
			responsive: [{
				breakpoint: 768,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				}
			},]
		});
	}

	// Article publications slider js
	function bentofolio_blog_slider(){
		$(".article-publications-slider").slick({
			slidesToShow: 2,
			slidesToScroll: 1,
			autoplay: false,
			dots: false,
			infinite: true,
			arrows: true,
			speed: 500,
			prevArrow: '<i class="fas left icon fa-arrow-left"></i>',
			nextArrow: '<i class="fas right icon fa-arrow-right"></i>',
			responsive: [{
				breakpoint: 768,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				}
			},]
		});
	}

	// last child menu
	$('.navbar-info > li').slice(-4).addClass('menu-last');

	$(window).on("elementor/frontend/init", function () {
		elementorFrontend.hooks.addAction(
			"frontend/element_ready/bentofolio-testimonial-slider.default",bentofolio_testimonial_slider
		);
		elementorFrontend.hooks.addAction(
			"frontend/element_ready/bentofolio-blog-slider.default",bentofolio_blog_slider
		);
	});


})(jQuery);
