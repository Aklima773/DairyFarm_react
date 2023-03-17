<?php

include("db_connection.php");

$data = file_get_contents("php://input");
// echo $data;

$data = json_decode($data);

if (($data->username) && ($data->username != '') && ($data->username) && ($data->username != '') ) {

    // $uid = $data->uid;
    $username = $data->username;
    $email = $data->email;
    $name = $data->name;
    
    // $quantity = $data->quantity;
    $price = $data->price;
    $address = $data->address;

    $result = mysqli_query($db_conn, "SELECT * FROM orders WHERE username = '$username'");



    // if (mysqli_num_rows($result) > 0) {
    //     echo json_encode(["duplicated" => "Try with different Email Address"]);
    // } else {
        $resultInsert = mysqli_query($db_conn, "INSERT INTO orders (username, name,  price, address) VALUES ('$username','$name','$price','$address')");
        if (mysqli_affected_rows($db_conn) > 0) {
            echo json_encode(["success" => "Placed Order Successfully"]);
        }
    }
 else {
    echo json_encode(["empty" => "All Field must be filled"]);
}
