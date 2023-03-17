<?php
include("db_connection.php");

$data = json_decode(file_get_contents("php://input"));

if (
    isset($data->id)
    && isset($data->name)
    && isset($data->designation)
    && isset($data->Activity)
    
    && !empty(trim($data->id))
    && !empty(trim($data->name))
    && !empty(trim($data->designation))
    && !empty(trim($data->Activity))
    
) {
    $id = mysqli_real_escape_string($db_conn, trim($data->id));
    $name = mysqli_real_escape_string($db_conn, trim($data->name));
    $designation = mysqli_real_escape_string($db_conn, trim($data->designation));
    $Activity = mysqli_real_escape_string($db_conn, trim($data->Activity));
  

    $add = mysqli_query($db_conn, "UPDATE team_members set name='$name', designation='$designation', Activity='$Activity' WHERE id='$id'");

    if ($add) {
        echo json_encode(["success" => true]);
        return;
    } else {
        echo json_encode(["success" => false, "msg" => "Server Problem. Please Try Again"]);
        return;
    }
}
