<?php header("Content-Type: text/html;charset=UTF-8");
	$filename = $_GET['id'];
	if($filename!=''){
		echo getDateModifyFile($filename);
	}
	function getDateModifyFile($filename) {
		if(!endswith($filename, '.json')){
			$filename = $filename.'.json';
		}
		if (file_exists($filename)) {
			$datemodified = date ("F d Y H:i:s", filemtime($filename));
		}else{
			$datemodified = '-1';
		}
		return $datemodified;
	}
?>