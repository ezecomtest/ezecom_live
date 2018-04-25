<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Ezebiz extends CI_Controller {
	 public function __construct()
    {
        parent::__construct();
		$this->load->library('session');
        $this->load->library('encrypt');
		$this->load->model('frontend/homepage_m');
		$this->load->model('frontend/our_services_m');
		$this->load->helper(array('form', 'url'));
        date_default_timezone_set("Asia/Bangkok");
        
    }
	public function index(){
		$this->ezebiz();
	}
	public function ezebiz(){
		$data['title'] = "EzeBiz";
		$data['active']= "EzeBiz";
		$lan = 1;
        $data['feature_content'] = $this->homepage_m->get_feature_content($lan);
		$this->load->view('frontend/ezebiz',$data);
	}
	public function ezebizSaving(){
		$name = $this->input->post("name");
		$mobile = $this->input->post("mobile");
		$signup_date = date("Y/m/d");
		$data = array(
			'cust_name'=>$name,
			'mobile'=>$mobile,
			'signup_date'=>$signup_date,
			'pro_id'=>'1'
		);
        $this->our_services_m->insert_Ezebiz($data);
	}

}