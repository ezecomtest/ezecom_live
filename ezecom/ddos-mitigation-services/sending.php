

<?php
// exit;
require("PHPMailer_5.2.0/class.phpmailer.php");
  $name = $_POST["name"];
  $mobile = $_POST["mobile"];
  $email = $_POST["email"];
  $des = $_POST["desciption"];
  $url = $_POST["baseUrl"];

if($_SERVER["REQUEST_METHOD"] === "POST")
{

    $recaptcha_secret = "6LegbCMTAAAAAHsts3FfvQGwxoHxhOL0w8vDM5Lf";
    $response = file_get_contents("https://www.google.com/recaptcha/api/siteverify?secret=".$recaptcha_secret."&response=".$_POST['g-recaptcha-response']);
    $response = json_decode($response, true);

    if($response["success"] === true){
        $mail = new PHPMailer();

        $mail->IsSMTP();  // telling the class to use SMTP
        $mail->SMTPAuth   = true;                  // enable SMTP authentication
        $mail->Host       = "smtp.ezecom.com.kh"; // sets the SMTP server
        $mail->Port       = 587;                    // set the SMTP port for the GMAIL server
        $mail->Username   = "developer@ezecom.com.kh"; // SMTP account username
        $mail->Password   = "yT2hxYtgDA";
        $mail->From     = "developer@ezecom.com.kh";
		$mail->FromName = "DDoS Mitigation Service";
        $mail->AddAddress("websales@ezecom.com.kh");

        $mail->Subject  = "DDoS Mitigation Service Requirement";
        $mail->Body     = "\n\nUsername: $name \n\nTel: $mobile\n\nEmail: $email\n\nDescription: $des  ";
        $mail->WordWrap = 50;

        if(!$mail->Send()) {
            echo 'Message was not sent.';
            // echo 'Mailer error: ' . $mail->ErrorInfo;
        } else {
			header('Location:'.$url.'ddos-mitigation-services/thank-you.php?name='.$name.'&phone='.$mobile.'&url='.$url);
        }

    }else{
		header('Location:'.$url.'ddos-mitigation-services/robot.php');
    }

}
        

       


?>
