<?php

$host = "localhost";
$db = "userdb";
$username = "root";
$password = "dpayEi1b!";

$mysqli = new mysqli($host,$username,$password,$db);

if ($mysqli->connect_errno) {
    die("Connection error: " . $mysqli->connect_error);
};

return $mysqli;