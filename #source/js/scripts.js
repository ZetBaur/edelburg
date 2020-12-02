
$(document).ready(function () {


	console.log(9);



	// =====================SCROLL TO TOP================================================================================

	$(window).scroll(function () {
		if ($(this).scrollTop() > 900) {
			$('.pageup').fadeIn();
		} else {
			$('.pageup').fadeOut();

		}
	});
	$("a[href^='#']").click(function () {
		var _href = $(this).attr("href");
		$("html, body").animate({ scrollTop: $(_href).offset().top + "px" });
		return false;
	});



	// ================MENU and BURGER=============================================================================
	$('.burger').on('click', function () {
		$('.menu').toggleClass('open');
	});

	$('.menu-item').on('click', function () {
		if ($('.menu').hasClass('open')) {
			$('.menu').removeClass('open');
		}
	});

	$('html, body').on('click', function (e) {
		if ($('.menu').hasClass('open') && !$(e.target).is('.menu, .menu-item, .burger')) {
			$('.menu').removeClass('open');
		}
	});

	// ================popup simple=======================================================================


	$('.popup-link').on('click', function () {
		$('.popup__overlay, .popup__window').fadeIn();
	});
	$('.popup__close').on('click', function () {
		$('.popup__overlay, .popup__window').fadeOut();
	});
	// ================Form validate=======================================================================


	$("input[name=phone]").mask("+7 (999) 999-99-99");

	function validateForms(form) {
		$(form).validate({
			rules: {
				name: {
					required: true,
					minlength: 2
				},
				phone: "required",
				email: {
					required: true,
					email: true
				}
			},
			messages: {
				name: {
					required: "We need your email address to contact you",
					minlength: jQuery.validator.format("At least {0} characters required!")
				},
				email: {
					required: "We need your email address to contact you",
					email: "Your email address must be in the format of name@domain.com"
				},
				phone: {
					required: "Пожалуйста, укажите номер телефона",
				}


			}


		});
	}
	validateForms('#commentForm');
	//====================TABS=============================================================================

	$('body').on('click', '.tab-link', function (event) {
		var eq = $(this).index();
		if ($(this).hasClass('parent')) {
			var eq = $(this).parent().index();
		}
		if (!$(this).hasClass('active')) {
			$(this).closest('.tabs').find('.tab-link').removeClass('active');
			$(this).addClass('active');
			$(this).closest('.tabs').find('.tab-item').removeClass('active').eq(eq).addClass('active');
			if ($(this).closest('.tabs').find('.slick-slider').length > 0) {
				$(this).closest('.tabs').find('.slick-slider').slick('setPosition');
			}
		}
	});
});
