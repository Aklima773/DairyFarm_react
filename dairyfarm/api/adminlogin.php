<?php
include('db_connection.php');

$data = file_get_contents("php://input");

$data =  json_decode($data);

// print_r($data);

if (isset($data->email) && ($data->email != '')) {
    //echo json_encode($data->email);
    $email = $data->email;
    $password = $data->password;
    // $fullname= $data->fullname;

    $result = mysqli_query($db_conn, "SELECT * FROM adminlogin WHERE email='$email' AND password ='$password'");

    // echo mysqli_num_rows($result);


    $row = mysqli_fetch_assoc($result);


    if (mysqli_num_rows($result) > 0) {
        //echo "Yes";
        echo json_encode(["success" => "User exist", "user" => $row]);
    } else {
        echo json_encode(["error" => "User doesnt exist"]);
    }
}

