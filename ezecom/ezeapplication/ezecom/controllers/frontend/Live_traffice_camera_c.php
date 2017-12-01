<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Live_traffice_camera_c extends CI_Controller {
	 public function __construct()
    {
        parent::__construct();
        $this->load->library('pagination');
        $this->load->library('session');
        $this->load->library('encrypt');
        $this->load->helper(array('form', 'url'));
        $this->load->model('frontend/homepage_m');
        $this->load->model('frontend/live_camera_m');
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
		$this->Live_traffice_camera();
	}
	public function Live_traffice_camera(){
		$data['title'] = "Live Traffic Camera";
		$data['active']="Live Traffic Camera";
		$lan = $this->session->userdata("language");
		$data['feature_content'] = $this->homepage_m->get_feature_content($lan);
		$data['get_cameras']= $this->live_camera_m->get_camera_display();
		$this->load->view('frontend/live_traffice_camera_v',$data);

	}
	public function set_session_camera(){

		$id = $this->input->post("id");
		$data = $this->live_camera_m->displayCamera($id);
		$page_session['http'] = $data['http'];
		$page_session['name_camera'] = $data['name'];
        $this->session->set_userdata($page_session);
        echo "setted";

	}
	public function checkGet(){
		//echo $this->session->userdata('http');
		if(empty($this->session->userdata('http'))){
			echo "no_session";
		}else{
			echo $this->session->userdata('http');
		}
	}
	
	public function setPageload(){
		$page_session['http'] = "https://59f8b21ab26e0.streamlock.net//KTCamera/KTCamera.stream/playlist.m3u8";
		$page_session['name_camera'] = "KBAL THNOL";
		$this->session->set_userdata($page_session);
        echo "setted";
	}

}
