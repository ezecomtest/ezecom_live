<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Career_admin_m extends CI_Model 
{
	public function __construct()
    {
        parent::__construct();
    }
    
    public function get_career(){
	    $cri = array('career_is_deleted'=>0);
	    $this->db->select('*');
	    $this->db->from('tbl_career c');
	    $this->db->join('tbl_languages l','c.career_language_id=l.lang_id','left');
	    $this->db->where($cri);
	    $q = $this->db->get();
	    return $q->result();
    }

	public function insert_career($data)
	{
		$this->db->insert('tbl_career',$data);
		if ($this->db->affected_rows()>0){
			return true;
		}else{
			return false;
		}
    }

	public function get_language()
	{
		$cri = array('lang_is_delete'=>0);
		$q = $this->db->get_where('tbl_languages', $cri);
		return $q->result();
    }

	public function get_career_byID($id)
	{
		$cri = array('career_id'=>$id);
		$q = $this->db->get_where('tbl_career',$cri);
		return $q->row_array();
    }

	public function update_career($data, $cri)
	{
		$this->db->update('tbl_career',$data,$cri);
		if ($this->db->affected_rows()>0){
			return true;
		}else{
			return false;
		}
    }
}