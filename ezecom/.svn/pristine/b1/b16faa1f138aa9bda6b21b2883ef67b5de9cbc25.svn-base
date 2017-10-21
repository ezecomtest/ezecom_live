<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Eze_user extends CI_Controller {
	public function __construct()
    {
        parent::__construct();

        $this->load->model('backend/user/user_model');
        if($this->session->userdata('level') !== 'superuser'){
        	redirect('administrator');
        }
    }

	public function lists_user(){
		$data['alluser'] = $this->user_model->lists_all_user();
		$data['title'] = "User";
		$this->load->view('backend/users/ezecom_user',$data);
	}

	public function profile_user(){
		$data['title'] = "Profile";
		$this->load->view('backend/users/ezecom_user_profile',$data);
	}


	public function add_user(){
		$data['title'] = "Add User";
		$data['level'] = $this->user_model->get_level_user();
		$this->load->view('backend/users/ezecom_user_add',$data);
	}

	public function delete_user($id){
		$result = $this->user_model->do_published_user($id);
		if($result == true){
			$message = "<div class='alert alert-info alert-dismissible fade in' role='alert'>
                                    <button type='button' class='close' data-dismiss='alert' aria-label='Close'><span aria-hidden='true'>×</span>
                                    </button>
                                    <strong>User Delete Success!</strong> </div>";

            $this->session->set_flashdata('message', $message);
			redirect('/listuser');

		}else{
			$message = "<div class='alert alert-warning alert-dismissible fade in' role='alert'>
                                    <button type='button' class='close' data-dismiss='alert' aria-label='Close'><span aria-hidden='true'>×</span>
                                    </button>
                                    <strong>A Bit Problem...! Deleting User Not Affected.</div>";

            $this->session->set_flashdata('message', $message);
			redirect('/listuser');
		}

	}

	public function saving_user(){
		$user_name = $this->input->post('user_name');
		$user_password = $this->input->post('user_password');
		$user_level = $this->input->post('user_level');
		$user_email = $this->input->post('user_email');
		$user_date = $this->input->post('user_date');
		
		$salt = "cV0puOlx$@@*&";
		$hashed = md5($salt.$user_password);

		$data = array('user_name'=>$user_name,'user_password'=>$hashed,'user_level'=>$user_level,'user_email'=>$user_email,'user_date'=>$user_date);

		$result = $this->user_model->do_saving_user($data);
		if($result == true){
			$message = "<div class='alert alert-info alert-dismissible fade in' role='alert'>
                                    <button type='button' class='close' data-dismiss='alert' aria-label='Close'><span aria-hidden='true'>×</span>
                                    </button>
                                    <strong>User Add Success!</strong> </div>";

            $this->session->set_flashdata('message', $message);
			redirect('/adduser');

		}else{
			$message = "<div class='alert alert-warning alert-dismissible fade in' role='alert'>
                                    <button type='button' class='close' data-dismiss='alert' aria-label='Close'><span aria-hidden='true'>×</span>
                                    </button>
                                    <strong>A Bit Problem...! Adding User Not Affected.</div>";

            $this->session->set_flashdata('message', $message);
			redirect('/adduser');
		}


	}

	public function edit_user($id){
		$data['edituser'] = $this->user_model->do_edit_user($id);
		
		$data['title'] = "Edit User";
		$this->load->view('backend/users/ezecom_user_edit',$data);
	}

	public function update_user(){
		$id = $this->input->post('id');
		$password = $this->input->post('password');
		$conpassword = $this->input->post('conpassword');
		$user_modified_date = $this->input->post('user_modified_date');

		if($password == $conpassword){
			$salt = "cV0puOlx$@@*&";
			$hashed = md5($salt.$password);
			$result = $this->user_model->do_update_password_user($id,$hashed,$user_modified_date);
			if($result == true){
				$message = "<div class='alert alert-info alert-dismissible fade in' role='alert'>
	                                    <button type='button' class='close' data-dismiss='alert' aria-label='Close'><span aria-hidden='true'>×</span>
	                                    </button>
	                                    <strong>User Update Success!</strong> </div>";

	            $this->session->set_flashdata('message', $message);
				redirect('/edituser/'.$id);

			}else{
				$message = "<div class='alert alert-warning alert-dismissible fade in' role='alert'>
	                                    <button type='button' class='close' data-dismiss='alert' aria-label='Close'><span aria-hidden='true'>×</span>
	                                    </button>
	                                    <strong>A Bit Problem...! Updating User Not Affected.</div>";

	            $this->session->set_flashdata('message', $message);
				redirect('/edituser/'.$id);
			}
			
		}else{
			$message = "<div class='alert alert-warning alert-dismissible fade in' role='alert'>
	                                    <button type='button' class='close' data-dismiss='alert' aria-label='Close'><span aria-hidden='true'>×</span>
	                                    </button>
	                                    <strong>Password not matching.</div>";

	            $this->session->set_flashdata('message', $message);
				redirect('/edituser/'.$id);
		}

		

	}
}
