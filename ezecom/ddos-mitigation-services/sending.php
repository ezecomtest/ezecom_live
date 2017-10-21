

<?php
// exit;
require("PHPMailer_5.2.0/class.phpmailer.php");
  $name = $_POST["name"];
  $mobile = $_POST["mobile"];
  $email = $_POST["email"];
  $des = $_POST["desciption"];

if($_SERVER["REQUEST_METHOD"] === "POST")
{

    $recaptcha_secret = "6LegbCMTAAAAAHsts3FfvQGwxoHxhOL0w8vDM5Lf";
    $response = file_get_contents("https://www.google.com/recaptcha/api/siteverify?secret=".$recaptcha_secret."&response=".$_POST['g-recaptcha-response']);
    $response = json_decode($response, true);

    if($response["success"] === true){
        $mail = new PHPMailer();

        $mail->IsSMTP();  // telling the class to use SMTP
        $mail->SMTPAuth   = true;                  // enable SMTP authentication
        $mail->Host       = "119.82.249.8"; // sets the SMTP server
        $mail->Port       = 587;                    // set the SMTP port for the GMAIL server
        $mail->Username   = "rms@ezecom.com.kh"; // SMTP account username
        $mail->Password   = "*xnaL223d23%";
        // $mail->From     = "ezecom.com.kh";
        $mail->AddAddress("websales@ezecom.com.kh");

        $mail->Subject  = "DDoS Mitigation Service Requirement";
        $mail->Body     = "\n\nUsername: $name \n\nTel: $mobile\n\nEmail: $email\n\nDescription: $des  ";
        $mail->WordWrap = 50;

        if(!$mail->Send()) {
            echo 'Message was not sent.';
            // echo 'Mailer error: ' . $mail->ErrorInfo;
        } else {
            // echo 'Message has been sent.';
            header("Location: https://www.ezecom.com.kh/ddos-mitigation-service/thank-you.php");
        }

    }else{
        header("Location: https://www.ezecom.com.kh/ddos-mitigation-service/robot.php");
    }

}
        

       


?>
