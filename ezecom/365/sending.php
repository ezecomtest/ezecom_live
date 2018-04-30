

<?php
// exit;
require("PHPMailer_5.2.0/class.phpmailer.php");
  $name = $_POST["name"];
  $mobile = $_POST["mobile"];
  $email = $_POST["email"];
  $des = $_POST["desciption"];
  $domain_name = $_POST["domain_name"];
  $number_user = $_POST["number_user"];
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
		$mail->FromName = "Cloud Service";
        $mail->AddAddress("websales@ezecom.com.kh");

        $mail->Subject  = "Office 365";
        $mail->Body     = "\n\nUsername: $name \n\nTel: $mobile\n\nEmail: $email \n\nDomain Name: $domain_name \n\nNumber of User: $number_user \n\nDescription: $des  ";
        $mail->WordWrap = 50;

        if(!$mail->Send()) {
            echo 'Message was not sent.';
            // echo 'Mailer error: ' . $mail->ErrorInfo;
        } else {
			header('Location:'.$url.'365/thank-you.php?name='.$name.'&phone='.$mobile.'&url='.$url); 
        }

    }else{
		header('Location:'.$url.'365/robot.php');
    }

}
        

       


?>
