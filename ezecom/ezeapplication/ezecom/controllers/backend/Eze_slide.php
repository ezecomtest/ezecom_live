<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Eze_slide extends CI_Controller {
	 public function __construct()
    {
        parent::__construct();
        $this->load->model('backend/slide/slide_model');
        $this->load->library('ckeditor');
        $this->load->library('ckfinder');
        if($this->session->userdata('level') !== 'superuser'){
        	redirect('administrator');
        }
    }


	public function lists_slide(){
		$data['allslide'] = $this->slide_model->list_all_slide();
		$data['title'] = "All SLIDE";
		$this->load->view('backend/slide/ezecom_slide',$data);
	}

	public function delete_slide($id){
		$result = $this->slide_model->do_delete_slide($id);
		if($result == true){
			$message = "<div class='alert alert-info alert-dismissible fade in' role='alert'>
                                    <button type='button' class='close' data-dismiss='alert' aria-label='Close'><span aria-hidden='true'>×</span>
                                    </button>
                                    <strong>Slide Delete Success!</strong> </div>";

            $this->session->set_flashdata('message', $message);
			redirect('/slidelist');

		}else{
			$message = "<div class='alert alert-warning alert-dismissible fade in' role='alert'>
                                    <button type='button' class='close' data-dismiss='alert' aria-label='Close'><span aria-hidden='true'>×</span>
                                    </button>
                                    <strong>A Bit Problem...! Deleting Slide Not Affected.</div>";

            $this->session->set_flashdata('message', $message);
			redirect('/slidelist');
		}

	}

	public function add_slide(){
		$this->ckeditor->basePath = base_url().'assets/ckeditor/';
	    $this->ckeditor->config['toolbar'] = array(
	                array( 'Source', '-', 'Bold', 'Italic', 'Underline', '-','Cut','Copy','Paste','PasteText','PasteFromWord','-','Undo','Redo','-','NumberedList','BulletedList','Image','JustifyLeft', 'JustifyCenter', 'JustifyRight', 'JustifyBlock','Link', 'Unlink'));
	    $this->ckeditor->config['language'] = 'en';
	    $this->ckeditor->config['width'] = '100%;';
	    $this->ckeditor->config['height'] = '450px';

		$data['language'] = $this->slide_model->get_language();

		$data['title'] = "ADD SLIDE";
		$this->load->view('backend/slide/ezecom_slide_add',$data);
	}

	public function published_slide($pub,$id){
		$result = $this->slide_model->do_slide_published($pub,$id);

                        if($result == true){
							$message = "<div class='alert alert-info alert-dismissible fade in' role='alert'>
				                                    <button type='button' class='close' data-dismiss='alert' aria-label='Close'><span aria-hidden='true'>×</span>
				                                    </button>
				                                    <strong>Slide Action Success!</strong> </div>";

				            $this->session->set_flashdata('message', $message);
							redirect('/slidelist');

						}else{
							$message = "<div class='alert alert-warning alert-dismissible fade in' role='alert'>
				                                    <button type='button' class='close' data-dismiss='alert' aria-label='Close'><span aria-hidden='true'>×</span>
				                                    </button>
				                                    <strong>A Bit Problem...! Action Slide Not Affected.</div>";

				            $this->session->set_flashdata('message', $message);
							redirect('/slidelist');
						}
	}

	public function saving_slide(){
				
				$config['upload_path']          = './elFindermaster/files/slides/';
                $config['allowed_types']        = 'gif|jpg|png';
                $config['max_size']             = 0;
                $config['encrypt_name']         = TRUE;


                $this->load->library('upload', $config);

                if ( ! $this->upload->do_upload('slide_img'))
                {
                        $error = array('error' => $this->upload->display_errors());

                       	print_r($error);
                       }
                else
                {
                        $data = $this->upload->data();
                        
                        $alldata = array('slide_title'=>$this->input->post('slide_title'),'slide_img'=>$data['file_name'],'slide_language_id'=>$this->input->post('slide_language_id'),'slide_date'=>$this->input->post('slide_date'),'slide_description'=>$this->input->post('slide_description'));
                        $result = $this->slide_model->do_saving_slide($alldata);

                        if($result == true){
							$message = "<div class='alert alert-info alert-dismissible fade in' role='alert'>
				                                    <button type='button' class='close' data-dismiss='alert' aria-label='Close'><span aria-hidden='true'>×</span>
				                                    </button>
				                                    <strong>Slide Adding Success!</strong> </div>";

				            $this->session->set_flashdata('message', $message);
							redirect('/addslide');

						}else{
							$message = "<div class='alert alert-warning alert-dismissible fade in' role='alert'>
				                                    <button type='button' class='close' data-dismiss='alert' aria-label='Close'><span aria-hidden='true'>×</span>
				                                    </button>
				                                    <strong>A Bit Problem...! Adding Slide Not Affected.</div>";

				            $this->session->set_flashdata('message', $message);
							redirect('/addslide');
						}

                }

        


	}

	public function edit_slide($id){
		$this->ckeditor->basePath = base_url().'assets/ckeditor/';
	    $this->ckeditor->config['toolbar'] = array(
	                array( 'Source', '-', 'Bold', 'Italic', 'Underline', '-','Cut','Copy','Paste','PasteText','PasteFromWord','-','Undo','Redo','-','NumberedList','BulletedList','Image','JustifyLeft', 'JustifyCenter', 'JustifyRight', 'JustifyBlock','Link', 'Unlink'));
	    $this->ckeditor->config['language'] = 'en';
	    $this->ckeditor->config['width'] = '100%;';
	    $this->ckeditor->config['height'] = '450px';
		$data['editslide'] = $this->slide_model->do_edit_slide($id);
		$data['language'] = $this->slide_model->get_language();
		$data['title'] = "EDIT POST";
		$this->load->view('backend/slide/ezecom_slide_edit',$data);
	}

	public function update_slide(){
		$id = $this->input->post('slideid');

		if (empty($_FILES['slide_img']['name'])) {
					$img = FALSE;
					$alldata = array('slide_title'=>$this->input->post('slide_title'),'slide_language_id'=>$this->input->post('slide_language_id'),'slide_description'=>$this->input->post('slide_description'),'slide_modified_date'=>$this->input->post('slide_modified_date'),'order_by'=>$this->input->post('order_by'));
                        $result = $this->slide_model->do_update_slide($alldata,$id,$img);

                        if($result == true){
							$message = "<div class='alert alert-info alert-dismissible fade in' role='alert'>
				                                    <button type='button' class='close' data-dismiss='alert' aria-label='Close'><span aria-hidden='true'>×</span>
				                                    </button>
				                                    <strong>Slide Update Success!</strong> </div>";

				            $this->session->set_flashdata('message', $message);
							redirect('/editslide/'.$id);

						}else{
							$message = "<div class='alert alert-warning alert-dismissible fade in' role='alert'>
				                                    <button type='button' class='close' data-dismiss='alert' aria-label='Close'><span aria-hidden='true'>×</span>
				                                    </button>
				                                    <strong>A Bit Problem...! Update Slide Not Affected.</div>";

				            $this->session->set_flashdata('message', $message);
							redirect('/editslide/'.$id);
						}

		}else{
				$config['upload_path']          = './elFindermaster/files/slides/';
                $config['allowed_types']        = 'gif|jpg|png';
                $config['max_size']             = 0;
                $config['encrypt_name']         = TRUE;


                $this->load->library('upload', $config);

                if ( ! $this->upload->do_upload('slide_img'))
                {
                        $error = array('error' => $this->upload->display_errors());

                       	print_r($error);
                       }
                else
                {
                        $data = $this->upload->data();
                        $img = TRUE;
                        $alldata = array('slide_title'=>$this->input->post('slide_title'),'slide_img'=>$data['file_name'],'slide_language_id'=>$this->input->post('slide_language_id'),'slide_description'=>$this->input->post('slide_description'),'slide_modified_date'=>$this->input->post('slide_modified_date'));

                        
                        $result = $this->slide_model->do_update_slide($alldata,$id,$img);

                        if($result == true){
							$message = "<div class='alert alert-info alert-dismissible fade in' role='alert'>
				                                    <button type='button' class='close' data-dismiss='alert' aria-label='Close'><span aria-hidden='true'>×</span>
				                                    </button>
				                                    <strong>Slide Update Success!</strong> </div>";

				            $this->session->set_flashdata('message', $message);
							redirect('/editslide/'.$id);

						}else{
							$message = "<div class='alert alert-warning alert-dismissible fade in' role='alert'>
				                                    <button type='button' class='close' data-dismiss='alert' aria-label='Close'><span aria-hidden='true'>×</span>
				                                    </button>
				                                    <strong>A Bit Problem...! Update Slide Not Affected.</div>";

				            $this->session->set_flashdata('message', $message);
							redirect('/editslide/'.$id);
						}

                }

		}
	}




}
