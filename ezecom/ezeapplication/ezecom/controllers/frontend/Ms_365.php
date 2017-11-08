<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Ms_365 extends CI_Controller {
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
		$this->Office_365();
	}
	public function Office_365(){
		$data['title'] = "Office 365";
		$data['active']= "Office 365";
		$lan = 1;
        $data['feature_content'] = $this->homepage_m->get_feature_content($lan);
		$this->load->view('frontend/ms_365',$data);
	}

}