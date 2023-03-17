<?php
include("db_connection.php");

$sql = "SELECT * FROM allproducts";
$result = mysqli_query($db_conn, $sql);

while ($row = mysqli_fetch_assoc($result)) {
    $products['id'] = $row['id'];
    $products['name'] = $row['pname'];
    $products['details'] = $row['pdetails'];
    $products['image'] = $row['photo'];
    $products['price'] = $row['pprice'];
    $products['quantity'] = $row['quantity'];

    $myproducts['pr'][] = $products;
}
echo json_encode(['success' => "Yes", 'datas' => $myproducts]);
