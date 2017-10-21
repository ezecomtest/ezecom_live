/*------------------------------------------------------------------------------
Developed by Chinh Do - EDGE-ASIA - www.edge-asia.com
Validator
Copyright: (c) 2009 EDGE-ASIA
------------------------------------------------------------------------------*/

/*
validation for textbox object
*/
function doAvoidEmpty(p_item) {
	if (p_item.value.length==0) {
		return false;
	}else{
		return true;
	}
}
/*
validation for combobox object 
*/
function doAvoidEmptyOptions(p_item) {
	var res=false;
	if (p_item.options.length>0){
		var my_option_val = p_item.options[p_item.selectedIndex].value;
		if (my_option_val!="" && my_option_val!="-1"){
			res = true;
		}
	}
	return res;
}

/*
validation for checkbox and radio button
*/
function doAvoidNonSelect(p_item) {	
	var res=false;
	for (i=0; i<p_item.length; i++){
		if (p_item[i].checked == true){
			res = true;
			break;
		}
	}
	return res;
}

/*
function isEmail(s)
{
	if(s=="") return false;
	if(s.indexOf(" ")>0) return false;
	if(s.indexOf("@")==-1)return false;
//	var i=1; var sLength=s.length;
	if(s.indexOf(".")==-1) return false;
	if(s.indexOf("..")!=-1)return false;
	if(s.indexOf("@")!=s.lastIndexOf("@")) return false;
	if(s.indexOf("@")!=s.lastIndexOf("@")){ ;return false;}
	if(s.lastIndexOf(".")==s.length-1)return false;
	var str="abcdefghikjlmnopqrstuvwxyz-@._0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
	for(var j=0;j<s.length;j++){
		if(str.indexOf(s.charAt(j))==-1)
			return false;
	}
	return true;
}

function isEmail_2(s) {
	var str = new String(s);
	var at="@"
	var dot="."
	var lat=str.indexOf(at)
	var lstr=str.length
	var ldot=str.indexOf(dot)
	if (str.indexOf(at)==-1){
	   return false
	}
	
	if (str.indexOf(at)==-1 || str.indexOf(at)==0 || str.indexOf(at)==lstr){
		alert("str.indexOf(at)==-1 || str.indexOf(at)==0 || str.indexOf(at)==lstr")
	   return false
	}
	
	if (str.indexOf(dot)==-1 || str.indexOf(dot)==0 || str.indexOf(dot)==lstr){
		alert("str.indexOf(dot)==-1 || str.indexOf(dot)==0 || str.indexOf(dot)==lstr")
		return false
	}
	
	 if (str.indexOf(at,(lat+1))!=-1){
		 alert("str.indexOf(at,(lat+1))!=-1")
		return false
	 }
	
	 if (str.substring(lat-1,lat)==dot || str.substring(lat+1,lat+2)==dot){
		 alert("str.substring(lat-1,lat)==dot || str.substring(lat+1,lat+2)==dot")
		return false
	 }
	
	 if (str.indexOf(dot,(lat+2))==-1){
		 alert("str.indexOf(dot,(lat+2))==-1")
		return false
	 }
	
	 if (str.indexOf(" ")!=-1){
		 alert("SPACE")
		return false
	 }
	
	 return true					
}
*/

function isEmail(value){
	value = new String(value);
	var email = value;
	var atPos, periodPos;
	var invalidChars = " /:,;";
	var validChars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789-_.@";
	var i;
	var badChar;
	var goodChar;
	var pos1 = email.indexOf("@", 0);
	var pos2 = email.indexOf(".", 0);
	if (email == "") 
		return false;
	for (i = 0; i < email.length; i++) {
		goodChar = email.charAt(i);
		if (validChars.indexOf(goodChar) == -1)
			return false;
	}
	atPos = email.indexOf("@", 0);
	if (atPos == -1)
		return false;
	if (email.indexOf("@", atPos + 1) != -1)
		return false;
	periodPos = email.indexOf(".", atPos);
	if (periodPos == -1)
		return false;
	if (periodPos + 3 > email.length)
		return false;
	if(email.slice(pos1, pos2) == "@"){		
		return false;
	}
	return true;
}

function isNickName(s)
{
	if(s=="") return false;
	if(s.indexOf(" ")>0) return false;
	var i=1; var sLength=s.length;
	if(s.indexOf("..")!=-1)return false;
	if(s.indexOf("@")!=s.lastIndexOf("@")) return false;
	if(s.lastIndexOf(".")==s.length-1)return false;
	var str="abcdefghikjlmnopqrstuvwxyz-._0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
	for(var j=0;j<s.length;j++)
		if(str.indexOf(s.charAt(j))==-1)
	return false;return true;
}

function isNumber(value){
	if (!isNaN(value)){
		return true;	
	}else{
		return false;	
	}
}

function isNumberLetter(value){
	var numberLetters = "0123456789";
	for (var i = 0; i < value.length; i++) {
		if (numberLetters.indexOf(value.charAt(i), 0) < 0) {
			return false;
		}
	}
	return true;
}

function isPhone(p)
{
	var re = /(\(?(\d{3}|(\d{2,3}[- ]\d{1,2}))\)?[-. ]?)?(\d\.?\d{3}\.?\d{3})/;
	if(p.value.match(re)){
	return true;
	}else{
	return false;
	}
}

/*
validation for GSM value
*/
function isGSM(value){
	var result = false;
	if (value.indexOf("+") != -1){
		trace("co +");
		var value1 = value.substr(1, value.length - 1);
		trace(value1);
		if (value.indexOf("+") == 0 && isNumberLetter(value1) && value1.length == 11){
			result = true;	
		}				
	}
	else{
		if (value.indexOf("0") == 0){
			var value2 = value.substr(1, value.length - 1);
			if (value2.indexOf("0") == 0 && isNumberLetter(value2) && value2.length == 12){
				result = true;
			}
			else if (isNumberLetter(value2) && value2.length == 9){
				result = true;
			}
		}
		else if (value.length == 11 && isNumberLetter(value)) {
			result = true;
		}
	}
	return result;
}