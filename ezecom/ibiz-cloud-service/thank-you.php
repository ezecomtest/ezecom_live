<!DOCTYPE html>
<html>
<head>
<title>ibizCloud: Thanks you!</title>
<link href="css/style.css" rel="stylesheet" type="text/css" media="all" />
<link href="css/bootstrap.css" rel="stylesheet" type="text/css" media="all" />
<link href='http://fonts.googleapis.com/css?family=Open+Sans:400,300,600,700,800' rel='stylesheet' type='text/css'>
<link href='http://fonts.googleapis.com/css?family=Raleway:400,100,200,300,500,600,700,800,900' rel='stylesheet' type='text/css'>
<!-- js -->
<script src="js/jquery.min.js"></script>
<!-- //js -->
<!-- for-mobile-apps -->
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<meta name="keywords" content="cland Responsive web template, Bootstrap Web Templates, Flat Web Templates, Andriod Compatible web template, 
Smartphone Compatible web template, free webdesigns for Nokia, Samsung, LG, SonyErricsson, Motorola web design" />
<script type="application/x-javascript"> addEventListener("load", function() { setTimeout(hideURLbar, 0); }, false);
		function hideURLbar(){ window.scrollTo(0,1); } </script>
<!-- //for-mobile-apps -->
<!-- start-smoth-scrolling -->
<script type="text/javascript" src="js/move-top.js"></script>
<script type="text/javascript" src="js/easing.js"></script>
<script type="text/javascript">
	jQuery(document).ready(function($) {
		$(".scroll").click(function(event){		
			event.preventDefault();
			$('html,body').animate({scrollTop:$(this.hash).offset().top},1000);
		});
	});
</script>
<!-- start-smoth-scrolling -->
<link href="css/component.css" rel="stylesheet" type="text/css"  />
<!--animated-css-->
<link href="css/animate.css" rel="stylesheet" type="text/css" media="all">
<script src="js/wow.min.js"></script>
<script>
 new WOW().init();
</script>
<!--/animated-css-->

<!-- Facebook Conversion Code for Leads - Ezecom Ibiz -->
<script>(function() {
var _fbq = window._fbq || (window._fbq = []);
if (!_fbq.loaded) {
var fbds = document.createElement('script');
fbds.async = true;
fbds.src = '//connect.facebook.net/en_US/fbds.js';
var s = document.getElementsByTagName('script')[0];
s.parentNode.insertBefore(fbds, s);
_fbq.loaded = true;
}
})();
window._fbq = window._fbq || [];
window._fbq.push(['track', '6020651445437', {'value':'0.00','currency':'USD'}]);
</script>
<noscript><img height="1" width="1" alt="" style="display:none" src="https://www.facebook.com/tr?ev=6020651445437&amp;cd[value]=0.00&amp;cd[currency]=USD&amp;noscript=1" /></noscript> 

<script type="text/javascript">var ssaUrl = ('https:'; == document.location.protocol ? 'https://'; : 'http://';) + 'pixel.sitescout.com/iap/c2a243a4ac88cfa7';new Image().src = ssaUrl;</script>

</head>

<body class="cbp-spmenu-push">
<script>
  
</script>
<!-- header -->
	<div class="banner1">
	<div class="container">
            <div class="header">
                <div class="col-md-6 logo left">
                    <a href="index.php"><img src="images/ibizCloud-icon.png" alt="" class="img-responsive"/></a>
                </div>
                <!--<div class="col-md-4 text-center">
                    Call us directly: 023 88 181
                </div>-->
                <div class="col-md-6 sign-in-up text-right">
                    <ul>
                        <li><a href="sign-up.php" class="hvr-shutter-in-vertical up">Sign up</a></li>
                    </ul>
                </div>
            <div class="clearfix"></div>
            </div>
	</div>
	</div>
<!-- //header -->
<!-- sign-up -->
	<div class="sign-in wow fadeInUp" data-wow-delay="0.5s">
	<div class="container">
		<h2>THANK YOU</h2>
                <p class='har'>Your sing up have successfully sent. Our staff will contact you soon.</p>
	</div>
	</div>
<!-- //sign-up -->
<!-- footer -->
	<div class="footer">
	<div class="container">
		<p>&copy; 2015 EZECOM LTD.</p>
	</div>
	</div>
<!-- //footer -->
<!-- here stars scrolling icon -->
	<script type="text/javascript">
                $(document).ready(function() {
                        /*
                        var defaults = {
                                containerID: 'toTop', // fading element id
                                containerHoverID: 'toTopHover', // fading element hover id
                                scrollSpeed: 1200,
                                easingType: 'linear' 
                        };
                        */

                        $().UItoTop({ easingType: 'easeOutQuart' });
                        

                });
	</script>
<!-- //here ends scrolling icon -->
</body>
</html>

<?php

