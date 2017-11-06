<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Index extends CI_Controller {
	 public function __construct()
    {
        parent::__construct();
        $this->load->database();
        $this->load->library('pagination');
        $this->load->library('session');
        $this->load->model('frontend/homepage_m');
        $this->load->library('encrypt');
        $this->load->library('email');
        $this->load->helper(array('form', 'url'));
        date_default_timezone_set("Asia/Bangkok");
        if(!$this->session->userdata("language")){
        	$lan = array('language'=>1);
	    	$this->session->set_userdata($lan);
        }
	    
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

		$this->homepage();
	}

	public function homepage(){
				if($this->session->userdata("language")==1){
					$sessionid = 1;
					$data['title'] = "Home";
					$data['active'] = "Home";
					$lan = $this->session->userdata("language");
					$data['feature_content'] = $this->homepage_m->get_feature_content($lan);
					$data['get_slider'] = $this->homepage_m->get_homepage_slider($sessionid);
					$this->load->view('frontend/homepage',$data);
				}
				if($this->session->userdata("language")==2){
					$sessionid = 1;
					$data['title'] = "ទំព័រដើម";
					$data['active'] = "Home";
					$lan = $this->session->userdata("language");
					$data['feature_content'] = $this->homepage_m->get_feature_content($lan);
					$data['get_slider'] = $this->homepage_m->get_homepage_slider($sessionid);
					$this->load->view('frontend/homepage _kh_v',$data);
				}
				if($this->session->userdata("language")==3){
					$sessionid = 1;
					$data['title'] = "Home";
					$data['active'] = "Home";
					$lan = $this->session->userdata("language");
					$data['feature_content'] = $this->homepage_m->get_feature_content($lan);
					$data['get_slider'] = $this->homepage_m->get_homepage_slider($sessionid);
					$this->load->view('frontend/homepage_ch_v',$data);
				}	

				if($this->session->userdata("language")== ""){
					$sessionid = 1;
					$data['title'] = "Home";
					$data['active'] = "Home";
					$lan = 1;
					$data['feature_content'] = $this->homepage_m->get_feature_content($lan);
					$data['get_slider'] = $this->homepage_m->get_homepage_slider($sessionid);
					$this->load->view('frontend/homepage',$data);
				}

	}

	public function not_found(){
		$data['title'] = "Not found";
		$this->load->view('404/not_found',$data);

	}

	public function set_help_me_choose(){

		$package['step'] = 2;
		$package['user'] = $this->input->post("user");
		
        $this->session->set_userdata($package);
        echo $this->session->userdata("step");
	}

	public function session_out(){
		$this->session->unset_userdata('step');
	}

	public function help_me_choose_step2(){
		$user['step'] = 3;
		$user['user2'] = $this->input->post("user2");
		$user['numberusers'] = $this->input->post("numberusers");
        $this->session->set_userdata($user);
        echo $this->session->userdata("step");
	}

	public function submit_help_me_choose(){
		$user['eml_help_name'] = $this->input->post("eml_help_name");
		$user['eml_help_email'] = $this->input->post("eml_help_email");
		$user['eml_help_phone'] = $this->input->post("eml_help_phone");
		$user['eml_help_details'] = $this->input->post("eml_help_details");
		$this->session->set_userdata($user);
		$send = $this->send_email_help_me_choose($user);

		if($send){
			 echo "send";
		}else{
			echo "not send";
		}
	}

	public function send_email_help_me_choose($user){
		$config = Array(
		    'protocol' => 'smtp',
		    'smtp_host' => 'smtp.ezecom.com.kh',
		    'smtp_port' => 587,
		    'smtp_user' => 'developer@ezecom.com.kh', 
		    'smtp_pass' => 'yT2hxYtgDA', 
		    'mailtype' => 'html',
		    'charset' => 'iso-8859-1',
		    'wordwrap' => TRUE
  			); 
			
		  $data = array(
			'full_name'=> $user['eml_help_name'],
			'email'=> $user['eml_help_email'],
			'send_date'=> mdate('%Y-%m-%d',now())
			);
 
		  $this->load->library('email', $config);
		  $this->email->from('developer@ezecom.com.kh','Website EZECOM');
		  $this->email->to('websales@ezecom.com.kh','kimba@ezecomcorp.com');
		  //$this->email->to('eang.chhenghong@ezecomcorp.com');
		  //$this->email->cc("sour.piset@ezecomcorp.com");
		  $this->email->subject("HELP ME CHOOSE AN INTERNET PACKAGE");

		  $contain = "\n"."Dear Sir/Madam, "."\n\n" .
				"You received a customer's message from website Ezecom. Sender's Information detail show below: "."\n\n".
				"Name: " .
				ucwords($this->session->userdata("eml_help_name")).
				"\n" .
				"Email: " .$this->session->userdata("eml_help_email").
				"\n" .
				"Phone: " .
				ucwords($this->session->userdata("eml_help_phone")).
				"\n" .
				"Details:\n* Kind of user:" .
				$this->session->userdata("user")."\n* Internet that I use for:".
				$this->session->userdata("user2")."\n* Connection Number use at the same time:".
				$this->session->userdata("numberusers").
				"\n" .
				"\n\n** Automatic sent mail from website ezecom **\n" ;
		  $this->email->message($contain);
		  
		  if($this->email->send()){
			$this->homepage_m->insert_help_me_choose($data);
		  	return true;
		  }else{
		  	return false;
		  }
	}

	public function signmeup_email(){

		$eml_name = $this->input->post("eml_name");
		$eml_email = $this->input->post("eml_email");
		$eml_phone = $this->input->post("eml_phone");
		$eml_details = $this->input->post("eml_details");
		$config = Array(
		    'protocol' => 'smtp',
		    'smtp_host' => 'smtp.ezecom.com.kh',
		    'smtp_port' => 587,
		    'smtp_user' => 'developer@ezecom.com.kh', 
		    'smtp_pass' => 'yT2hxYtgDA', 
		    'mailtype' => 'html',
		    'charset' => 'iso-8859-1',
		    'wordwrap' => TRUE
  			); 
		
		 $data = array(
			'full_name'=> $eml_name,
			'email'=> $eml_email,
			'send_date'=> mdate('%Y-%m-%d',now())
			);
			
		  $this->load->library('email', $config);
		  $this->email->from('developer@ezecom.com.kh','Website EZECOM');
		  $this->email->to('websales@ezecom.com.kh','kimba@ezecomcorp.com');
		  //$this->email->to('eang.chhenghong@ezecomcorp.com');
		  //$this->email->cc("sour.piset@ezecomcorp.com");
		  $this->email->subject("SIGN ME UP");

		$package = $this->input->post("package");
		if($package !=""){
			 $contain = "\n"."Dear Sir/Madam, "."\n\n" .
				"You received a customer's message from website Ezecom. Sender's Information detail show below: "."\n\n".
				"Name: " .
				ucwords($eml_name).
				"\n" .
				"Email: " .$eml_email.
				"\n" .
				"Phone: " .
				ucwords($eml_phone).
				"\n" .
				"Details:\n" .
				$eml_details.
				"\n" .
				"Package that ".$eml_name. " interest is coporate package : ".$package.
				"\n\n** Automatic sent mail from website ezecom **\n" ;
		  $this->email->message($contain);
		  
		  if($this->email->send()){
			$this->homepage_m->insert_signme_up($data);
		  	return true;
		  }else{
		  	return false;
		  }

		}
		$prempackage = $this->input->post("prempackage");
		if($prempackage !=""){
			 $contain = "\n"."Dear Sir/Madam, "."\n\n" .
				"You received a customer's message from website Ezecom. Sender's Information detail show below: "."\n\n".
				"Name: " .
				ucwords($eml_name).
				"\n" .
				"Email: " .$eml_email.
				"\n" .
				"Phone: " .
				ucwords($eml_phone).
				"\n" .
				"Details:\n" .
				$eml_details.
				"\n" .
				"Package that ".$eml_name. " interest is coporate premium : ".$prempackage.
				"\n\n** Automatic sent mail from website ezecom **\n" ;
		  $this->email->message($contain);
		  
		  if($this->email->send()){
		  	return true;
		  }else{
		  	return false;
		  }
		}

		
		


	}
}
