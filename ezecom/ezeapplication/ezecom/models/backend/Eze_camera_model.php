<?php

class Eze_camera_model extends CI_Model{
 
    function __construct()
    {
        parent::__construct();
    }

    public function get_live_camera(){

        $sql = $this->db->where("publish",1)->order_by("traffic_cam_id","desc")->get("tm_traffic_cam");
        return $sql->result();
    }

    public function set_status($data,$id){
        $name = $this->db->select("name")->from("tm_traffic_cam")->where("traffic_cam_id",$id)->get();
        $sql = $this->db->where("traffic_cam_id",$id)->update("tm_traffic_cam",$data);
       if($sql){
        return $name->row_array();
       }else{
        return false;
       }

    }

    public function get_camera_detail($id){
        $sql = $this->db->where("traffic_cam_id",$id)->get("tm_traffic_cam");
        return $sql->row_array();
    }

    public function insert_camera($data){
        $sql = $this->db->insert("tm_traffic_cam",$data);
        if($sql){
            return true;
        }else{
            return false;
        }
    }

    public function get_camera_edit($id){
        $sql = $this->db->where("traffic_cam_id",$id)->get("tm_traffic_cam");
        return $sql->row_array();
    }

    public function update_camera($data,$id){

        $sql = $this->db->where("traffic_cam_id",$id)->update("tm_traffic_cam",$data);
           if($sql){
            return true;
           }else{
            return false;
           }
    }

    public function delete_camera($id){
       $data = array(
        'publish' => 0
        );
       $sql = $this->db->where("traffic_cam_id",$id)->update("tm_traffic_cam",$data);
           if($sql){
            return true;
           }else{
            return false;
           }
    }

}
?>
