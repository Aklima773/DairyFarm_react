<?php

include("db_connection.php");

$data = file_get_contents("php://input");

$data = json_decode($data);

if (isset($data->id) && !empty(trim($data->id))) {
    $id = mysqli_real_escape_string($db_conn, trim($data->id));
    $result = mysqli_query($db_conn, "SELECT * FROM team_members WHERE id = '$id'");

    if (mysqli_num_rows($result) > 0) {
        while ($row = mysqli_fetch_array($result)) {
            $members['id'] = $row['id'];
            $members['name'] = $row['name'];
            $members['designation'] = $row['designation'];
            $members['Activity'] = $row['Activity'];
           

            $all_members["data"][] = $members;
        }

        echo json_encode(["success" => true, "members" => $all_members]);
        return;
    } else {
        echo json_encode(["success" => false]);
        return;
    }
}
