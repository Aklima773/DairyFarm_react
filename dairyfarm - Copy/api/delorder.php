<?php 
include("db_connection.php");

$data = file_get_contents("php://input");

$data = json_decode($data);

$id = $data->id;

$result = mysqli_query($db_conn,"DELETE FROM orders WHERE id='$id'");

if($result){
    echo json_encode(['msg'=>"Successfully Deleted Product"]);
}