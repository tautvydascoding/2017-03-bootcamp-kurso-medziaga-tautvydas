<!DOCTYPE html>
<html>
<head>
	<title>test 15</title>
</head>
<body>


<h1>WABA LUBA DUB DUB</h1>

<?php 

	$db_username = "root";
	$db_password = "root";	
	$db_servername = "localhost";
//create connection
	$conn = mysqli_connect($db_servername, $db_username, $db_password);

	if( !$conn ) {
		// echo "Bull Detected".mysql_connect_error();
		die("Bull Detected".mysql_connect_error());
	} else {
		echo "Congratz you wol 1mil<br>";
	}

	$sql = "INSERT INTO users (id, name ,lname) VALUES ('4')";

	$arPavykoSQL = mysqli_query($conn, $sql);

	if($arPavykoSQL) {
		echo "Done m80 <br>";
	} else {
		echo "Nope famalam <br>";
	}

 ?>



</body>
</html>