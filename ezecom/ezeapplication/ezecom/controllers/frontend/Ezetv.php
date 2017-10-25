<?php
defined('BASEPATH') OR exit('No direct script access allowed');
require("php_ezetv/PHPMailer_5.2.0/class.phpmailer.php");

class Ezetv extends CI_Controller {
	 public function __construct()
    {
        parent::__construct();
		$this->load->library('session');
        $this->load->library('encrypt');
		$this->load->model('frontend/homepage_m');
		$this->load->helper(array('form', 'url'));
        date_default_timezone_set("Asia/Bangkok");
        
    }
	public function index(){
		$this->ezetv_service();
	}
	public function ezetv_service(){
		$data['title'] = "EzeTV";
		$data['active']= "EzeTV";
		$lan = 1;
        $data['feature_content'] = $this->homepage_m->get_feature_content($lan);
		$this->load->view('frontend/ezetv',$data);
	}
	public function ezetv_signup(){
		
		 if($_SERVER["REQUEST_METHOD"] === "POST"){
			$name = $_POST["name"];
			$mobile = $_POST["mobile"];
			$email = $_POST["email"];
			$des = $_POST["desciption"];
			  
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

				$mail->Subject  = "EzeTV Service Requirement";
				$mail->Body     = "\n\nUsername: $name \n\nTel: $mobile\n\nEmail: $email\n\nDescription: $des  ";
				$mail->WordWrap = 50;

				if(!$mail->Send()) {
					echo 'Message was not sent.';
					// echo 'Mailer error: ' . $mail->ErrorInfo;
				} else {
					// echo 'Message has been sent.';
					$base_url = base_url()."php_ezetv/thank-you.php";
					header("Location: $base_url");
				}

			}else{
				$base_url = base_url()."php_ezetv/robot.php";
				header("Location: $base_url");
			}
		  }
	}
}