$(document).ready(function() {
	//Disable UI tabs if address is not set
	if (localStorage.getItem("leagueurl").length == 0) {
		//Change appearance of pills
		$("#standings").addClass("disabled");
		$("#seasons").addClass("disabled");
		$("#advanced").addClass("disabled");
		
		//Change functionality of links
		document.getElementById("standingsAnchor").href="javascript:";
		document.getElementById("seasonsAnchor").href="javascript:";
		document.getElementById("advancedAnchor").href="javascript:";
	}
});

//If no site is selected, do this
function disablePills() {
	$("#standings").addClass("disabled");
	$("#seasons").addClass("disabled");
	$("#advanced").addClass("disabled");
	
	//Change functionality of links
	document.getElementById("standingsAnchor").href="javascript:";
	document.getElementById("seasonsAnchor").href="javascript:";
	document.getElementById("advancedAnchor").href="javascript:";
	
	//Show the url entry box
	$("#center-box").show(900);
}

//If site is selected, do this
function enablePills() {
	$("#standings").removeClass("disabled");
	$("#seasons").removeClass("disabled");
	$("#advanced").removeClass("disabled");
	
	//Change functionality of links
	document.getElementById("standingsAnchor").href="/TheHall/standings.html";
	document.getElementById("seasonsAnchor").href="/TheHall/seasons.html";
	document.getElementById("advancedAnchor").href="/TheHall/advanced.html";
	
	//Hide the url entry screen
	$("#center-box").hide(900);
}

function clearSite() {
	localStorage.setItem("leagueurl", "");
	disablePills();
}