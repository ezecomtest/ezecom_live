<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Set_language_c extends CI_Controller {
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


	public function set_language_session(){

		$id = $this->input->post("id");

		if($id !=""){

			$lang_session['language'] = $this->input->post("id");
	        $this->session->set_userdata($lang_session);
	        echo $this->session->userdata("language");
		}else{
			$lang_session['language'] = 1;
	        $this->session->set_userdata($lang_session);
	        echo $this->session->userdata("language");
		}
		
	}
	
}
