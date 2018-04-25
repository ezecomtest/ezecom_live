

<?php
// exit;
require("PHPMailer_5.2.0/class.phpmailer.php");
  $name = $_POST["name"];
  $mobile = $_POST["mobile"];
  $email = $_POST["email"];
  $des = $_POST["desciption"];
  $package_name = $_POST["package"];
  $url = $_POST["baseUrl"];
 
if($_SERVER["REQUEST_METHOD"] === "POST"){
    $recaptcha_secret = "6LegbCMTAAAAAHsts3FfvQGwxoHxhOL0w8vDM5Lf";
    $response = file_get_contents("https://www.google.com/recaptcha/api/siteverify?secret=".$recaptcha_secret."&response=".$_POST['g-recaptcha-response']);
    $response = json_decode($response, true);
	
    if($response["success"] === true){
        $mail = new PHPMailer();
        $mail->IsSMTP();  // telling the class to use SMTP
        $mail->SMTPAuth   = true; // enable SMTP authentication
		$mail->CharSet = 'utf-8';
        $mail->Host       = "smtp.ezecom.com.kh"; // sets the SMTP server
        $mail->Port       = 587;                    // set the SMTP port for the GMAIL server
        $mail->Username   = "developer@ezecom.com.kh"; // SMTP account username
        $mail->Password   = "yT2hxYtgDA";
        // $mail->From     = "ezecom.com.kh";
		$mail->From = "developer@ezecom.com.kh";
		$mail->FromName = "EzeBiz";
        $mail->AddAddress("websales@ezecom.com.kh");

        $mail->Subject  = "EzeBiz";
        $mail->Body     = "\n\nFullName: $name \n\nPhone Number: $mobile \n\nPackage: $package_name \n\nEmail Address: $email \n\nConnection Detail: $des ";
        $mail->WordWrap = 50;

        if(!$mail->Send()) {
            echo 'Message was not sent.';
        }else{
			header('Location:'.$url.'Ezebiz/thank-you.php?name='.$name.'&phone='.$mobile.'&url='.$url); 
        }

    }else{
         header('Location:'.$url.'Ezebiz/robot.php');
    }

}
        

?>