/*$url = 'https://www.google.com/recaptcha/api/siteverify';
$opts = array('http' =>
    array(
   'method'  => 'POST',
   'header'  => 'Content-type: application/x-www-form-urlencoded',
   'content' => http_build_query(array('secret' => getenv('6Leduf4SAAAAALu_YoWDzgh3rp1YoHk3hJhUH2m2'), 'response' => $_POST["g-recaptcha-response"]))
)
);
$context  = stream_context_create($opts);
$result = json_decode(file_get_contents($url, false, $context, -1, 40000));
 
if (!$result->success) {
    errorResponse('reCAPTCHA checked failed!');
}*/

//get form value
$first_name = $_REQUEST["first_name"];
$last_name = $_REQUEST["last_name"];
$phone = $_REQUEST["phone"];
$email = $_REQUEST["email"];
$cambodia = $_REQUEST["cambodia"];
$us = $_REQUEST["us"];
$hongkong = $_REQUEST["hongkong"];
$other = $_REQUEST["other"];
$company=$_REQUEST["company"];
$job_title = $_REQUEST["job_title"];
$interested = $_REQUEST["interested"];
$country = $_REQUEST["country"];
$startdate = $_REQUEST["startdate"];

$status="";

$message='<html><body><table border="0xp" width="741px" cellpadding="0px" cellspacing="0px">';
$message .="<tr><td><b>ibizCloud SIGN UP</b></td></tr>";
$message .="<tr><td><br></td></tr>";

$message .="<tr><td>Name:  ". $first_name." ".$last_name."</td></tr>";
$message .="<tr><td>Email: ". $email." </td></tr>";
$message .="<tr><td>Phone: ". $phone." </td></tr>";
$message .="<tr><td><br></td></tr>";

$message .="<tr><td>Company: ".$company."</td></tr>";
$message .="<tr><td>Job Title: ".$job_title."</td></tr>";
$message .="<tr><td>Why want to use?: ".$interested."</td></tr>";
$message .="<tr><td>Country: ".$cambodia." ".$us." ".$hongkong." ".$other."</td></tr>";
$message .="<tr><td>Start Date: ".$startdate."</td></tr>";
$message .="<tr><td>Poster's IP address: ".$_SERVER['REMOTE_ADDR']."</td></tr>";
$message .='</body></table></html>';

require("/home/ezecom/www/ibiz-cloud-service/PHPMailer_5.2.0/class.phpmailer.php");

$mail = new PHPMailer();

$mail->IsSMTP();                                      // set mailer to use SMTP
$mail->Host = "smtp.ezecom.com.kh";  // specify main and backup server
$mail->SMTPAuth = true;     // turn on SMTP authentication
$mail->Username = "rms@ezecom.com.kh";  // SMTP username
$mail->Password = "eze_111"; // SMTP password
$mail->Port = 587;

$mail->From = "ezecom@ezecom.com.kh";
$mail->FromName = "ezecom";
$mail->AddAddress("phourng.vorlak7@gmail.com", "Vorleak Phourng");
$mail->AddAddress("vorleak@ezecomcorp.com");                  // name is optional

$mail->WordWrap = 50;                                 // set word wrap to 50 characters
$mail->IsHTML(true);                                  // set email format to HTML

$mail->Subject = "ibizCloud SIGN UP";
$mail->Body    = $message;
//$mail->AltBody = "This is the body in plain text for non-HTML mail clients";

if(!$mail->Send())
{
   echo "Message could not be sent. <p>";
   echo "Mailer Error: " . $mail->ErrorInfo;
   exit;
}else{
    //echo "Message has been sent";
	$status="good";
}

//echo $first_name,$last_name,$phone,$email,$company,$job_title,$interested,$country,$startdate;

/* $success="";
$fail="";

$message='<html><body><table border="0xp" width="741px" cellpadding="0px" cellspacing="0px">';
	//$to="card-centre@sbc-bank.com";
	$to='phourng.vorlak7@gmail.com';
	$subject = 'ibizCloud SIGN UP';
	
	$headers = "From: " . strip_tags(".$email.") . "\r\n";
        
	$message .="<tr><td><b>ibizCloud SIGN UP</b></td></tr>";
	$message .="<tr><td><br></td></tr>";
        
	$message .="<tr><td>Name:  ". $first_name." ".$last_name."</td></tr>";
	$message .="<tr><td>Email: ". $email." </td></tr>";
	$message .="<tr><td>Phone: ". $phone." </td></tr>";
        $message .="<tr><td><br></td></tr>";
        
	$message .="<tr><td>Company: ".$company."</td></tr>";
	$message .="<tr><td>Job Title: ".$job_title."</td></tr>";
	$message .="<tr><td>Why want to use?: ".$interested."</td></tr>";
        $message .="<tr><td>Country: ".$cambodia." ".$us." ".$hongkong." ".$other."</td></tr>";
        $message .="<tr><td>Start Date: ".$startdate."</td></tr>";
	
	$headers .= "MIME-Version: 1.0\r\n";
	$headers .= "Content-Type: text/html; charset=ISO-8859-1\r\n";
	$message.='</body></table></html>';
	
	if(mail($to, $subject, $message, $headers)){
            $success="You sign up have been sent! Our staff will contact you soon.";
	}else{
            $fail="Sorry! please try again.";
	}*/
	

?>


