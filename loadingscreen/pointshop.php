<?php
// Database name
DEFINE('DATABASE_DATABASE','loading');

// Database address (e.g. 127.0.0.1)
// Default port is 3306
DEFINE('DATABASE_ADDRESS','localhost');

// Database username
DEFINE('DATABASE_USER','root');

// Database username's password
// This should NEVER be blank!
DEFINE('DATABASE_PASSWORD','');

// Connect to database and select the database
$conn = mysql_connect(DATABASE_ADDRESS, DATABASE_USER, DATABASE_PASSWORD);
mysql_select_db(DATABASE_DATABASE);

// Get the player's uniqueid
$uniqueid = sprintf("%u", crc32("gm_" . $steamid . "_gm"));

// Query their pointshop points
$query = "SELECT `points` FROM `pointshop_data` WHERE uniqueid='$uniqueid'";
$result = mysql_query($query);

// If we were able to find a result, get the database row
if ($result) {
	$row = mysql_fetch_row($result);
	$money = $row[0];
}

mysql_close($conn);
?>