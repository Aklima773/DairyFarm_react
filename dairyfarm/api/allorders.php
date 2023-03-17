<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
header("Access-Control-Allow-Methods: PUT, GET, POST");

$db = new mysqli("localhost", "root", "", "dairy_farm");
$sql = "SELECT * FROM orders";
$result = mysqli_query($db, $sql);


while ($row = mysqli_fetch_assoc($result)) {
    $orders['id'] = $row['id'];
    $orders['pname'] = $row['pname'];
    $orders['pprice'] = $row['pprice'];
    $orders['quantity'] = $row['quantity'];
    $orders['totalprice'] = $row['totalprice'];
   



    $allorders['pr'][] = $orders;
}
echo json_encode(['success' => "Yes", 'datas' => $allorders]);


