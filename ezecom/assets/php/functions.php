<?php
include('database.php');
getAllMoreItem();
getAllEvent();
getAllHomeItem();
getCameraPost();
getAllSavedAudio();
getRadioStation();
getProduct2();
function getAllMoreItem(){
	
	global $mySQL;
	$category=array();
	$category[0]='Our Company';
	$category[1]='Our Product';
	$category[2]='Our Partnership';
	$category[3]='Customer Service';
	
	$ourCompany=array();
	$ourCompany[0]='Company Profile';
	$ourCompany[1]='QUALITY MANAGEMENT SYSTEM';
	$ourCompany[2]='CHILDSAFE CERTIFICATION';
	$ourCompany[3]='CORPORATE SOCIAL RESPONSIBILITY';
	$ourCompany[4]='Community';
	$ourCompany[5]='Career opportunities';
	$ourCompany[6]='Contact Us';
	
	$ourProduct=array();
	$ourProduct[0]='Ezecom Premium';
	 
	
	$ourPartbership=array();
	$ourPartbership[0]='GOODWILL PARTNERs';
	$ourPartbership[1]='Ezecom Campus';
	$ourPartbership[2]='Student Discount';

	
	$customerService=array();
	$customerService[0]='Customer Service';
	$customerService[1]='Payment Options';
	$customerService[2]="FAQ's";
	
	$items=array($category[0]=>$ourCompany,$category[1]=>$ourProduct,$category[2]=>$ourPartbership,$category[3]=>$customerService);
	
	//echo json_encode($items);
	$data=array();
	for($i=0;$i<count($category);$i++){
		$key=$category[$i];
		$eachArray=$items[$key];
		$title='';$introtext='';$fulltext='';$created='';$modified='';$parentid='';
		$data1=array();
		for($j=0;$j<count($eachArray);$j++){
			$value=$eachArray[$j];
			
			if ($SQL = $mySQL->prepare("SELECT title,`introtext`,`fulltext`,created,modified,parentid FROM `tda62_content` WHERE `title`=?"))
				{
					$SQL->bind_param('s',$value);
					$SQL->execute();
					$SQL->store_result();
					$SQL->bind_result($title,$introtext,$fulltext,$created,$modified,$parentid);
					$SQL->fetch();
					$SQL->close();
					
					$imgLink='';
					//echo $introtext;
					$dom = new DOMDocument();
					$dom->loadHTML($introtext);
					$a = $dom->getElementsByTagName('img');
					if($a->length>0){
						$imgLink = $a->item(0)->getAttribute('src');
					}
					
					
					$ft=strip_tags($fulltext);
					$introtext=strip_tags($introtext);
					$introtext=preg_replace('/{([^{|}]*)}/', "", $introtext);
					$introtext=trim($introtext);
					$json_ary=array('title'=>$title,'introtext'=>$introtext,'fulltext'=>$ft,'created'=>$created,'modified'=>$modified,'parentid'=>$parentid,'imagelink'=>$imgLink);
					array_push($data1,array($value=>$json_ary));
				}
				
		}
		array_push($data,array($key=>$data1));
	}
	//echo json_encode($data);
	saveToFile("more",json_encode($data));
}

function getAllEvent(){
	global $mySQL;
	$data=array();
	// if ($SQL = $mySQL->prepare("SELECT `id`,`dates`,`enddates`,`title`,`modified`,`created`,`datdescription`,`datimage` FROM `tda62_eventlist_events` WHERE `published` =1 and `title` is not NULL ORDER BY `tda62_eventlist_events`.`created` DESC "))
	//`;
	if ($SQL = $mySQL->prepare('SELECT `id`,`created`,`title`,`modified`,`fulltext`,substring_index(substring_index(`images`,"/",-1),\'"\',1) FROM `xyqcp_content` WHERE `id` <> 609 AND `language` = "en-GB" AND `images` like "%news-events%" AND `title` is not NULL ORDER BY `xyqcp_content`.`created` DESC '))
		{
			
			//
			//;
			$SQL->execute();
			$SQL->store_result();
			// $SQL->bind_result($id,$dates,$enddates,$title,$modified,$created,$datdescription,$datimage);
			$SQL->bind_result($id,$dates,$title,$modified,$fulltext,$image);
			
			while($SQL->fetch()){
				$imgLink='';
				
			
				$dom = new DOMDocument();
				$dom->loadHTML($fulltext);
				$a = $dom->getElementsByTagName('img');
				if($a->length>0){
					$imgLink = $a->item(0)->getAttribute('src');
					
				}

				
					$json_ary=array('id'=>$id,'dates'=>$dates,'enddates'=>$dates,'title'=>$title,'modified'=>$modified,'created'=>$dates,'datdescription'=>strip_tags($fulltext),'datimage'=>$image,'big_image'=>$imgLink);
				
				

				// $json_ary=array('id'=>$id,'dates'=>$dates,'enddates'=>$enddates,'title'=>$title,'modified'=>$modified,'created'=>$created,'datdescription'=>strip_tags($datdescription),'datimage'=>$datimage,'big_image'=>$imgLink);
				array_push($data,$json_ary);
			}
			$SQL->close();
		}
	//echo json_encode($data);
	saveToFile("event",json_encode($data));
}

function saveToFile($fname,$content){
	$data=file_get_contents($fname);
	if($data=='$content'){
		echo "An error occured while generate json files! Please contact info@teammaster.biz";
	}else{
		echo "Successful generate json files!";
		file_put_contents($fname.'.json',$content);
	}
	
}

