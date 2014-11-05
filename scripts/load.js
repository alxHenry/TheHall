function requestCrossDomain() {
	var addr = document.getElementById("inputURL").value;

	//Check if address was entered
	if (!addr) {
		alert('No site passed!');
		return false;
	}
	
	//Set the address in local storage
	localStorage.setItem("leagueurl", addr);
	
	//Add '#games-tabs1' so that only the section with the teams is returned from yql query
	var yql = 'https://query.yahooapis.com/v1/public/yql?q=' + encodeURIComponent('select * from html where url="' + addr + '"') + " #games-tabs1";
	
	//New way to load and manipulate
<<<<<<< HEAD
	$("#back-results").load(yql, function() {
		var names = [];
		var temp;
		var charIndex;
		
		//Get the team names
		$("#back-results a").each(function(index) {
			temp = $(this).html();
			
			//Parse out the extra span element
			charIndex = temp.indexOf("<");
			temp = temp.substring(0,charIndex);
			names[index] = temp.trim();
			
			alert(names[index]);
		});
		
		//Store the data into local storage
		arrayToLocal(names, "teamNames");
	});
=======
	//Load into hidden element
	$("#league-teams").load(yql);
	
	//Convert the loaded data into string
	var htmltext = $('<div>').append($('#league-teams').clone()).remove().html();
	
	$("#league-text").html(htmltext);
	
	alert("loaded");
>>>>>>> origin/master
	
	//Old way
	//$("#results").load(yql);
	//$("#results").hide()		//Should find better way to do this. Just loading to manipulate later
	//Parse out items
	//var html = $("#games-tabs1").html()
	
	//Hide the URL entry box
	hideURL(900);
	
	//Enable the pills if successful
	enablePills();
	
	//Enable the results boxes
	showResults();
}

function localToArray(key) {
	return JSON.parse(localStorage[key]);
}

function arrayToLocal(arr, key) {
	localStorage.setItem(key, JSON.stringify(arr));
}