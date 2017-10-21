<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Authentication extends CI_Controller {
	 public function __construct()
    {
        parent::__construct();
        $this->load->model('authentication_m');

    }


	public function check_user_login(){

		$username = $this->input->post('username');
		$password = $this->input->post('password');
		$result = $this->authentication_m->do_check_user($username,$password);
		//print_r($result);
		$setdata = array(
			'id'  => $result['userid'],
	        'username'  => $result['user_name'],
	        'email'     => $result['user_email'],
	        'level' 	=> $result['level_name']
		);

		$this->session->set_userdata($setdata, TRUE);

		if($this->session->userdata('level') == 'superuser'){
			redirect('/ezecom');
		}else{
			$message = "<div class='alert alert-warning alert-dismissible fade in' role='alert'>
                                    <button type='button' class='close' data-dismiss='alert' aria-label='Close'>
                                    </button>
                                    <strong style='text-shadow: none;'>Incorrent Username or Password! Please Try again...</div>";

            $this->session->set_flashdata('message', $message);
			redirect('/administrator','refresh');
		}


	}

	public function login_user(){
		$data['title'] = "Login";
		$this->load->view('backend/login',$data);
	}

	public function logout_user(){

		$clear = array('username', 'email', 'level');

		$this->session->unset_userdata($clear);
		redirect('/administrator');
	}


	

}
