<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Slide_model extends CI_Model {
	 public function __construct()
    {
        parent::__construct();

    }


    public function list_all_slide(){
    	$this->db->select('*');
		$this->db->from('tbl_slider');
		$this->db->join('tbl_languages', 'tbl_slider.slide_language_id = tbl_languages.lang_id');
        $this->db->order_by("order_by", "ASC");
		$query = $this->db->get();
		return $query->result();
    }

    public function do_delete_slide($id){
    	$delete_img = $this->do_delete_slide_image_feature($id);
    	unlink('upload/slides/'.$delete_img['slide_img']);
    	$this->db->where('slideid', $id);
   		$this->db->delete('tbl_slider');
   		$result = $this->db->affected_rows();
   		return $result;
    }

    public function get_language(){
    	$query = $this->db->get('tbl_languages');
    	return $query->result();
    }

    public function do_saving_slide($alldata){
    	$this->db->insert('tbl_slider',$alldata);
    	$result = $this->db->affected_rows();
    	return $result;
    }

    public function do_slide_published($pub,$id){
        $alldata = array('slide_published' => $pub);
        $this->db->where('slideid', $id);
        $this->db->update('tbl_slider', $alldata);
        $result = $this->db->affected_rows();
        return $result;
    }

    public function do_edit_slide($id){
    	$query = $this->db->get_where('tbl_slider',array('slideid'=>$id));
    	return $query->row_array();
    }

    public function do_update_slide($alldata,$id,$img){
    	if($img == TRUE){
    		$delete_img = $this->do_delete_slide_image_feature($id);
    		unlink('/elFindermaster/files/slides/'.$delete_img['slide_img']);
    	}
    	
    	$this->db->where('slideid', $id);
		$this->db->update('tbl_slider', $alldata);
		$result = $this->db->affected_rows();
		return $result;
    }

    public function do_delete_slide_image_feature($id){
    	$query = $this->db->get_where('tbl_slider',array('slideid'=>$id));
    	return $query->row_array();
    }

    
}
