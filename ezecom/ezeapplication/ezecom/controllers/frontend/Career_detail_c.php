<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Career_detail_c extends CI_Controller {
	 public function __construct()
    {
        parent::__construct();
        $this->load->library('pagination');
        $this->load->library('session');
        $this->load->library('encrypt');
        $this->load->model('frontend/homepage_m');
        $this->load->model('frontend/career_m');
        $this->load->helper(array('form', 'url'));
        date_default_timezone_set("Asia/Bangkok");
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
		//$this->our_company();
	}
	public function career($id){
		/*  replace (-) from url  */
        $title_strrep = strtoupper(str_replace('-', ' ', $id));
		$data['title'] = "Career";
		$data['active'] = " ";
		$lan = $this->session->userdata("language");
		$data['feature_content'] = $this->homepage_m->get_feature_content($lan);
		$data['get_title'] = $this->career_m->get_career_detail($title_strrep);
		$this->load->view('frontend/career_detail',$data);

	}
}
