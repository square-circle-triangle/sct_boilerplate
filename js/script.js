$(function(){

	// DOM ready, start JS
	Site.init();

});



// -------------------------- //
// SITE
// -------------------------- //

var Site = (function(){

	var _self = {};
	

	function init(){
		Site.Pages.init();
		Site.Helper.init();
	}
	

	_self = {
		init : init
	};
	
	return _self;
	
})();


// -------------------------- //
// PAGES
// -------------------------- //

Site.Pages = (function(){
	
	var _self = {};
	

	function init(){
		Site.Pages.TemplateName.init();
	}


	_self = {
		init    : init
	};
	
	return _self;
	
})();



// -------------------------- //
// PAGE :: TEMPLATE NAME
// -------------------------- //

Site.Pages.TemplateName = (function(){
	
	var _self = {},
		_div;
	

	function init(){
		if( $('html').hasClass('template_name') ){
			_div = $('#this_div');
			bindEvents();
		}
	}


	function bindEvents(){
		_div.on('click', 'button', function(e){
			e.preventDefault();
			doStuff();
		});
	}


	_self = {
		init    : init
	};
	
	return _self;
	
})();




// -------------------------- //
// HELPER
// -------------------------- //

Site.Helper = (function(){
	
	var _self = {},
		_div;
	

	function init(){
		_div = $('#this_div');
		bindEvents();
	}


	function bindEvents(){

	}
	

	_self = {
		init    : init
	};
	
	return _self;
	
})();









// -------------------------- //
// Dummy
// -------------------------- //

Dummy = (function(){
	
	var _self = {},
		_div;
	

	function init(){
		_div = $('#this_div');
		bindEvents();
	}


	function bindEvents(){
		_div.on('click', 'button', function(e){
			e.preventDefault();
			doStuff();
		});
	}


	function doStuff(){

	}
	

	_self = {
		init    : init,
		doStuff : doStuff
	};
	
	return _self;
	
})();