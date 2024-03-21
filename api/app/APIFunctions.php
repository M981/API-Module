<?php

@include_once('Database.php');
    
function getAllUsers()
{
    $sql = "SELECT * FROM  `users`";
    Database::query($sql);
    $rows = Database::getAll();
    header("HTTP/1.1 200 OK");
    header('Content-Type: application/json');
    echo json_encode($rows);
}

