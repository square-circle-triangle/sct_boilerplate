$(function(){
	app.init();
});

var app = {
	init:function(){
		app.registration.init();
	}
};

app.registration = {
	init:function(){

		//Form Validation
		var $form = $("#registration_form");
		var that = this;

		if($form.length){
			$form.validate({
				// Change the default error element to <em> for easy hiding with CSS if not required
				errorElement: "em",
				
				//Adds "error" class to input label
				highlight: function(element, errorClass, validClass) {
					that.toggleHighlight(element,errorClass,validClass,false);
				},
			
				//Removes "error" class to input label
				unhighlight: function(element, errorClass, validClass) {
					that.toggleHighlight(element,errorClass,validClass,true);
				},

				errorPlacement: function(error, element) {
					if(element.attr('type')=='checkbox'){
						error.appendTo( element.closest('fieldset') );
					}else if(element.type=='select'){
						error.appendTo(element.parent());
					}else{
						error.appendTo(element.parent());
					}
				}

			});
		}
	},

	toggleHighlight:function(element,errorClass,validClass,isValid){
		
		var type = $(element).attr('type');
		
		var classToAdd = isValid?validClass:errorClass;
		var classToRemove = isValid?errorClass:validClass;
		
		if(type === "checkbox"){
			$(element).closest("fieldset").find(".ez-checkbox").removeClass(classToRemove).addClass(classToAdd);
			$(element).closest("fieldset").find("label").removeClass(classToRemove).addClass(classToAdd);
			return;
		}
		
		if(type === "radio"){
			$(element).closest("fieldset").find(".ez-radio").removeClass(classToRemove).addClass(classToAdd);
			$(element).closest("fieldset").find("label").removeClass(classToRemove).addClass(classToAdd);
			return;
		}
		
		$(element).removeClass(classToRemove).addClass(classToAdd);
		$(element.form).find("label[for=" + element.id + "]").removeClass(classToRemove).addClass(classToAdd);
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