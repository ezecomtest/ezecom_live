<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Authentication_m extends CI_Model
{
	public function __construct()
	{
		parent::__construct();
	}

	public function do_check_user($username,$password)
	{
		$salt = "cV0puOlx$@@*&";
		$hashed = md5($salt.$password);

		$query = $this->db->query("SELECT *FROM tbl_user INNER JOIN tbl_user_level ON tbl_user.user_level_id = tbl_user_level.levelid WHERE tbl_user_level.level_name = 'superuser' AND tbl_user.user_published = 1 AND tbl_user_level.level_published = 1 AND tbl_user.user_name = '$username' AND tbl_user.user_password = '$hashed' ");
		return $query->row_array();
	}

	
}