<?php

include("db_connection.php");

$data = file_get_contents("php://input");

$data = json_decode($data);

if(isset($data->name) && ($data->name !=" ")){
    $name = $data->name;
    $designation = $data->designation;
    $Activity = $data->Activity;
    
    $result= mysqli_query($db_conn, "INSERT INTO team_members (name, designation, Activity) VALUES ('$name', '$designation', '$Activity')");

    if(mysqli_affected_rows($db_conn)>0){
        echo json_encode(["msg"=>"Successfully Inserted"]);
    }
    else{
        echo json_encode(["msg"=>"There Have Some Error"]);
    }
}