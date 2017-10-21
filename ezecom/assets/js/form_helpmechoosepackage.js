function sendRequest2(donnee1){
	 // alert(donnee1);
	jQuery.ajax({
		type: "POST",
		url: "?option=com_search&task=helpMeChoosePackage",
		data : donnee1,
		cache: false,
		async: false,
		success: function(newCaptcha){
                    alert("Your Request have been sent sucessfully");
		}
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

function clear_form_elements2() {

    jQuery("#formheplmechoosepackage").find(':input').each(function() {
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

function ValidForm1(arrayMessages){
	var full_help_name = document.formheplmechoosepackage.eml_help_name;
	var email_help = document.formheplmechoosepackage.eml_help_email;
	var phone_help = document.formheplmechoosepackage.eml_help_phone;
    var details_help = document.formheplmechoosepackage.eml_help_details;

        if (!doAvoidEmpty(full_help_name)){
		//alert(arrayMessages['full_help_name']);
		document.getElementById('eml_help_name').style.border="1px solid #BD1616";
		full_help_name.focus();
		return false;
	}
	
	if (!doAvoidEmpty(email_help)){
		//alert(arrayMessages['email_help']);
		document.getElementById('eml_help_email').style.border="1px solid #BD1616";
		email_help.focus();
		return false;
	}else if (!isEmail(email_help.value)){
		document.getElementById('eml_help_email').style.border="1px solid #BD1616";
		alert(arrayMessages['email_help_incorrect']);
		email_help.focus();
		return false;
	}
	
	if (!doAvoidEmpty(phone_help)){
		//alert(arrayMessages['your_help_tele_number']);
		document.getElementById('eml_help_phone').style.border="1px solid #BD1616";
		phone_help.focus();
		return false;
	}else if (!isPhone(phone_help)){
		document.getElementById('eml_help_phone').style.border="1px solid #BD1616";
		alert(arrayMessages['your_help_tele_number_incorrect']);
		phone_help.focus();
		return false;
	}
	
	if (!doAvoidEmpty(details_help)){
		//alert(arrayMessages['details_help']);
		document.getElementById('eml_help_details').style.border="1px solid #BD1616";
		details_help.focus();
		return false;
	}
        return true;
}