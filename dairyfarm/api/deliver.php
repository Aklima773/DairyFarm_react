<?php 
include("db_connection.php");

$data = file_get_contents("php://input");

$data = json_decode($data);


if (isset($data->id) && ($data->id != " ")){


$id = $data->id;
$username = $data->username;
$useremail = $data->useremail;
$pname = $data->pname;
$pprice = $data->pprice;
$quantity = $data->quantity;
$totalprice = $data->totalprice;

$result = mysqli_query($db_conn,"INSERT INTO deliverproduct (username, useremail, pname, pprice, quantity, totalprice) VALUES ('$username', '$useremail', '$pname','$pprice', '$quantity', '$totalprice')");

//   $result = mysqli_query($db_conn, "INSERT INTO allproducts (pname, pdetails, pprice, photo) VALUES ('$name', '$details', '$price', '$image')");

    if (mysqli_affected_rows($db_conn) > 0) {
        echo json_encode(["msg" => "Successfully Product Deliverd"]);
    } else {
        echo json_encode(["msg" => "There Have Some Error"]);
    }




if($result){
    echo json_encode(['msg'=>"Successfully Deliver"]);
}

}