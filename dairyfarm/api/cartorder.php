<?php

include("db_connection.php");

$data = file_get_contents("php://input");

$data = json_decode($data);

if (isset($data->useremail) && ($data->useremail != " ")) {
    $username = $data->username;
    $useremail = $data->useremail;
    
   
    $pname = $data->pname;
    $pprice = $data->pprice;
    $quantity=$data->quantity;
  

    $totalprice = $data->totalprice;
   

    $result = mysqli_query($db_conn, "INSERT INTO orders (username, useremail, pname,  pprice,quantity, totalprice) VALUES ('$username','$useremail', '$pname',  '$pprice','$quantity', $totalprice)");

    if (mysqli_affected_rows($db_conn) > 0) {
        echo json_encode(["msg" => "Successfully Order Placed"]);
    } else {
        echo json_encode(["msg" => "There Have Some Error"]);
    }
}

