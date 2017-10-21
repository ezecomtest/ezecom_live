/*------------------------------------------------------------------------------
Developed by Chinh Do - EDGE-ASIA - www.edge-asia.com
String Utilities
Copyright: (c) 2009 EDGE-ASIA
------------------------------------------------------------------------------*/

function leftTrim(orgString){
	var s = orgString;

	while(s.length > 0 && s.charAt(0) == " ")
		s = s.substring(1);	
	return s;
}

function rightTrim(orgString){
	var s = orgString;

	while(s.length > 0 && s.charAt(s.length-1) == " ")
		s = s.substring(0, s.length - 1);	
		
	return s;		
}

function trim(orgString){
	var s = orgString;

	s = leftTrim(s);
	s = rightTrim(s);
	return s;
}