<?php
	$rule_files = file_get_contents("rules/{$SV_GAMENAME}.txt");
	$rule_list  = explode("\n",$rule_files);
	
	echo "<ol>";
	foreach ($rule_list as $rule){
		echo "<li class='normalise'>{$rule}</li>";
	}
	echo "</ol>";
?>