
function DownloadingFile( fileName ) {
	SetStatusChanged( "Downloading '" + fileName + "'" );
}

var lastStatus;

function SetStatusChanged( status ) {
	var history = document.getElementById('status-history');

	var elem = document.createElement('div');
	elem.classList.add('status');
	elem.innerHTML = status;

	history.insertBefore( elem, lastStatus );

	if ( lastStatus ) {
		var e = lastStatus;
		e.classList.add('fade');
		setTimeout(function(){
			history.removeChild(e);
		}, 8000);
	}

	lastStatus = elem;
}

var filesTotal = 0,
	filesNeeded = 0;

function updateDownloadCount() {
	var elem = document.getElementById('download-count');
	if ( filesNeeded > 1 ) {
		var str = filesNeeded + " download(s) remaining";
		elem.innerHTML = str;
	} else {
		elem.innerHTML = "";
	}
}

function SetFilesTotal( total ) {
	if ( total > filesTotal ) filesTotal = total;
	updateDownloadCount(); 
}
function SetFilesNeeded( needed ) {
	if ( needed > filesTotal ) filesTotal = needed;
	filesNeeded = needed;
	updateDownloadCount();
}


// Browser testing; to prevent having to open GMod
if ( window.webkitRTCPeerConnection ) {
	GameDetails( "Community Server Name", "127.0.0.1", "gm_flatgrass", 32, "123456789", "sandbox" );

	var delay = 200;
	function Status( text ) {
		setTimeout(function() { SetStatusChanged( text ) }, delay);
		delay += (delay * 1.1);
	}
	Status( "Getting Addon #118824086..." );
	Status( "Getting Addon #119060917..." );
	Status( "Downloading &lt;filename&gt;..." );
	Status( "Sending client info..." );
	Status( "Retreiving game data..." );
}