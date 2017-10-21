<?php

class Live_camera_m extends CI_Model{
  // can be declaration variable here
    function __construct()
    {
        // Call the Model constructor
        parent::__construct();
    }

    //==== Start location install====
 
	public function get_camera_display(){
        $this->db->select('*');
        $this->db->from('tm_traffic_cam');       
        $this->db->where('status','1');
        $q = $this->db->get();
        return $q->result();
	}
}
?>
