<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
header("Access-Control-Allow-Methods: PUT, GET, POST");

$db = new mysqli("localhost", "root", "", "dairy_farm");
$sql = "SELECT * FROM allproducts";
$result = mysqli_query($db, $sql);

while ($row = mysqli_fetch_assoc($result)) {
    $products['id'] = $row['id'];
    $products['name'] = $row['pname'];
    $products['details'] = $row['pdetails'];
    $products['photo'] = $row['photo'];
    $products['price'] = $row['pprice'];
    $products['quantity'] = $row['quantity'];


    $myproducts['pr'][] = $products;
}
echo json_encode(['success' => "Yes", 'datas' => $myproducts]);
