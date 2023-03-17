<?php

include("db_connection.php");

$data = file_get_contents("php://input");
// echo $data;

$data = json_decode($data);

if (($data->username) && ($data->username != '')) {

    $username = $data->username;
    $email = $data->email;
    $address = $data->address;
    $password = $data->password;

    $result = mysqli_query($db_conn, "SELECT * FROM userlogin WHERE email = '$email'");



    if (mysqli_num_rows($result) > 0) {
        echo json_encode(["duplicated" => "Try with different Email Address"]);
    } else {
        $resultInsert = mysqli_query($db_conn, "INSERT INTO userlogin (username, email,address, password) VALUES ('$username','$email','$address','$password')");
        if (mysqli_affected_rows($db_conn) > 0) {
            echo json_encode(["success" => "Registration Completed."]);
        }
    }
} else {
    echo json_encode(["empty" => "All Field must be filled"]);
}
