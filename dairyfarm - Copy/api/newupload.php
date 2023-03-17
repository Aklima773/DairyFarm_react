<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
header("Access-Control-Allow-Methods: PUT, GET, POST");

$db = new mysqli("localhost", "root", "", "dairy_farm");

if (isset($_POST['mydata']) && isset($_FILES['mydata1'])) {

    $data = json_decode($_POST["mydata"]);

    $pname = $data->pname;
    $pdetails = $data->pdetails;
    $pprice = $data->pprice;


    $file = $_FILES["mydata1"];

    $photo_name = $file["name"];
    $photo_tmp_name = $file["tmp_name"];
    $photo_size = $file["size"];
    $error = $file["error"];

    // print_r($file);

    $url = "../public/uploads/";
    $photopath = $url . time() . $photo_name;


    $photo_name = time() . $photo_name;

    if (move_uploaded_file($photo_tmp_name, $photopath)) {

        include("db_connection.php");
        $db->query("INSERT INTO allproducts (pname, pdetails, photo, pprice) VALUES ('$pname', '$pdetails', '$photo_name', '$pprice')");
    }

    echo json_encode(["msg" => "Successfully Uploaded"]);
} else {
    echo json_encode(["msg" => "First Insert a valid file"]);
}
