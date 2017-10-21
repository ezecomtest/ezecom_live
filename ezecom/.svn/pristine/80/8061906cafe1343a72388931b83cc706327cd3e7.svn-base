<?php

class Eze_category_model extends CI_Model{
 
    function __construct()
    {
        parent::__construct();
    }

    public function insert_category($data){
        $sql = $this->db->insert("tbl_categories",$data);
        if($sql){
            return true;
        }else{
            return false;
        }
    }

    public function get_category(){
        $sql = $this->db->where("categories_published",1)->order_by("categoriesid","desc")->get("tbl_categories");
        return $sql->result();
    }

    public function get_catgory_detail($id){
        $sql = $this->db->where("categories_published",1)->where("categoriesid",$id)->order_by("categoriesid","desc")->get("tbl_categories");
        return $sql->row_array();
    }

    public function update_category($data,$id){
        $sql = $this->db->where("categoriesid",$id)->update("tbl_categories",$data);
        if($sql){
            return true;
        }else{
            return false;
        }
    }

    public function delete_category($id){
        $data = array(
            'categories_published' => 0
            );
        $this->db->where("categoriesid",$id);
        $sql = $this->db->update("tbl_categories",$data);
        if($sql){
            return true;
        }else{
            return false;
        }   
    }

}
?>
