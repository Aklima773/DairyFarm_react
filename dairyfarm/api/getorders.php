<?php

include("db_connection.php");

$data = file_get_contents("php://input");

$data = json_decode($data);

if (isset($data->id) && !empty(trim($data->id))) {
    $id = mysqli_real_escape_string($db_conn, trim($data->id));
    $result = mysqli_query($db_conn, "SELECT * FROM orders WHERE uid = '$uid'");

    if (mysqli_num_rows($result) > 0) {
        while ($row = mysqli_fetch_array($result)) {
            $orders['id'] = $row['id'];
            $orders['uid'] = $row['uid'];
            $orders['username'] = $row['username'];
            $orders['name'] = $row['name'];
            $orders['quantity'] = $row['quantity'];
            $orders['price'] = $row['price'];
            $orders['address'] = $row['address'];

            $all_orders["data"][] = $orders;
        }

        echo json_encode(["success" => true, "product" => $all_orders]);
        return;
    } else {
        echo json_encode(["success" => false]);
        return;
    }
}
