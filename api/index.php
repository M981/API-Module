<?php

@include_once('app/APIFunctions.php');

getAllUsers();


if($_SERVER['REQUEST_METHOD'] == 'POST') {
    header('Content-Type: application/json');
    header('HTTP/1.1 200 Ok');
    echo json_encode($_POST);
    die();
 }

?>

