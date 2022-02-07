<?php

    include('rules.php');
    $player_counts = [
	'cinema' =>24,
        'dr' => 32,
        'bh' => 12,
        'murder' => 20,
        'ph' => 32,
        'ttt' => 32
    ];

	header("Cache-Control: no-store, no-cache, must-revalidate, max-age=0");
	header("Cache-Control: post-check=0, pre-check=0", false);
	header("Pragma: no-cache");
	
    $apikey = 'E333A717ECE8C9FC5CB5E18F8415DF7B';
	
	// Get the MapName by $_GET (%m), call: &mapname=%m
    if (isset($_GET['mapname']))
	{
		$map = $_GET['mapname'];
	}
	
	// Get the Gamemode Name. This only returns: ph,dr,ttt,and sbox.
	$gmt = Array(
		"cinema" => "Cinema",
		"ph"	=> "PropHunters",
		"dr"	=> "Deathrun",
		"bh"    => "BunnyHop",
		"murder" => "Murder",
		"ttt"	=> "Trouble in Terrorist Town",
		"sbox"	=> "Garry's Mod: Sandbox"
		// Add More Here.
	);
	
	if (isset($_GET['gamemode']) && $gmt[$_GET['gamemode']])
	{
		$gmname = $gmt[$_GET['gamemode']];
	}
	else
	{
		$gmname = "Gamemode Not Found!!!";
	}
    
	// Get the UserSteamID by $_GET (%s), call: $steamid=%s
    if (isset($_GET['steamid'])){
		$data = 'https://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002/?key='.$apikey.'&steamids='.$_GET['steamid'];
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
	
	$authserver = bcsub( $plid64, '76561197960265728' ) & 1;
	//Get the third number of the steamid
	$authid = ( bcsub( $plid64, '76561197960265728' ) - $authserver ) / 2;
	//Concatenate the STEAM_ prefix and the first number, which is always 0, as well as colons with the other two numbers
	$plid = "STEAM_0:$authserver:$authid";
	
?>

<!--/////////////////////////////////////////////////////////////////////////////////////////////////

	
				Copyright (c) 2018 - Wolvindra-Vinzuerio & Lucky :: Special for Mirai No Sekai.
								https://project.wolvindra.net
	
						Title: Personal Garry's Mod Loading Screen v.2
								Format: HTML5 + Bootstrap v3.3.7
								
							This HTML & PHP Codes-work is licensed under:
	Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International (CC BY-NC-SA 4.0)
						https://creativecommons.org/licenses/by-nc-sa/4.0/


/////////////////////////////////////////////////////////////////////////////////////////////////-->

<!DOCTYPE html>
<html>
<head>

    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="">
    <meta name="author" content="">

    <title>Mirai No Sekai</title>

    <!-- Bootstrap Core CSS & FontAwesome 4.6.3 -->
    <link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet">
	<link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" type="text/css">
	
    <!-- Custom CSS -->
    <link href="css/the-big-picture.css" rel="stylesheet">
	<!-- an Awesomium Avatar 'Circle' image fix. -->
	<link href="css/avatarfix.css" rel="stylesheet">
	
	<!-- JQuery and stuff -->
	<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
	
	<!-- Backstretch, let the background changes -->
	<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jquery-backstretch/2.0.4/jquery.backstretch.min.js"></script>

	<style>
	.cover {
		position:absolute;
		top:0; 
		left:0; 
		width:100%;
		height:100%;
	}
	
	.cover img {
	    min-width: 100%;
	    min-height: 100%;
	}
	</style>
	
</head>

<body>
    <!-- Page Content -->
	<div class="cover">
	    <img src="bg1.jpg">  
	</div>
    <div class="container">
		<div class="row">
			<div class="col-sm-12 text-center" style="margin-bottom:24px">
				<img src="logo.png">
				<h1>
				<!--<small style="color:#fff;font-weight:300;text-transform:capitalize;font-size: 30px"><?= $gmname ?></small></h1>-->
                        </div>
	</div>
		<div class="row">
			<div class="col-sm-4">
				<div class="well" id="wellbg">
					<div style="margin:4px">
						<img class="avatarimg img-responsive" src="<?php echo $avatar; ?>"/>
						<h4 class="text-center" style="text-shadow:1px 1px 6px #191919;margin-top:16px;"><i class='fa fa-fw fa-user'></i> <?php echo $plname; ?></h4>
						<h5 class="text-center" style="text-shadow:1px 1px 6px #191919;color:#ccc"><i class='fa fa-fw fa-steam'></i> <?php echo $plid; ?></h5>
					</div>
				</div>
			</div>
			<div class="col-sm-8">
				<div class="well" id="wellbg" style="padding-top: 0; padding-left: 0; padding-right: 0">
					<div>
						<h4 class="text-left" style="color:#fff; background: rgba(0, 0, 0, 0.5); padding: 16px 20px; margin: 0">RULES & TIPS</h4>
						<ul style="margin: 10px 0 6px">
						    <?php foreach($rules[$_GET['gamemode']] as $rule) { ?>
						        <li class="normalise"><?= $rule ?></li>
						    <?php } ?>
						</ul>
					</div>
				</div>
			</div>
		</div>
	</div>
	<div class="container">
		<div class="row">
			<div class="col-sm-12 text-center">
				<div class="well" id="wellbg" style="padding-top: 0; padding-left: 0; padding-right: 0">
					<h4 style="color:#fff; padding: 16px 0; background: rgba(0, 0, 0, 0.5)"> SERVER INFO </h4>
					<div class="row" style="margin-top:30px; padding-left: 20px; padding-right: 20px;">
						<div class="col-sm-3">
							<i style="margin-bottom:12px" class="fa fa-fw fa-2x fa-cubes"></i>
							<p><b>Gamemode</b>
							<br><?php echo "$gmname"; ?></p>
						</div>
						<div class="col-sm-3">
							<i style="margin-bottom:12px" class="fa fa-fw fa-2x fa-map"></i>
							<p><b>Map</b>
							<br><?php echo "$map"; ?></p>
						</div>
						<div class="col-sm-3">
							<i style="margin-bottom:12px" class="fa fa-fw fa-2x fa-group"></i>
							<p><b>Player Slots</b>
							<br><?= $player_counts[$_GET['gamemode']] ?> Players</p>
						</div>
						<div class="col-sm-3">
							<i style="margin-bottom:12px" class="fa fa-fw fa-2x fa-flag"></i>
							<p><b>Location</b>
							<br>United Kingdom</p>
						</div>
					</div>
				</div>
			</div>
		</div>
    </div>
</body>
</html>
