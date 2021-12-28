<?php
	header('Content-Type: application/javascript');
	
	// basic configuration
	$class 				= ".bg-backstretch"; //class of div file that will be changed/add the background.
	$timetofade 		= "1500"; //time in milliseconds that image transition to others.
	$timestillduration 	= "5000"; //time in milliseconds that still the images before changing.
	$images = Array();
	
	// don't touch unless you are know what you're doing
	$files = glob("bg/*.{jpg,png}", GLOB_BRACE);
	foreach($files as $file) { array_push($images, $file); }
	
	//begin output
echo "\$(\"{$class}\").backstretch([\n";
	foreach($images as $imgs) {
		echo " \"{$imgs}\",\n";
	}
echo "], {
 fade: {$timetofade},
 duration: {$timestillduration}
});";
?>