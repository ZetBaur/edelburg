
$(document).ready(function () {





	// =====================SCROLL TO TOP================================================================================

	$(window).scroll(function () {
		if ($(this).scrollTop() > 900) {
			$('.pageup').fadeIn();
		} else {
			$('.pageup').fadeOut();
		}
	});




	// ================MENU and BURGER=============================================================================
	$('.burger').on('click', function () {
		$('.menu').addClass('open');
		$('.close').removeClass('open');

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





});
