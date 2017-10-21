<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Eze_category extends CI_Controller {
	 public function __construct()
    {
        parent::__construct();
        $this->load->library('pagination');
        $this->load->library('session');
        $this->load->library('encrypt');
        $this->load->helper(array('form', 'url'));
        $this->load->library('form_validation');
        $this->load->model("backend/eze_category_model");
        date_default_timezone_set("Asia/Bangkok");
        if($this->session->userdata('level') !== 'superuser'){
         	redirect('administrator');
        }
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
		//$this->dashboard();
	}

	public function add_category(){
		$data['title'] = "Dashboard";
		$this->load->view('backend/category/add_category',$data);

	}

	public function perform_add_category(){
		$this->form_validation->set_rules('category_name', 'Category Name', 'required');
		$this->form_validation->set_rules('description', 'Description', 'required');
		if ($this->form_validation->run() == FALSE)
            {
                $this->add_category();
            }
        else
            {
                $data = array(
                	'categories_name' => $this->input->post("category_name"),
                	'categories_date' => date('Y-m-d'),
                	'description' => $this->input->post("description"),
                	);
                $success = $this->eze_category_model->insert_category($data);

                if($success){
                	$this->session->set_flashdata('sms', '<div class="alert alert-success alert-dismissible fade in">You have successfully addded category!</div>');
                	redirect("category");
                }else{
                	$this->session->set_flashdata('sms', '<div class="alert alert-danger alert-dismissible fade in">You cannot add this category please try again!</div>');
                	redirect("category");
                }
            }
	}

	public function category_list(){
		$data['title'] = "Category";
		$data['category'] = $this->eze_category_model->get_category();
		$this->load->view('backend/category/category',$data);
	}

	public function edit_category($id){
		//echo "testes";
		$data['title'] = "Edit Category";
		$data['get_category'] = $this->eze_category_model->get_catgory_detail($id);
		$this->load->view('backend/category/edit_category',$data);
	}

	public function perform_update_cat(){
		$this->form_validation->set_rules('category_name', 'Category Name', 'required');
		$this->form_validation->set_rules('description', 'Description', 'required');
		if ($this->form_validation->run() == FALSE)
            {
                $this->add_category();
            }
        else
            {
                $data = array(
                	'categories_name' => $this->input->post("category_name"),
                	'categories_modify_date' => date('Y-m-d'),
                	'description' => $this->input->post("description"),
                	);

                $id = $this->input->post("id");
                $success = $this->eze_category_model->update_category($data,$id);

                if($success){
                	$this->session->set_flashdata('sms', '<div class="alert alert-success alert-dismissible fade in">You have successfully updated category!</div>');
                	redirect("category");
                }else{
                	$this->session->set_flashdata('sms', '<div class="alert alert-danger alert-dismissible fade in">You cannot changed this category please try again!</div>');
                	redirect("category");
                }
            }
	}

	public function delete_category($id){
		$success = $this->eze_category_model->delete_category($id);
		if($success){
			$this->session->set_flashdata('sms', '<div class="alert alert-success alert-dismissible fade in">You have successfully deleted category!</div>');
            redirect("category");
		}else{
			$this->session->set_flashdata('sms', '<div class="alert alert-danger alert-dismissible fade in">You cannot delete this category please try again!</div>');
            redirect("category");
		}
	}


}
