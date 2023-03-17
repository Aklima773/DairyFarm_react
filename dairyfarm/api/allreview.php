<?php
include("db_connection.php");

$sql = "SELECT * FROM customers_review";
$result = mysqli_query($db_conn, $sql);

while ($row = mysqli_fetch_assoc($result)) {
    $review['id'] = $row['id'];
    $review['name'] = $row['name'];
    $review['review'] = $row['review'];
    $review['pid'] = $row['pid'];
    $review['pname'] = $row['pname'];
    $review['address'] = $row['address'];

    $all_review['pr'][] = $review;
}
echo json_encode(['success' => "Yes", 'datas' => $all_review]);
