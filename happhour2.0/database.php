<?php

$host = "localhost";
$db = "happyhour";
$username = "root";
$password = "Happy1";

$mysqli = new mysqli($host,$username,$password,$db);

if ($mysqli->connect_errno) {
    die("Connection error: " . $mysqli->connect_error);
};

return $mysqli;