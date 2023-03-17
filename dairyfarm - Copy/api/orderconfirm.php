<?php 
include("db_connection.php");

$data = file_get_contents("php://input");

$data = json_decode($data);

$id = $data->id;

$result = mysqli_query($db_conn,"DELETE FROM orders WHERE id='$id'");

if($result){
    echo json_encode(['msg'=>"Order Confirm Successfully"]);
}

// if($result>0){
//     $confirm = mysqli_query($db_conn,"INSERT INTO confirmorder (uid, username, name, quantity, price, address) VALUES ('$uid','$username','$name','$quantity','$price','$address')");

// }