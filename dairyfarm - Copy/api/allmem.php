<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
header("Access-Control-Allow-Methods: PUT, GET, POST");

$db = new mysqli("localhost", "root", "", "dairy_farm");
$sql = "SELECT * FROM team_members";
$result = mysqli_query($db, $sql);

while ($row = mysqli_fetch_assoc($result)) {
    $products['id'] = $row['id'];
    $products['name'] = $row['name'];
    $products['designation'] = $row['designation'];
    $products['Activity'] = $row['Activity'];
    $products['photo'] = $row['photo'];
    $products['age'] = $row['age'];


    $myproducts['pr'][] = $products;
}
echo json_encode(['success' => "Yes", 'datas' => $myproducts]);
