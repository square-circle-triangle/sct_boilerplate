// -------------------------- //
// FORM HELPER FUNCTIONS
// -------------------------- //

$(function(){
	FormHelper.init();
});

var FormHelper = (function(){

	var _self = {};



	function init(){

		// add placeholder functionality to text inputs
		// the placeholder text should be set as the value and data attribute:
		//
		//   <input type="text" value="My Placeholder" data-placeholder="My Placeholder">
		
		formPlaceholder();
		
		// this helps spambots from posting forms
		// the form action is hidden inside a div within the form and the re-attached
		//
		// <form action="#">
		//    <div class="form_action" style="display:none;">http://my-form.action/</div>
		//    ...
		// </form>

		formActionReplacement();
	}



	function formPlaceholder(){

		$('form').on('focus','input[type=text]',function(){

			var _input       = $(this),
				_val         = $.trim(_input.val()),
				_placeholder = _input.data('placeholder');

			if( typeof _placeholder === 'string' && _val === _placeholder ){
				_input.val('');
			}

		}).on('blur','input[type=text]',function(){

			var _input       = $(this),
				_val         = $.trim(_input.val()),
				_placeholder = _input.data('placeholder');

			if( typeof _placeholder === 'string' && _placeholder && _val === '' ){
				_input.val(_placeholder);
			}

		});
	}



	function formActionReplacement(){
		$('form').each(function(){
			var _form = $(this),
				_formAction = _form.find('.form_action');

			if( _formAction.length === 1 ){
				_formAction = $.trim(_formAction.text());
				if( _formAction.length > 0 ){
					_form.attr('action',_formAction);
				}
			}
		});
	}



	_self = {
		init : init
	};

	return _self;

})();