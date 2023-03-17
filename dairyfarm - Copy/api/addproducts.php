<?php

include("db_connection.php");

$data = file_get_contents("php://input");

$data = json_decode($data);

if (isset($data->pname) && ($data->pname != " ")) {
    $name = $data->pname;
    $details = $data->pdetails;
    $price = $data->pprice;
    $image = $data->photo;

    $result = mysqli_query($db_conn, "INSERT INTO allproducts (pname, pdetails, pprice, photo) VALUES ('$name', '$details', '$price', '$image')");

    if (mysqli_affected_rows($db_conn) > 0) {
        echo json_encode(["msg" => "Successfully Inserted"]);
    } else {
        echo json_encode(["msg" => "There Have Some Error"]);
    }
}
