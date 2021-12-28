<?php
	//Please define your API Key.
	define("API_KEY", "0CDFF6D8270318666DB9502203E4DF5E");
	
	//GET information parameter. Do not edit these!
	$SV_MAP_NAME = isset($_GET['mapname']) ? $_GET['mapname'] : 'gm_flatgrass';
	$SV_GAMENAME = isset($_GET['gamemode']) ? $_GET['gamemode'] : 'sbox';
	$SV_STEAMID	 = isset($_GET['steamid']) ? $_GET['steamid'] : false;
	$SV_MAXPLAYERS = isset($_GET['maxplayers']) ? $_GET['maxplayers'] : 0;
	$SV_COUNTRY  = isset($_GET['country']) ? $_GET['country'] : "aus";
	
	//EDIT THIS: External Link, if Any. This will shown on the loading.
	$LINK_DISCORD 	 = "discord.gg/pejym8u2Fy"; //the link discord, do not suffix with 'http'!
	$LINK_STEAMGROUP = "steamcommunity.com/groups/mirainosekaicinema"; //the link (or) url for steam group that ends from 'steamcommunity.com/groups/<group name>'. do not suffix with 'http'!
	$AUDIO_VOLUME	= "0.1"; //Volume for the Music/Audio that played after loading.
	
	//EDIT THIS: Gamemode Name Configuration
	$SV_GAMEMODE = Array(
		//Follow as the following values below
		"ph"	=> "Prop Hunt: Enhanced",
		"dr"	=> "Deathrun",
		"ttt"	=> "Trouble in Terrorist Town",
		"sbox"	=> "Sandbox",
		"hns"	=> "Hide and Seek",
		"bhop"	=> "Bunny Hop",
		"cin"	=> "Cinema"
		//and more...
	);
	
	//EDIT THIS: Translate Country
	$SV_COUNTRYNAME = Array(
		"aus"	=> "Australia",
		"uk"	=> "United Kingdom",
		"usa"	=> "USA/America"
		//and more...
	);
	
	// !! DO NOT EDIT FURTHER DOWN BELOW !!
	function getGamemodeName(){
		global $SV_GAMEMODE,$SV_GAMENAME;
		return $SV_GAMEMODE[$SV_GAMENAME];
	}
	
	function getCountryName(){
		global $SV_COUNTRYNAME,$SV_COUNTRY;
		return $SV_COUNTRYNAME[$SV_COUNTRY];
	}
	
	function getMapName(){
		global $SV_MAP_NAME;
		return $SV_MAP_NAME;
	}
	
	function getSteamAPIInfo(){
		// Get the UserSteamID by $_GET (%s), call: $steamid=%s
		global $SV_STEAMID;
		if ($SV_STEAMID){
			$data = 'https://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002/?key='.API_KEY.'&steamids='.$SV_STEAMID;
		}
		else{
			return Array(
			"name"	=> "Unnammed",
			"icon"	=> "default.jpg",
			"id64"	=> "Offline",
			"id32"	=> "Offline"
			);
		}
		
		$f = file_get_contents($data);
		$arr = json_decode($f, true);
		
		// Get Player's Name.
		if (isset($arr['response']['players'][0]['personaname']))
		{
			$plname = $arr['response']['players'][0]['personaname'];
		}
		// Get Player's Avatar
		if (isset($arr['response']['players'][0]['avatarfull']))
		{
			$avatar = $arr['response']['players'][0]['avatarfull']; 
		}
		// Get Player's SteamID
		if (isset($arr['response']['players'][0]['steamid']))
		{
			$plid64 = $arr['response']['players'][0]['steamid']; 
		}
		
		//!! ATTENTION ---> Convert STEAMID64 to STEAMID32, Require BCMATH Library to be installed in your PHP.
		$authserver = bcsub( $plid64, '76561197960265728' ) & 1;
		//Get the third number of the steamid
		$authid = ( bcsub( $plid64, '76561197960265728' ) - $authserver ) / 2;
		//Concatenate the STEAM_ prefix and the first number, which is always 0, as well as colons with the other two numbers
		$plid = "STEAM_0:{$authserver}:{$authid}";
		
		return Array(
			"name"	=> $plname,
			"icon"	=> $avatar,
			"id64"	=> $plid64,
			"id32"	=> $plid
		);
	}

?>