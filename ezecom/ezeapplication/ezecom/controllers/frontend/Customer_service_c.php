<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Customer_service_c extends CI_Controller {
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
		$this->customer_services();
	}

	public function customer_services(){
		if($this->session->userdata("language")==1){
		$data['title'] = "Customer Services";
		$data['active'] = "Customer Service";
		$lan = $this->session->userdata("language");
		$data['feature_content'] = $this->homepage_m->get_feature_content($lan);
		$this->load->view('frontend/customer_service_v',$data);
		}
		if($this->session->userdata("language")==2){
		$data['title'] = "សេវាអតិថិជន";
		$data['active'] = "Customer Service";
		$lan = $this->session->userdata("language");
		$data['feature_content'] = $this->homepage_m->get_feature_content($lan);
		$this->load->view('frontend/customer_service_kh_v ',$data);
		}
		if($this->session->userdata("language")==3){
		$data['title'] = "Customer Services";
		$data['active'] = "Customer Service";
		$lan = $this->session->userdata("language");
		$data['feature_content'] = $this->homepage_m->get_feature_content($lan);
		$this->load->view('frontend/customer_service_ch_v',$data);
		}
	}
}
