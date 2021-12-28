<?php
	
	// UN COMMENT THIS BELOW IF YOU FACING MUSIC NOT PLAYING PROBLEM.
	/* 
	header("Cache-Control: no-store, no-cache, must-revalidate, max-age=0");
	header("Cache-Control: post-check=0, pre-check=0", false);
	header("Pragma: no-cache"); 
	*/
	
	//main configuration
    require('config.php')
	
?>

<!DOCTYPE html>
<html>
<head>

    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="">
    <meta name="author" content="">

    <title>Mirai No Sekai</title>

    <!-- Bootstrap Core CSS & FontAwesome 4.7.0 -->
    <link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css" rel="stylesheet">
	<link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" type="text/css">
	
    <!-- Custom CSS -->
    <link href="css/the-big-picture.css" rel="stylesheet">
	
</head>

<body>
	<?php
		//Add Audio here.
		include("audio.php");
	?>
    <!-- Page Content -->
	<div class="cover bg-backstretch"></div>
	<div class='m-notif'>
		<p class='btn btn-default'><i class='fa fa-fw fa-volume-up'></i> Music: <?php echo getNiceTitle($music); 
		?></p>
	</div>
	
    <div class="container vcenter">
		<div class="row">
			<div class="col-sm-12 text-center" style="margin-bottom:12px">
				<img class='img-responsive center-block' src="logo.png" />
			</div>
		</div>
		<?php
			//Steam Info Loader
			$usrData = getSteamAPIInfo();
			
			$plname = $usrData["name"];
			$plid = $usrData["id32"];
			$avatar = $usrData["icon"];
		?>
		<div class="row">
			<div class="col-sm-12" id='wellbg'>
				<h1 class='text-center'>Welcome to Mirai No Sekai <?php echo getGamemodeName(); ?> server!</h1>
				
				<div class='row'>
				  <div class='col-sm-6'> 
				    <div class='row'>
					  <div class='col-sm-4'>
							<img class="img-responsive" style='height:100%;width:100%;margin-top:30px' src="<?php echo $avatar; ?>"/>
					  </div>
					  <div class='col-sm-8'>
							<h3><i class='fa fa-fw fa-user'></i> <?php echo $plname; ?></h3>
							
							<p class='sv-info'>
							<i class='fa fa-fw fa-steam'></i> <?php echo $plid; ?></br>
							<i class="fa fa-fw fa-cubes"></i> <?php echo getGamemodeName(); ?></br>
							<i class="fa fa-fw fa-map"></i> <?php echo getMapName(); ?></br>
							<i class="fa fa-fw fa-group"></i> <?php echo $SV_MAXPLAYERS; ?> Players</br>
							<i class="fa fa-fw fa-flag"></i> <?php echo getCountryName(); ?></p>
					  </div>
					</div>
				  </div>
				  <div class="col-sm-6">
						<h3><i class='fa fa-fw fa-exclamation-triangle'></i> STAFF TEAM</h3>
						<?php include("fetch-rules.php"); ?>
				  </div>
				</div>
				
				<div class='row' style='margin-top:20px'>
					<div class='col-sm-6 text-center'>
						<p class='sv-info'><i class='fa fa-fw fa-2x fa-steam-square'></i>
						<br>Steam Group: <?php echo $LINK_STEAMGROUP; ?>
						</p>
					</div>
					<div class='col-sm-6 text-center'>
						<p class='sv-info'><i class='fa fa-fw fa-2x fa-group'></i>
						<br>Discord: <?php echo $LINK_DISCORD; ?>
						</p>
					</div>
				</div>

				<br>
			</div>
		</div>
    </div>
	
	<!-- JQuery and stuff -->
	<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
    <script type="text/javascript" src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
	<!-- backstretch - dynamic background changer -->
	<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jquery-backstretch/2.0.4/jquery.backstretch.min.js"></script>
	<script type="text/javascript" src="imagelist.php"></script>
	<script type="text/javascript">
	$( document ).ready(function() {
		$('audio').prop('volume', <?php echo $AUDIO_VOLUME; ?>);
	});
	</script>
</body>
</html>
