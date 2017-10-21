<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Set_up_email_c extends CI_Controller {
	 public function __construct()
    {
        parent::__construct();
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
		$this->set_up_email();
	}

	public function set_up_email(){
		$data['title'] = "Set Up Email";
		$data['active'] = " ";
		$this->load->view('frontend/set_up_email_v',$data);
	}
}
