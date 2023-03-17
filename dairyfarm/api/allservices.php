<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
header("Access-Control-Allow-Methods: PUT, GET, POST");

$db = new mysqli("localhost", "root", "", "dairy_farm");
$sql = "SELECT * FROM services";
$result = mysqli_query($db, $sql);

while ($row = mysqli_fetch_assoc($result)) {
    $services['id'] = $row['id'];
    $services['name'] = $row['name'];
    $services['details'] = $row['details'];
    $services['hour'] = $row['hour'];
    $services['weekly'] = $row['weekly'];
    $services['photo'] = $row['photo'];



    $all_services['pr'][] = $services;
}
echo json_encode(['success' => "Yes", 'datas' => $all_services]);
