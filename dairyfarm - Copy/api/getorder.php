<?php

include("db_connection.php");

$data = file_get_contents("php://input");

$data = json_decode($data);

if (isset($data->id) && !empty(trim($data->id))) {
    $id = mysqli_real_escape_string($db_conn, trim($data->id));
    $result = mysqli_query($db_conn, "SELECT * FROM allproducts WHERE id = '$id'");

    if (mysqli_num_rows($result) > 0) {
        while ($row = mysqli_fetch_array($result)) {
            $vproducts['id'] = $row['id'];
            $vproducts['name'] = $row['pname'];
            $vproducts['details'] = $row['pdetails'];
            
            $vproducts['price'] = $row['pprice'];
            $vproducts['quantity'] = $row['quantity'];
         

            $all_vproducts["data"][] = $vproducts;
        }

        echo json_encode(["success" => true, "product" => $all_vproducts]);
        return;
    } else {
        echo json_encode(["success" => false]);
        return;
    }
}
