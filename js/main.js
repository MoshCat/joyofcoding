// @codekit-prepend 'jquery.min.js'
// @codekit-prepend 'skrollr.min.js'


if (window.matchMedia('(min-width: 1024px)').matches) {
  skrollr.init({
  	forceHeight: false
  });
}

// poster frame click event
$(document).on('click','.js-videoPoster',function(ev) {
  ev.preventDefault();
  var $poster = $(this);
  var $wrapper = $poster.closest('.js-videoWrapper');
  videoPlay($wrapper);
});

// play the targeted video (and hide the poster frame)
function videoPlay($wrapper) {
  var $iframe = $wrapper.find('.js-videoIframe');
  var src = $iframe.data('src');
  // hide poster
  $wrapper.addClass('videoWrapperActive');
  // add iframe src in, starting the video
  $iframe.attr('src',src);
}

// stop the targeted/all videos (and re-instate the poster frames)
function videoStop($wrapper) {
  // if we're stopping all videos on page
  if (!$wrapper) {
    var $wrapper = $('.js-videoWrapper');
    var $iframe = $('.js-videoIframe');
  // if we're stopping a particular video
  } else {
    var $iframe = $wrapper.find('.js-videoIframe');
  }
  // reveal poster
  $wrapper.removeClass('videoWrapperActive');
  // remove youtube link, stopping the video from playing in the background
  $iframe.attr('src','');
}

// Handles toggling the navigation menu for small screens
( function() {
	var container, button, menu, links, i, len;

	container = document.getElementById( 'site-navigation' );
	if ( ! container ) {
		return;
	}

	button = container.getElementsByTagName( 'button' )[0];
	if ( 'undefined' === typeof button ) {
		return;
	}

	menu = container.getElementsByTagName( 'ul' )[0];

	// Hide menu toggle button if menu is empty and return early.
	if ( 'undefined' === typeof menu ) {
		button.style.display = 'none';
		return;
	}

	menu.setAttribute( 'aria-expanded', 'false' );
	if ( -1 === menu.className.indexOf( 'nav-menu' ) ) {
		menu.className += ' nav-menu';
	}

	button.onclick = function() {
		if ( -1 !== container.className.indexOf( 'toggled' ) ) {
			container.className = container.className.replace( ' toggled', '' );
			button.setAttribute( 'aria-expanded', 'false' );
			menu.setAttribute( 'aria-expanded', 'false' );
			button.classList.toggle("is-active");
		} else {
			container.className += ' toggled';
			button.setAttribute( 'aria-expanded', 'true' );
			menu.setAttribute( 'aria-expanded', 'true' );
			button.classList.toggle("is-active");
		}
	};

} )();