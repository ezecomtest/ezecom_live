<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Live_radio_c extends CI_Controller {
	 public function __construct()
    {
        parent::__construct();
        $this->load->library('pagination');
        $this->load->library('session');
        $this->load->library('encrypt');
        $this->load->model('frontend/homepage_m');
        $this->load->model('frontend/live_radio_m');
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
		$this->live_radio();
	}
	public function live_radio()
	{
		$data['active']='Live Radio';
		$lan = $this->session->userdata("language");
		$data['feature_content'] = $this->homepage_m->get_feature_content($lan);
		$data['schedules']=$this->live_radio_m->get_all_schedules();
		$data['radio_group']=$this->live_radio_m->get_radio_group();
		$data['radio']=$this->live_radio_m->get_radio();
		$data['default_radio']=$this->live_radio_m->get_default_radio();
		$this->load->view('frontend/live_radio_v',$data);

	}
}
