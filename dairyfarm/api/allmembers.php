<?php
include("db_connection.php");

$sql="SELECT * FROM team_members";
$result = mysqli_query($db_conn, $sql);

while($row = mysqli_fetch_assoc($result)){
    $members['id']= $row['id'];
    $members['name']= $row['name'];
    $members['designation']= $row['designation'];
    $members['Activity']= $row['Activity'];
 

    $team_members['teamm'][]= $members;
}
echo json_encode(['success'=>"Yes", 'datas'=> $team_members]);