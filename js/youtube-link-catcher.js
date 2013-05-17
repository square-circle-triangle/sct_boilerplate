// -------------------------- //
// YOUTUBE LINK CATCHER
// -------------------------- //

/**********************************************************************************

	This script will add an event listener on every A-tag on the page and if
	it links to a youtube video page will open the video in a lightbox instead
	of loading the page.

***********************************************************************************/

var YoutubeLinkCatcher = (function(){

	var _self = {},
		created = false,
		lightbox,
		iframe;


	function init(){
		bindEvents();
		addPlayIcon(); // optional functionality
	}


	function bindEvents(){
		// catch all link clicks on page
		$('body').on('click','a', function(e){
			var link  = $(this),
				href  = link.attr('href') || '';

			// is this a link to youtube?
			if( isYoutubeLink(href) ){
				e.preventDefault(); // stay on page
				startYoutubeLightbox(href); // lightbox go!
			}
		});
	}


	function addPlayIcon(){
		
		// if you have a gallery with images linking to different locations
		// and want those linking to youtube to have a specific style or
		// a play button overlay, add a function like this one


		var slides = $('.gallery .item a'), // item you want to check
			button = $('<div class="play_button" />'); // element that will be added if it's a youtube link

		slides.each(function(){

			var _this = $(this),
				href  = this.href;

			if( isYoutubeLink(href) ){
				// it's a youtube link, element will be added
				// could also just be a class that's added
				_this.append(button.clone());
			}
		});
	}


	function isYoutubeLink(href){

		href  = href.replace('https:', 'http:'); // detection should be indifferent to http/https
		
		// see if link starts with expected url
		if( typeof href !== 'undefined' && ( href.indexOf('http://www.youtube.com/watch?v=') === 0 || href.indexOf('http://youtube.com/watch?v=') === 0 || href.indexOf('http://youtu.be/') === 0 ) ){
			return true;
		}
		
		// url doesn't match
		return false;
	}


	function startYoutubeLightbox(href){
		var videoID = getVideoID(href);
		
		if( videoID !== '' ){
			if( !created ){ createLightbox(); } // check if lightbox has been created, create if not

			iframe.attr('src','http://www.youtube.com/embed/'+videoID);
			lightbox.fadeIn();
		}
	}


	function getVideoID(href){

		href  = href.replace('https:', 'http:');

		var fullLinkCodeStart  = href.indexOf('watch?v='),
			shortLinkCodeStart = href.indexOf('http://youtu.be/'),
			videoID = '';

		if( fullLinkCodeStart > 0 ){
			videoID = href.substr((fullLinkCodeStart+8)); // 8 is length of 'watch?v='
			if( videoID.indexOf('&') > 0 ){
				videoID = videoID.split('&')[0];
			}
		}
		else if( shortLinkCodeStart === 0 ){
			videoID = href.substr(16); // 16 is length of 'http://youtu.be/'
		}

		return videoID;
	}


	function createLightbox(){
		var html = 	  '<div id="video_lightbox" class="lightbox">'
						+ '<div class="backdrop"></div>'
						+ '<div class="inner">'
							+ '<div class="vid">'
								+ '<iframe width="560" height="315" frameborder="0" allowfullscreen></iframe>'
							+ '</div>'
						+ '</div>'
						+ '<div class="close">X</div>'
					+ '</div>';
		
		if( created ){ return; } // stop here if called again
		
		created  = true;
		lightbox = $(html);
		iframe   = lightbox.find('iframe');

		$('body').append(lightbox);

		lightbox.on('click','.backdrop, .close',function(){

			lightbox.fadeOut(function(){
				iframe.removeAttr('src');
			});
		});
	}


	_self = {
		init : init,
		startYoutubeLightbox : startYoutubeLightbox
	};

	return _self;

})();