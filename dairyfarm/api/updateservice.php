<?php
include("db_connection.php");

$data = json_decode(file_get_contents("php://input"));

if (
    isset($data->id)
    && isset($data->name)
    && isset($data->details)
    && isset($data->hour)
    && isset($data->weekly)
    && !empty(trim($data->id))
    && !empty(trim($data->name))
    && !empty(trim($data->details))
    && !empty(trim($data->hour))
    && !empty(trim($data->weekly))
) {
    $id = mysqli_real_escape_string($db_conn, trim($data->id));
    $name = mysqli_real_escape_string($db_conn, trim($data->name));
    $details = mysqli_real_escape_string($db_conn, trim($data->details));
    $hour = mysqli_real_escape_string($db_conn, trim($data->hour));
    $weekly = mysqli_real_escape_string($db_conn, trim($data->weekly));

    $add = mysqli_query($db_conn, "UPDATE services set name='$name', details='$details', hour='$hour', weekly='$weekly' WHERE id='$id'");

    if ($add) {
        echo json_encode(["success" => true]);
        return;
    } else {
        echo json_encode(["success" => false, "msg" => "Server Problem. Please Try Again"]);
        return;
    }
}
