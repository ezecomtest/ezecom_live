<?php

class Homepage_m extends CI_Model{
  // can be declaration variable here
    function __construct()
    {
        // Call the Model constructor
        parent::__construct();
    }

    //==== Start location install====
 
	// public function get_homepage_slider1($sessionid){
 //        $sql = $this->db->query("SELECT tbl_slider.slide_title,tbl_slider.slide_img,tbl_slider.slide_language_id,tbl_languages.lang_title,tbl_languages.lang_id,tbl_slider.slide_published,tbl_slider.slide_description,tbl_slider.slideid FROM tbl_slider INNER JOIN tbl_languages ON tbl_slider.slide_language_id = tbl_languages.lang_id where tbl_slider.slide_published = 1 AND tbl_languages.lang_id = $sessionid");
 //        return $sql->result();
	// }

    public function get_homepage_slider($sessionid){
        $this->db->select("*")->from("tbl_slider");
        $this->db->join("tbl_languages","tbl_slider.slide_language_id = tbl_languages.lang_id");
        $this->db->where("tbl_slider.slide_published",1);
        $this->db->where("tbl_languages.lang_id",$sessionid);
        $this->db->order_by("order_by", "ASC");
		$this->db->limit('5');
        $sql = $this->db->get();
        return $sql->result();
    }

    public function get_feature_content($lan){
		$this->db->select('content_title');
		$this->db->from('tbl_content');
		$this->db->where('content_published',1);
		$this->db->where('content_feature',1);
		$this->db->where('content_language_id',$lan);
		$this->db->order_by('contentid', 'DESC');
		$this->db->limit('3');
		$sql = $this->db->get();
        return $sql->result();
    }
	
	public function insert_help_me_choose($data)
	{
		$this->db->insert('help_me_choose',$data);
		if ($this->db->affected_rows()>0){
			return true;
		}else{
			return false;
		}
    }
	
	public function insert_signme_up($data){
		$this->db->insert('sign_me_up',$data);
		if ($this->db->affected_rows()>0){
			return true;
		}else{
			return false;
		}
	}
}
?>
