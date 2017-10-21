<?php

class Live_radio_m extends CI_Model{
    function __construct()
    {
        parent::__construct();
    }

	public function get_all_schedules()
	{
		$cri = array('radio_schedule_is_deleted'=>0);
		$q = $this->db->get_where('tbl_radio_schedule',$cri);
		return $q->result();
	}

	public function get_radio_group()
	{
		$cri = array('radio_group_is_deleted'=>0);
		$q = $this->db->get_where('tbl_radio_group', $cri);
		return $q->result();
	}

	public function get_radio()
	{
		$cri = array('radio_info_deleted'=>0);
		$q = $this->db->get_where('tbl_radio_info', $cri);
		return $q->result();
	}

	public function get_default_radio()
	{
		$cri = array('radio_info_deleted'=>0);
		$this->db->limit('1');
		$q = $this->db->get_where('tbl_radio_info', $cri);
		return $q->row_array();
	}
}
