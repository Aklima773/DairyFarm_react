<?php
include("db_connection.php");

$data = json_decode(file_get_contents("php://input"));

if (
    isset($data->id)
    && isset($data->pname)
    && isset($data->pdetails)
    // && isset($data->photo)
    && isset($data->pprice)
    && !empty(trim($data->id))
    && !empty(trim($data->pname))
    && !empty(trim($data->pdetails))
    // && !empty(trim($data->photo))
    && !empty(trim($data->pprice))
) {
    $id = mysqli_real_escape_string($db_conn, trim($data->id));
    $name = mysqli_real_escape_string($db_conn, trim($data->pname));
    $details = mysqli_real_escape_string($db_conn, trim($data->pdetails));
    // $image = mysqli_real_escape_string($db_conn, trim($data->photo));
    $price = mysqli_real_escape_string($db_conn, trim($data->pprice));

    $add = mysqli_query($db_conn, "UPDATE allproducts set pname='$name', pdetails='$details',  pprice='$price' WHERE id='$id'");

    if ($add) {
        echo json_encode(["success" => true]);
        return;
    } else {
        echo json_encode(["success" => false, "msg" => "Server Problem. Please Try Again"]);
        return;
    }
}