function getAllHomeItem(){
	global $mySQL;
	$data=array();
	if($SQL=$mySQL->prepare("Select title,`introtext`,`fulltext`,created,modified,parentid from tda62_content where catid=29 and state=1 order by id desc limit 4")){
		$SQL->execute();
		$SQL->store_result();
		$SQL->bind_result($title,$introtext,$fulltext,$created,$modified,$parentid);
		
		while($SQL->fetch()){
			$imgLink='';
			
			$dom = new DOMDocument();
			$dom->loadHTML($introtext);
			$a = $dom->getElementsByTagName('img');
			if($a->length>0){
				$imgLink = $a->item(0)->getAttribute('src');
				//echo $imgLink.'---<br/>';
			}
			
			$json_ary=array('title'=>$title,'introtext'=>strip_tags($introtext),'fulltext'=>strip_tags($fulltext),'created'=>$created,'modified'=>$modified,'parentid'=>$parentid,'imagelink'=>$imgLink);
			array_push($data,$json_ary);
		}
		
		$SQL->close();
		saveToFile("home",json_encode($data));
		//echo json_encode($data);
	}
}


function getRadioStation(){
	global $mySQL;
	$data=array();
	if($SQL=$mySQL->prepare("SELECT `radio_live_id`,`channel`,`http`,`rtsp`,`rtmp`,`thumbnail` FROM `tm_radio_live`")){
		$SQL->execute();
		$SQL->store_result();
		$SQL->bind_result($radio_live_id,$channel,$http,$rtsp,$rtmp,$thumbnail);
		
		while($SQL->fetch()){
			$json_ary=array('radio_live_id'=>$radio_live_id,'channel'=>$channel,'http'=>$http,'rtsp'=>$rtsp,'rtmp'=>$rtmp,'thumbnail'=>$thumbnail);
			array_push($data,$json_ary);
		}
		
		$SQL->close();
		saveToFile("radio_station",json_encode($data));
		//echo json_encode($data);
	}
}
function getAllSavedAudio(){
	global $mySQL;
	$data=array();
	if($SQL=$mySQL->prepare("SELECT `radio_spot_id`,`title`,`url`,`thumbnail` FROM `tm_radio_spot`")){
		$SQL->execute();
		$SQL->store_result();
		$SQL->bind_result($radio_spot_id,$title,$url,$thumbnail);
		
		while($SQL->fetch()){
			$json_ary=array('radio_spot_id'=>$radio_spot_id,'title'=>$title,'url'=>$url,'thumbnail'=>$thumbnail);
			array_push($data,$json_ary);
		}
		
		$SQL->close();
		saveToFile("offline_audio",json_encode($data));
		//echo json_encode($data);
	}
}

function getCameraPost(){
	global $mySQL;
	$data=array();
	if($SQL=$mySQL->prepare("SELECT `traffic_cam_id`,`name`,`http`,`rtsp`,`rtmp`,`thumbnail` FROM `tm_traffic_cam`")){
		$SQL->execute();
		$SQL->store_result();
		$SQL->bind_result($traffic_cam_id,$name,$http,$rtsp,$rtmp,$thumbnail);
		
		while($SQL->fetch()){
			$json_ary=array('traffic_cam_id'=>$traffic_cam_id,'name'=>$name,'http'=>$http,'rtsp'=>$rtsp,'rtmp'=>$rtmp,'thumbnail'=>$thumbnail);
			array_push($data,$json_ary);
		}
		
		$SQL->close();
		saveToFile("camera_post",json_encode($data));
		//echo json_encode($data);
	}
}

function getProduct2(){
	//
	global $mySQL;
	$data=array();
	if($SQL=$mySQL->prepare("SELECT title,`introtext`,`fulltext`,created,modified,parentid FROM `tda62_content` WHERE (`title`='ibizcloud' and `alias`='ibizcloud') or `title`='EZECOM DEDICATED PACKAGES' or (`title`='mpls' and `alias`='mpls')")){
		$SQL->execute();
		$SQL->store_result();
		$SQL->bind_result($title,$introtext,$fulltext,$created,$modified,$parentid);
		
		while($SQL->fetch()){
			$imgLink='';
			
			$dom = new DOMDocument();
			$dom->loadHTML($introtext);
			$a = $dom->getElementsByTagName('img');
			if($a->length>0){
				$imgLink = $a->item(0)->getAttribute('src');
				//echo $imgLink.'---<br/>';
			}
			
			$json_ary=array('title'=>$title,'introtext'=>strip_tags($introtext),'fulltext'=>strip_tags($fulltext),'created'=>$created,'modified'=>$modified,'parentid'=>$parentid,'imagelink'=>$imgLink);
			array_push($data,$json_ary);
		}
		
		$SQL->close();
		saveToFile("ezecom_product_2",json_encode($data));
		//echo json_encode($data);
	}
}

	
	function aes256Encrypt($key, $data) {
		if (32 !== strlen($key)){
			$key = hash('SHA256', $key, true);
		}
		$padding = 16 - (strlen($data) % 16);
		$data .= str_repeat(chr($padding), $padding);
		return mcrypt_encrypt(MCRYPT_RIJNDAEL_128, $key, $data, MCRYPT_MODE_CBC, str_repeat("\0", 16));
	}


?>
