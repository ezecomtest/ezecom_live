<?php
	class Our_services_m extends CI_Model{
		function __construct(){
			parent::__construct();
		}
		
		public function insert_Ezebiz($data){
			$this->db->insert('tbl_customer_signup',$data);
			if ($this->db->affected_rows()>0){
				return true;
			}else{
				return false;
			}
		}
		
		public function insert_ms365($data){
			$this->db->insert('tbl_customer_signup',$data);
			if ($this->db->affected_rows()>0){
				return true;
			}else{
				return false;
			}
		}
		
		public function insert_ddos($data){
			$this->db->insert('tbl_customer_signup',$data);
			if ($this->db->affected_rows()>0){
				return true;
			}else{
				return false;
			}
		}
	}
?>