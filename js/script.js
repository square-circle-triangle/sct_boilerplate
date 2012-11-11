$(function(){

	// DOM ready, start JS
	Page.init();

});



// -------------------------- //
// MAIN FUNCTION
// -------------------------- //

var Page = (function(){
	
	// MAIN FUNCTION
	// manage different helper functions here
	// like galleries, form validations, ...

	var _self = {};
	

	function init(){
		// init other functions here
		Page.Example.init();
	}
	

	_self = {
		init : init
	};
	
	return _self;
	
})();


// -------------------------- //
// SUB FUNCTION
// -------------------------- //

Page.Example = (function(){
	
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