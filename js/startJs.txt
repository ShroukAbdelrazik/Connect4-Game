

var names = [];

//store players name

function players() {
	
		document.getElementById("player1Name").value = names[0];
		document.getElementById("player2Name").value = names[1];
	
}


function withplayer() {
	
		names.push(prompt("player 1:", "enter your name here")); // enter player1 name
		names.push(prompt("player 2:", "enter your name here")); // enter player2 name
		players();
		gamewindow= window.open("http://localhost:62928/connect4.html","_parent"); //open game window

		
}

function withcomputer()
{
	names.push(prompt("player :", "enter your name here"));    //enter player name
	document.getElementById("player1Name").value = names[0];
	document.getElementById("player2Name").value = "computer";
	gamewindow=window.open("http://localhost:62928/connect4.html", "_parent");   // open game window
	
}

window.addEventListener("load", function ()
{
	
	var startBtn = document.getElementById("startbtn"); // get start btn
	var choosePlayer = document.getElementById("selectplayer"); //get check box players 
	var chooselevel = document.getElementById("selectLevel");  //get check box levels
	startBtn.addEventListener('click', function (event) {

		//start btn validate

		if (choosePlayer.value == "choose Compititor" || chooselevel.value == "choose Level") {
			event.preventDefault();
			alert("please choose compititor and level")
		}

		//enter players names
		else if (choosePlayer.value == "withPlayer") {
			withplayer(); 
			
		}

			//enter player name

		else if (choosePlayer.value == "withComputer") {
			withcomputer(); 
			
		}

		
	});
});