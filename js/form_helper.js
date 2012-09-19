// -------------------------- //
// FORM HELPER FUNCTIONS
// -------------------------- //

$(function(){
	FormHelper.init();
});

var FormHelper = (function(){

	var _self = {},
		_forms;



	function init(){

		_forms = $('form');

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



		//
		replaceSelectBoxes();
		replaceRadioAndCheckboxes();


		// Form validation using jQuery Validate plugin (in plugin.js)
		// Replace with custom function if needed
		validateForms();
	}



	function formPlaceholder(){

		// set placeholder to value
		var _inputs = _forms.find('input[data-placeholder]');
		_inputs.each(function(){
			var _this = $(this),
				_placeholder = _this.data('placeholder');
			if( typeof _placeholder === 'string' ){
				_this.val()
			}
			
		});
		// bind events
		_forms.on('focus','input[type=text]',function(){

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
		_forms.each(function(){
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


	function validateForms(){

		_forms.validate({
			// Change the default error element to <em> for easy hiding with CSS if not required
			errorElement: "em",
			
			submitHandler: function(){
				alert('Form validates. Do ajaxy stuff or remove the "submitHander" option from the validate plugin!');
			},

			//Adds "error" class to input label
			highlight: function(element, errorClass, validClass) {
				toggleHighlight(element,errorClass,validClass,false);
			},
		
			//Removes "error" class to input label
			unhighlight: function(element, errorClass, validClass) {
				toggleHighlight(element,errorClass,validClass,true);
			},

			errorPlacement: function(error, element) {
				var _type = element.attr('type');

				if( _type === 'checkbox' ){
					// do checkbox specific stuff
					return;
				}
				else if( _type === 'radio' ){
					// do radio specific stuff
					return;
				}

				element.closest('.form_item').append(error);
			}

		});

	}


	function toggleHighlight(element,errorClass,validClass,isValid){
		
		var type          = $(element).attr('type'),
			classToAdd    = isValid ? validClass : errorClass,
			classToRemove = isValid ? errorClass : validClass;
		
		if(type === "checkbox"){
			// do stuff if it's a checkbox 
			// return;
		}
		
		if(type === "radio"){
			// do stuff if it's a radio button
			// return;
		}
		
		$(element).closest('.form_item').removeClass(classToRemove).addClass(classToAdd);
	}



	function replaceSelectBoxes(){

		$('.selectbox').each(function(){
			var _itemDiv    = $(this),
				_select     = _itemDiv.find('select'),
				_value      = $.trim(_select.find(':selected').text()) || '&nbsp;',
				_selectWrap = $('<div class="select_wrap"><span>'+_value+'</span></div>');

			_select.detach().appendTo(_selectWrap);
			_selectWrap.appendTo(_itemDiv);
		}).on('change','select',function(){
			var _select          = $(this),
				_val             = $.trim(_select.find(':selected').text()) || '&nbsp;',
				_spanReplacement = _select.siblings('span');

			_spanReplacement.html(_val);
		});

	}


	function replaceRadioAndCheckboxes(){
		$('.radio,.checkbox').find('input[type=checkbox],input[type=radio]').each(function(){
			var _input     = $(this),
				_parent    = _input.parent(),
				_inputWrap = $('<div class="checkbox_wrap" />');

			if( _input.is(':checked') ){
				_parent.addClass('checked');
			}

			_input.detach().appendTo(_inputWrap);
			_inputWrap.prependTo(_parent);
		}).on('change',function(e){
			var _input = $(this),
				_name  = _input.attr('name'),
				_type  = _input.attr('type');

			if( _type === 'checkbox'){
				$(this).closest('label').toggleClass('checked');
			}
			else if( _type === 'radio' ) {
				$('input[name="'+_name+'"]').closest('label').removeClass('checked');
				$(this).closest('label').addClass('checked');
			}
			
		});
	}


	_self = {
		init : init
	};

	return _self;

})();