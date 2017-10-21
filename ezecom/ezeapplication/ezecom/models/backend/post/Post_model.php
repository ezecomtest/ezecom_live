<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Post_model extends CI_Model {
	 public function __construct()
    {
        parent::__construct();

    }


    public function list_all_content(){
    	$this->db->select('*');
		$this->db->from('tbl_content');
		$this->db->join('tbl_categories', 'tbl_content.content_categories_id = tbl_categories.categoriesid');
		$this->db->join('tbl_languages', 'tbl_content.content_language_id = tbl_languages.lang_id');

        $this->db->order_by('tbl_content.contentid', 'desc');
		$query = $this->db->get();
		return $query->result();
    }

    public function do_delete_content($id){
    	$delete_img = $this->do_delete_content_image_feature($id);
    	unlink('upload/post/'.$delete_img['content_image_feature']);
    	$this->db->where('contentid', $id);
   		$this->db->delete('tbl_content');
   		$result = $this->db->affected_rows();
   		return $result;
    }

    public function published_content($pub,$id){
        $alldata = array('content_published'=> $pub);
        $this->db->where('contentid',$id);
        $this->db->update('tbl_content', $alldata);
        $result = $this->db->affected_rows();
        return $result;
    }

     public function feature_content($feature,$id){
        $alldata = array('content_feature'=> $feature);
        $this->db->where('contentid',$id);
        $this->db->update('tbl_content', $alldata);
        $result = $this->db->affected_rows();
        return $result;
    }


    public function get_language(){
    	$query = $this->db->get('tbl_languages');
    	return $query->result();
    }

    public function get_categories(){
    	$query = $this->db->get('tbl_categories');
    	return $query->result();
    }

    public function do_saving_content($alldata){
    	$this->db->insert('tbl_content',$alldata);
    	$result = $this->db->affected_rows();
    	return $result;
    }

    public function do_edit_content($id){
    	$query = $this->db->get_where('tbl_content',array('contentid'=>$id));
    	return $query->row_array();
    }

    public function do_update_content($alldata,$id,$img){
    	if($img == TRUE){
    		$delete_img = $this->do_delete_content_image_feature($id);
    		unlink('/elFindermaster/files/post/'.$delete_img['content_image_feature']);
    	}
    	
    	$this->db->where('contentid', $id);
		$this->db->update('tbl_content', $alldata);
		$result = $this->db->affected_rows();
		return $result;
    }

    public function do_delete_content_image_feature($id){
    	$query = $this->db->get_where('tbl_content',array('contentid'=>$id));
    	return $query->row_array();
    }

    
}
