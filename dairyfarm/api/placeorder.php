<?php
include("db_connection.php");

$data = json_decode(file_get_contents("php://input"));

if (
    isset($data->id)
    && isset($data->username)
    // && isset($data->email)
    && isset($data->name)
    // && isset($data->quantity)
    && isset($data->price)
    // && isset($data->address)
    && !empty(trim($data->id))
    && !empty(trim($data->username))
    // && !empty(trim($data->email))
    && !empty(trim($data->name))
    // && !empty(trim($data->quantity))
    && !empty(trim($data->price))
    // && !empty(trim($data->address))
) {
    $id = mysqli_real_escape_string($db_conn, trim($data->id));
    $username = mysqli_real_escape_string($db_conn, trim($data->username));
    // $email = mysqli_real_escape_string($db_conn, trim($data->email));
    $name = mysqli_real_escape_string($db_conn, trim($data->name));
    // $quantity = mysqli_real_escape_string($db_conn, trim($data->quantity));
    $price = mysqli_real_escape_string($db_conn, trim($data->price));
    // $address = mysqli_real_escape_string($db_conn, trim($data->address));

    $add = mysqli_query($db_conn, "INSERT orders set username='$username',  name='$name',  price='$price',  WHERE id='$id'");

    if ($add) {
        echo json_encode(["success" => true, "msg"=>"Order Placed Successfully"]);
        return;
    } else {
        echo json_encode(["success" => false, "msg" => "Server Problem. Please Try Again"]);
        return;
    }
}
