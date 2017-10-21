<?php
session_start();
ob_start();
$hasDB = false;
$server = 'localhost';
$user = 'ezecom';
$pass = 'ezecom2014';
$db = 'ezecom_live';
$mySQL = new mysqli($server,$user,$pass,$db);
mysqli_set_charset($mySQL,'utf8');
if ($mySQL->connect_error)
{
    die('Connect Error (' . $mySQL->connect_errno . ') '. $mySQL->connect_error);
}
?>