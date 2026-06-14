<?php

session_start();

$host = "localhost";
$user = "root";
$pass = "";
$db   = "accounts";

$conn = new mysqli($host,$user,$pass,$db);

if($conn->connect_error){
    die("Datenbankfehler");
}
