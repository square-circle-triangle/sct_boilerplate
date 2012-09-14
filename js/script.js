$(function(){

});

// -------------------------- //
// HELPER FUNCTIONS
// -------------------------- //

var Helper = (function(){
	
	var _self = {};
	
	function init(){
		page.example.init();
	}
	
	_self = {
		init : init
	};
	
	return _self;
	
})();


var app = {
	init:function(){
	}
};

app.utils = {
	
	_isIPad:null,
	_isIPhone:null,
	iPhoneNavBarHeight:66,

	isIPad:function(){
		if(this._isIPad===null){
			this._isIPad = navigator.platform.indexOf("iPad") != -1;
		}
		return this._isIPad;
	},

	isIPhone:function(){
		if(this._isIPhone===null){
			this._isIPhone = navigator.platform.indexOf("iPhone") != -1;
		}
		return this._isIPhone;
	},

	fixMobileSafariWidthBug:function(){
		//see http://webdesignerwall.com/tutorials/iphone-safari-viewport-scaling-bug
		(function(doc) {

			var addEvent = 'addEventListener',
					type = 'gesturestart',
					qsa = 'querySelectorAll',
					scales = [1, 1],
					meta = qsa in doc ? doc[qsa]('meta[name=viewport]') : [];

			function fix() {
				meta.content = 'width=device-width,minimum-scale=' + scales[0] + ',maximum-scale=' + scales[1];
				doc.removeEventListener(type, fix, true);
			}

			if ((meta = meta[meta.length - 1]) && addEvent in doc) {
				fix();
				scales = [.25, 1.6];
				doc[addEvent](type, fix, true);
			}

		}(document));
	},

	hideMobileSafariURLbar:function(){ 
		window.scrollTo(0,1); 
	}

}

// -------------------------- //
// MODULE PATTERN EXAMPLE
// -------------------------- //

var page = (function(){
	
	var _self = {};
	
	function init(){
		page.example.init();
	}
	
	_self = {
		init : init
	};
	
	return _self;
	
})();


// -------------------------- //
// EXAMPLE NAME
// -------------------------- //

page.example = (function(){
	
	var _self = {};
	
	function init(){
		
	}
	
	_self = {
		init : init
	};
	
	return _self;
	
})();