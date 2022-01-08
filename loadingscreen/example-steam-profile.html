<?php
require 'steam.php';

// Check if 'steamid' GET variable is set
if ( isset($_GET['steamid']) ) {
	// Request player info from Steam
	$playerinfo = getPlayerSummary($_GET['steamid']);

	if ( $playerinfo ) {
		$playerinfo = $playerinfo['response']['players'][0];
		$lastonline = date( "F jS, Y", $playerinfo['lastlogoff'] );
	}
}
?>
<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8" />
	<title>Loading...</title>
	<link rel="stylesheet" type="text/css" href="common.css" />
	<link rel="stylesheet" type="text/css" href="example-steam-profile.css" />
	<link rel="stylesheet" type="text/css" href="example-background-image.css" />
</head>
<body>

	<div class="content-container vertical box">

		<header class="vertical">
			<img src="logo.png" />
		</header>

		<section class="horizontal box">

			<!-- Left container -->
			<section class="vertical box">

				<!-- Rules board -->
				<div class="board">

					<div class="header">
						<p>RULES</p>
					</div>

					<div class="content">
						<ol>
							<li>No RDM'ing (Random Deathmatch)</li>
							<li>No ghosting</li>
							<li>No chat/mic spam</li>
							<li>No prop killing</li>
							<li>No bad mouthing</li>
							<li>No hacking</li>
							<li>Respect the admins</li>
						</ol>
					</div>

				</div>

			</section>

			<!-- Right container -->
			<section class="vertical box">

				<!-- Server Info board -->
				<div class="board">

					<div class="content">
						
							<img id="map-icon" class="mapicon" align="left" />

							<p class="boardinfo">
								<img src="asset://garrysmod/materials/icon16/information.png" class="icon16" />
								<span id="server-name"></span>
							</p>

							<p class="boardinfo">
								<img src="asset://garrysmod/gamemodes/base/icon24.png" id="gamemode-icon" class="gamemodeicon" onerror="GamemodeIconFallback();" />
								<span id="gamemode-name"></span>
							</p>

							<p class="boardinfo">
								<img src="asset://garrysmod/materials/icon16/map.png" class="icon16" />
								<span id="map-name"></span>
							</p>

							<p class="boardinfo">
								<img src="asset://garrysmod/materials/icon16/group.png" class="icon16" />
								<span id="max-players"></span>
							</p>

					</div>

				</div>

<?php if ( isset($playerinfo) ) { ?>

				<!-- Player Info board -->
				<div class="board">

					<div class="content">
							
							<img src="<?php echo $playerinfo['avatarfull']; ?>" id="map-icon" class="mapicon" align="left" />

							<p class="boardinfo">
								<img src="asset://garrysmod/materials/icon16/user.png" class="icon16" />
								<span id="server-name"><?php echo $playerinfo['personaname']; ?></span>
							</p>

							<p class="boardinfo">
								<img src="asset://garrysmod/materials/icon16/key.png" class="icon16" />
								<span id="server-name"><?php echo convertSteamID($playerinfo['steamid']); ?></span>
							</p>

	<?php if ( isset($money) ) { ?>
							<p class="boardinfo">
								<img src="asset://garrysmod/materials/icon16/money.png" class="icon16" />
								<span id="server-name"><?php echo $money; ?></span>
							</p>
	<?php } ?>

							<p class="boardinfo" style="font-size: 10pt;">
								<img src="asset://garrysmod/materials/icon16/calendar.png" class="icon16" />
								<span id="server-name">Last seen <?php echo $lastonline; ?></span>
							</p>

					</div>

				</div>

<?php } ?>

			</section>

		</section>

		<footer>
			<div id="status-history"></div>
		</footer>

	</div>

	<div id="download-count"></div>

	<script type="text/javascript" src="loading.js"></script>

</body>
</html>