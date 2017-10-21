<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Language_admin_m extends CI_Model
{
	public function __construct()
    {
        parent::__construct();
    }

	public function get_language()
	{
		$cri = array('lang_is_delete'=>0);
		$q = $this->db->get_where('tbl_languages', $cri);
		return $q->result();
	}

	public function insert_language($data)
	{
		$this->db->insert('tbl_languages', $data);
		if ($this->db->affected_rows()>0){
			return true;
		}else{
			return false;
		}
	}

	public function get_language_byID($id)
	{
		$cri = array('lang_id'=>$id);
		$q = $this->db->get_where('tbl_languages', $cri);
		return $q->row_array();
	}

	public function update_language($data,$cri)
	{
		$this->db->update('tbl_languages', $data,$cri);
		if ($this->db->affected_rows()>0){
			return true;
		}else{
			return false;
		}
	}
}