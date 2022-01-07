<?php
	function checkFileMime($file){
		$ext = pathinfo($file, PATHINFO_EXTENSION);
		
		if ($ext == "ogg"){ return "audio/ogg"; }
		if ($ext == "mp3"){ return "audio/mpeg"; }
		
		return "text/html";
	}
	
	function getNiceTitle($file){
		$ext = pathinfo($file, PATHINFO_EXTENSION);
		
		$mname = "";
		
		if ($ext == "ogg"){ $mname = basename($file,".ogg"); }
		if ($ext == "mp3"){ $mname = basename($file,".mp3"); }
		
		$mnamereal = str_replace('_',' ', $mname);
		
		return ucwords($mnamereal);
	}
	
	$lsaudio = Array();
	$files = glob("audio/*.{mp3,ogg}", GLOB_BRACE);
	foreach($files as $file) { array_push($lsaudio, $file); }
	
	$music = "";
	$musictype = "";
	
	$rand = rand(0,count($files)-1);
	$music = $files[$rand];
	$musictype = checkFileMime($music);

echo "<audio autoplay loop>
	<source src=\"{$music}\" type=\"{$musictype}\">
</audio>\n";
?>