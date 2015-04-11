$('a[href*=#]:not([href=#])').click(function() {
	if (location.pathname.replace(/^\//,'') === this.pathname.replace(/^\//,'') || location.hostname === this.hostname) {

		var target = $(this.hash);
		target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
		if (target.length) {
			$('html,body').animate({
				scrollTop: target.offset().top
			}, 900);
			return false;
		}
	}
});


//HIDE AND REVEAL SCRIPT


$('button').on('click', function () {

	var $button = $(this),
	onText = $button.data('on'),
	offText = $button.data('off');

	if($button.hasClass('on')) {
		$button.html(onText);
	}
	else {
		$button.html(offText);
	}

	$button.toggleClass('on');
});


(function ($) {

	var $wrapper = $('.hide-content'),
	$overlay = $('.overlay'),
	$trigger = $('button'),
	wrapperHeight = $wrapper.outerHeight(),
	desiredHeight = 600;

	// set wrapper height on load
	$wrapper.height(desiredHeight);

	$trigger.on('click', function () {
		if($wrapper.hasClass('show-more')) {
			$wrapper.height(desiredHeight);
		}
		else {
			// set wrapper to full height
			$wrapper.height(wrapperHeight);
		}
		$wrapper.toggleClass('show-more');
		$overlay.toggleClass('hide');
	});
})(jQuery);
