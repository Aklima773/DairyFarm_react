<?php

include("db_connection.php");

$data = file_get_contents("php://input");

$data = json_decode($data);

if (isset($data->id) && !empty(trim($data->id))) {
    $id = mysqli_real_escape_string($db_conn, trim($data->id));
    $result = mysqli_query($db_conn, "SELECT * FROM services WHERE id = '$id'");

    if (mysqli_num_rows($result) > 0) {
        while ($row = mysqli_fetch_array($result)) {
            $vproducts['id'] = $row['id'];
            $vproducts['name'] = $row['name'];
            $vproducts['details'] = $row['details'];
            $vproducts['hour'] = $row['hour'];
            $vproducts['weekly'] = $row['weekly'];
            $vproducts['photo'] = $row['photo'];

            $all_vproducts["data"][] = $vproducts;
        }

        echo json_encode(["success" => true, "service" => $all_vproducts]);
        return;
    } else {
        echo json_encode(["success" => false]);
        return;
    }
}
