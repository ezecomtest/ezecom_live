<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Home extends CI_Controller {
	 public function __construct()
    {
        parent::__construct();
        $this->load->library('pagination');
        $this->load->library('session');
        $this->load->library('encrypt');

        $this->load->model('frontend/homepage_m');
        $this->load->helper(array('form', 'url'));
        date_default_timezone_set("Asia/Bangkok");
    }

	public function index()
	{
		
		$this->home();
	}
	public function home(){
		$data['title'] = "EZECOM";
		$sessionid = 1;
		$data['get_slider'] = $this->homepage_m->get_homepage_slider($sessionid);
		$this->load->view('frontend/homepage',$data);

	}

	
}
