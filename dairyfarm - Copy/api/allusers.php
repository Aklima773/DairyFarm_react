<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
header("Access-Control-Allow-Methods: PUT, GET, POST");

$db = new mysqli("localhost", "root", "", "dairy_farm");
$sql = "SELECT * FROM userlogin";
$result = mysqli_query($db, $sql);

while ($row = mysqli_fetch_assoc($result)) {
    $users['id'] = $row['id'];
    $users['username'] = $row['username'];
    $users['email'] = $row['email'];
    $users['password'] = $row['password'];



    $myusers['pr'][] = $users;
}
echo json_encode(['success' => "Yes", 'datas' => $myusers]);
