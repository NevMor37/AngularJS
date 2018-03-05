<?php
$url = "data.json";
$data = file_get_contents($url);
$data = json_decode($data);
/*
foreach($data as $element){
    echo $element->name." ".$element->race."<br />";
}*/
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "pracDB";
$conn = mysqli_connect($servername, $username, $password, $dbname);
if ($conn->connect_error) {
    die("Connection Faild: " . $conn->connect_error);
}
$sql = "SELECT * FROM AJAX_DB";
$user = mysqli_query($conn, $sql);
$outp = array();
$outp = $user->fetch_all(MYSQLI_ASSOC);
//header("Content-Type: application/json; charset=UTF-8");
/*
if($user->num_rows>0){

       while($row = $user->fetch_assoc()){
           echo "id = ".$row['id']." ";
           echo "fname= ".$row['firstname']." ";
           echo "lname= ".$row['lastname']." ";
           echo "age= ".$row['age']." ";
           echo "home= ".$row['hometown']." ";
           echo "job= ".$row['job']." ";
           echo"<br />";
       }

}*/

if ($_GET['q'] ==2) {
    header("Content-Type: application/json; charset=UTF-8");
    echo json_encode($outp);
}
if ($_GET['q'] == 1) {
    echo json_encode($data);
}
//echo dataBaseGet();
?>