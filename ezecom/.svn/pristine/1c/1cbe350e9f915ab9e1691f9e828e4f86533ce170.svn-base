<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Eze_media extends CI_Controller {
	 public function __construct()
    {
        parent::__construct();
        $this->load->library('pagination');
        $this->load->library('session');
        $this->load->library('encrypt');
        $this->load->helper(array('form', 'url'));
        date_default_timezone_set("Asia/Bangkok");
        if($this->session->userdata('level') !== 'superuser'){
        	redirect('administrator');
        }
    }

	public function index()
	{
		$this->medai();
	}

	public function media(){
		$data['title'] = "Media";
		$this->load->view('backend/media/media',$data);

	}

}
