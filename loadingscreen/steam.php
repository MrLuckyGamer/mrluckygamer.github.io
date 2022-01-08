<?php
// Cache directory for Steam player summary requests
define('CACHE_DIR', 'cache/');

/*
	Steam Web API Key required
	http://steamcommunity.com/dev/apikey
*/
define('STEAM_APIKEY', '0CDFF6D8270318666DB9502203E4DF5E');

// Must use a valid Steam Web API key
if ( STEAM_APIKEY === '0CDFF6D8270318666DB9502203E4DF5E') {
	echo "No API key set!<br/>";
	echo "See STEAM_APIKEY in <b><i>steam.php</i></b><br/>";
	echo "<a href='http://steamcommunity.com/dev/apikey' target='_blank'>Get an API key here</a>";
	echo "<br/><br/>";
	echo "Check <b><i>README.txt</i></b> included with the loading screen for additional instructions.";
	die();
}

function convertSteamID($steamid64) {
	$authserver = bcsub($steamid64, '76561197960265728') & 1;
	$authid = (bcsub($steamid64, '76561197960265728')-$authserver)/2;
	return "STEAM_0:$authserver:$authid";
}

function getPlayerSummary($steamid64) {
	$file = CACHE_DIR . "/$steamid64.json";
	$current_time = time();
	$expire_time = 60 * 60; // 1 hour
	$file_time = @filemtime($file);

	if ( file_exists($file) && ($current_time - $expire_time < $file_time) ) {
		$content = file_get_contents($file);
		return json_decode($content, true);
	} else {
		$content = @file_get_contents('http://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002/?key=' . STEAM_APIKEY . '&steamids=' . $steamid64 . '&format=json');
		$json = @json_decode($content, true);

		if ( $content && count($json['response']['players']) > 0 ) {
			if (!file_exists(CACHE_DIR)) {
			    mkdir(CACHE_DIR, 0777, true);
			}
			file_put_contents($file, $content);
			return $json;
		} else {
			return NULL;
		}
	}
}
?>