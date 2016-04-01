<?php
//mysql server details
$host = 'localhost';
$db = 'sportswebsite';
$user = 'root';
$psw = 'saorav08';




try{
//connection to MySQL
$connection = new PDO("mysql:host=$host;dbname=$db", $user, $psw);
$connection->setAttribute( PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION );

}

catch(PDOException $e){
	die('Connection Error');
	echo '$e';
}
//SQL Syntex


?>