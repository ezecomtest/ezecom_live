function sendRequest(donnee){
	// alert(donnee);
	$.ajax({
		type: "POST",
		url: "?option=com_search&task=signmeupPackage",
		data : donnee
	})
	.done(function() {
			alert( "Your request have been successfully sent!" );
	});
}

function verifyCaptcha(captcha_info){
	var isvalide = 0;
	jQuery.ajax({
		type: "POST",
		url: "index2.php?option=com_packageprice&task=sendemail_2",
		data : captcha_info,
		cache: false,
		async: false,
		success: function(msg){
			if(msg == 1){
				isvalide = 1;
			}
		}
		});
	return isvalide;
}

function clear_form_elements() {

    jQuery("#formsignup").find(':input').each(function() {
        switch(this.type) {
            case 'password':
            case 'select-multiple':
            case 'select-one':
            case 'text':
            case 'textarea':
            	jQuery(this).val('');
                break;
            case 'checkbox':
            case 'radio':
                this.checked = false;
        }
    });
}

function ValidForm(arrayMessages){
	var full_name = document.signup.eml_name;
	var email = document.signup.eml_email;
	var phone = document.signup.eml_phone;
    var details = document.signup.eml_details;

    if (!doAvoidEmpty(full_name)){
		//alert(arrayMessages['full_name']);
		document.getElementById('eml_name').style.border="1px solid #BD1616";
		full_name.focus();
		return false;
	}
	
	if (!doAvoidEmpty(email)){
		//alert(arrayMessages['email']);
		document.getElementById('eml_email').style.border="1px solid #BD1616";
		email.focus();
		return false;
	}else if (!isEmail(email.value)){
		document.getElementById('eml_email').style.border="1px solid #BD1616";
		alert(arrayMessages['email_incorrect']);
		email.focus();
		return false;
	}
	
	if (!doAvoidEmpty(phone)){
		document.getElementById('eml_phone').style.border="1px solid #BD1616";
		//alert(arrayMessages['your_tele_number']);
		phone.focus();
		return false;
	}else if (!isPhone(phone)){
		document.getElementById('eml_phone').style.border="1px solid #BD1616";
		alert(arrayMessages['your_tele_number_incorrect']);
		phone.focus();
		return false;
	}
	
	if (!doAvoidEmpty(details)){
		//alert(arrayMessages['details']);
		document.getElementById('eml_details').style.border="1px solid #BD1616";
		details.focus();
		return false;
	}

        return true;
       
}