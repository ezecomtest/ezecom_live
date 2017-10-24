<?php
defined('BASEPATH') OR exit('No direct script access allowed');
require("php_ezesurf/PHPMailer_5.2.0/class.phpmailer.php");
 
class Our_services_c extends CI_Controller {
	 public function __construct()
    {
        parent::__construct();
        $this->load->model('frontend/homepage_m');
    }

	/**
	 * Index Page for this controller.
	 *
	 * Maps to the following URL
	 * 		http://example.com/index.php/welcome
	 *	- or -
	 * 		http://example.com/index.php/welcome/index
	 *	- or -
	 * Since this controller is set as the default controller in
	 * config/routes.php, it's displayed at http://example.com/
	 *
	 * So any other public methods not prefixed with an underscore will
	 * map to /index.php/welcome/<method_name>
	 * @see https://codeigniter.com/user_guide/general/urls.html
	 */
	public function index()
	{
		$this->our_services();
	}

	public function our_services(){
		if($this->session->userdata("language")==1){
		$data['title'] = "Our Services";
		$data['active'] = "Our Services";
		$lan = $this->session->userdata("language");
		$data['feature_content'] = $this->homepage_m->get_feature_content($lan);
		$this->load->view('frontend/our_services_v',$data);
		}
		if($this->session->userdata("language")==2){
		$data['title'] = "អាជីវកម្ម";
		$data['active'] = "Our Services";
		$lan = $this->session->userdata("language");
		$data['feature_content'] = $this->homepage_m->get_feature_content($lan);
		$this->load->view('frontend/our_services_kh_v',$data);
		}
		if($this->session->userdata("language")==3){
		$data['title'] = "Our Services";
		$data['active'] = "Our Services";
		$lan = $this->session->userdata("language");
		$data['feature_content'] = $this->homepage_m->get_feature_content($lan);
		$this->load->view('frontend/our_services_ch_v',$data);
		}

		if($this->session->userdata("language")== ""){
		$data['title'] = "Our Services";
		$data['active'] = "Our Services";
		$lan = 1;
		$data['feature_content'] = $this->homepage_m->get_feature_content($lan);
		$this->load->view('frontend/our_services_v',$data);
		}
	}

	public function enterprise_solution(){
		if($this->session->userdata("language") ==1){
		$data['title'] = "Enterprise Solutions";
		$data['active'] = "Our Services";
		$lan = $this->session->userdata("language");
		$data['feature_content'] = $this->homepage_m->get_feature_content($lan);
		$this->load->view('frontend/enterprise_solutions_v',$data);
	}
	if($this->session->userdata("language")==2){
		$data['title'] = "Enterprise Solutions";
		$data['active'] = "Our Services";
		$lan = $this->session->userdata("language");
		$data['feature_content'] = $this->homepage_m->get_feature_content($lan);
		$this->load->view('frontend/enterprise_solutions_kh_v',$data);
		}
	if($this->session->userdata("language")==3){
		$data['title'] = "Enterprise Solutions";
		$data['active'] = "Our Services";
		$lan = $this->session->userdata("language");
		$data['feature_content'] = $this->homepage_m->get_feature_content($lan);
		$this->load->view('frontend/enterprise_solutions_ch_v',$data);
		}
	if($this->session->userdata("language") == ""){
		$data['title'] = "Enterprise Solutions";
		$data['active'] = "Our Services";
		$lan = 1;
		$data['feature_content'] = $this->homepage_m->get_feature_content($lan);
		$this->load->view('frontend/enterprise_solutions_v',$data);
	}

}

	public function beedoo_could_service_by_ezecom(){
		$data['title'] = "BeeDoo Could Service by Ezecom_ Don't just back up move forward!";
		$lan = 1;
		$data['feature_content'] = $this->homepage_m->get_feature_content($lan);
		$this->load->view('frontend/beedoo_could_service_by_ezecom_v',$data);
	}
	
	public function ezesurf(){
		
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

				$mail->Subject  = "EzeSurf Service Requirement";
				$mail->Body     = "\n\nUsername: $name \n\nTel: $mobile\n\nEmail: $email\n\nDescription: $des  ";
				$mail->WordWrap = 50;

				if(!$mail->Send()) {
					echo 'Message was not sent.';
					// echo 'Mailer error: ' . $mail->ErrorInfo;
				} else {
					// echo 'Message has been sent.';
					$base_url = base_url()."php_ezesurf/thank-you.php";
					header("Location: $base_url");
				}

			}else{
				$base_url = base_url()."php_ezesurf/robot.php";
				header("Location: $base_url");
			}
		  }
	 
	}

	
}