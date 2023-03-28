<?php

$host = "hhdatabase.cp0qkxfdo1rp.us-west-1.rds.amazonaws.com";
$db = "happyhour";
$username = "admin";
$password = "Happyhour1";
// $password = "mysql";

$mysqli = new mysqli($host,$username,$password,$db);

if ($mysqli->connect_errno) {
    die("Connection error: " . $mysqli->connect_error);
};

return $mysqli;
