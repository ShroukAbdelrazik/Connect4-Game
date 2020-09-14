
var ballposition = 90;
var balltop = 20;
var ball2position = 90;
var ball2top = 20;
var goDown;
var global;
var playerRol = 0;
var selectCol1 = 2;
var selectCol2 = 2;
var col1height = 432;
var col2height = 432;
var col3height = 432;
var col4height = 432;
var col5height = 432;
var col6height = 432;
var col7height = 432;
var random;
var col1 = [];
var col2 = [];
var col3 = [];
var col4 = [];
var col5 = [];
var col6 = [];
var col7 = [];

//--------------------------------------------------------
var rowCells = [];
var matchedBalls = 0;
var matchedToWin = 2;

var rows = [];


//____________________________________________



var gameLvl = [];
var player1name = [];
var player2name = [];
var data = [];
data = window.location.search.substr(1).split("&");//getting query string without&

function showGameLevel() {

	
	if (data.length == 4) {
		gameLvl = data[3].split("="); //return array of strings without & =
		document.getElementById("gameLevel").innerText = gameLvl[1];  //return gameLevel
		player1name = data[1].split("=");
		document.getElementById("player1").value = "player1: " + player1name[1]; //return player 1 name
		player2name = data[2].split("=");
		document.getElementById("player2").value = "player2: " + player2name[1];  //return player 2 name
	}
	
}


//function storePlayersData() {

//	localStorage.setItem(player1name[1], toString(Date.now), player2name[1], toString(Date.now));
//	var data = localStorage.getItem(player1name[1], toString(Date.now), player2name[1], toString(Date.now));
//	if (data.includes(player1name[1]) )
//	{
//		alert()
//	}
//	else if (data.includes(player2name[1]))
//	{
//		alert()
//	}
//}



var checkCompitit = [];
var compititor = [];
var nowCell;

function checkCompititor()
{
	
	if (data.length == 4) {
		checkCompitit = data[0].split("="); //return array of strings without & =
		compititor.push(checkCompitit[1]);  //return compititor(player/player or player/computer)
	}
}

function moveRight(_ball, _ballposition) {
	if (_ballposition < 460) {
		_ballposition += 85;//85
		_ball.style.left = _ballposition + "px";
		
	}

}

function moveLeft(_ball, _ballposition) {
	if (_ballposition > 65) {
		_ballposition -= 85;//85
		_ball.style.left = _ballposition + "px";

	}
}

function play(cell, style) {


	cell.className = style;
	nowCell = cell.cellIndex;
}


//player 1
function player1(_heightP, _cell) {
	balltop = 5;
	play(_cell, "yellowcell");
	

}	

// player 2
function player2(_heightP, _cell) {

	ball2top = 5;
	play(_cell, "redcell");
	
}

// enter code player&computer
function enterPlCom(_heightE, _cell) {

	if (playerRol == 0) {
		player1(_heightE, _cell);

		playerRol = 1;
		ball2top = 20;
		

	}
	else {
		player2(_heightE, _cell);
		playerRol = 0;
		balltop = 20;
		
	}


}

// enter code  two player
function enter2Pl(_heightE, _cell) {
	if (playerRol == 0) {
		player1(_heightE, _cell);
		
		playerRol = 1;
		ball2top = 20;
		

		// display and show another player
		if (playerRol == 0) {
			ball2.style.display = "none";
			ball.style.display = "inline-block";
			
		}
		else {
			ball.style.display = "none";
			ball2.style.display = "inline-block";
			
		}

	}
	else {
		player2(_heightE, _cell);
		
		playerRol = 0;
		balltop = 20;
		

		// display and show other player
		if (playerRol == 0) {
			ball2.style.display = "none";
			ball.style.display = "inline-block";
			
		}
		else {
			ball.style.display = "none";
			ball2.style.display = "inline-block";
			
		}


	}
	
}

// function to choose each player&player select col
function switchSelectCol_pl(_selectCol) {


	switch (_selectCol) {
		case 1:

			col1 = document.getElementsByClassName("col1");

			//controlCols(col1, col1height)

			for (var i = 0; i < col1.length; i++) {
				if (col1[i].offsetTop == col1height)
				{
					
					enter2Pl(col1height, col1[i]);
					col1height -= 86;
				}
			}

			break;
		case 2:

			col2 = document.getElementsByClassName("col2");
			//controlCols(col2, col2height);

			for (var i = 0; i < col2.length; i++) {
				if (col2[i].offsetTop == col2height) {
					enter2Pl(col2height, col2[i]);
					
		
					col2height -= 86;
				}
			}

			break;

		case 3:
			col3 = document.getElementsByClassName("col3");
			//controlCols(col3, col3height);

			for (var i = 0; i < col3.length; i++) {
				if (col3[i].offsetTop == col3height) {
					enter2Pl(col3height, col3[i]);
					
					col3height -= 86;
				}
			}
			break;

		case 4:
			col4 = document.getElementsByClassName("col4");
			//controlCols(col4, col4height);


			for (var i = 0; i < col4.length; i++) {
				if (col4[i].offsetTop == col4height) {
					enter2Pl(col4height, col4[i]);
					
					col4height -= 86;
				}
			}
			break;


		case 5:
			col5 = document.getElementsByClassName("col5");
			// controlCols(col5, col5height);


			for (var i = 0; i < col5.length; i++) {
				if (col5[i].offsetTop == col5height) {
					enter2Pl(col5height, col5[i]);
					
					col5height -= 86;
				}
			}
			break;
		case 6:
			col6 = document.getElementsByClassName("col6");
			//controlCols(col6, col6height);

			for (var i = 0; i < col6.length; i++) {
				if (col6[i].offsetTop == col6height) {
					enter2Pl(col6height, col6[i]);
					
					col6height -= 86;
				}
			}

			break;

		case 7:
			col7 = document.getElementsByClassName("col7");
			//controlCols(col7, col7height);

			for (var i = 0; i < col7.length; i++) {
				if (col7[i].offsetTop == col7height) {
					enter2Pl(col7height, col7[i]);
					
					col7height -= 86;
				}
			}
			break;


	}


}

// function to choose each player&computer select col
function switchSelectCol_com(_selectCol) {


	switch (_selectCol) {
		case 1:

			col1 = document.getElementsByClassName("col1");

			//controlCols(col1, col1height)

			for (var i = 0; i < col1.length; i++) {
				if (col1[i].offsetTop == col1height) {
					enterPlCom(col1height, col1[i]);
					col1height -= 86;
				}
			}

			break;
		case 2:

			col2 = document.getElementsByClassName("col2");
			//controlCols(col2, col2height);

			for (var i = 0; i < col2.length; i++) {
				if (col2[i].offsetTop == col2height) {
					enterPlCom(col2height, col2[i]);
					col2height -= 86;
				}
			}

			break;

		case 3:
			col3 = document.getElementsByClassName("col3");
			//controlCols(col3, col3height);

			for (var i = 0; i < col3.length; i++) {
				if (col3[i].offsetTop == col3height) {
					enterPlCom(col3height, col3[i]);
					col3height -= 86;
				}
			}
			break;

		case 4:
			col4 = document.getElementsByClassName("col4");
			//controlCols(col4, col4height);


			for (var i = 0; i < col4.length; i++) {
				if (col4[i].offsetTop == col4height) {
					enterPlCom(col4height, col4[i]);
					col4height -= 86;
				}
			}
			break;


		case 5:
			col5 = document.getElementsByClassName("col5");
			// controlCols(col5, col5height);


			for (var i = 0; i < col5.length; i++) {
				if (col5[i].offsetTop == col5height) {
					enterPlCom(col5height, col5[i]);
					col5height -= 86;
				}
			}
			break;
		case 6:
			col6 = document.getElementsByClassName("col6");
			//controlCols(col6, col6height);

			for (var i = 0; i < col6.length; i++) {
				if (col6[i].offsetTop == col6height) {
					enterPlCom(col6height, col6[i]);
					col6height -= 86;
				}
			}

			break;

		case 7:
			col7 = document.getElementsByClassName("col7");
			//controlCols(col7, col7height);

			for (var i = 0; i < col7.length; i++) {
				if (col7[i].offsetTop == col7height) {
					enterPlCom(col7height, col7[i]);
					col7height -= 86;
				}
			}
			break;


	}


}

///////////////// control ////////////////////////////
function controlCols(ar, colheigh) {


	for (var i = 0; i < ar.length; i++) {
		if (ar[i].offsetTop == colheigh) {
			enter(colheigh, ar[i]);
			colheigh -= 86;
		}
	}
}



////////////checkWinwer  easy level  ////////////////

var counter = 0;
var currentCell;
var nextCell;

var winnerWindow = document.getElementsByClassName("winpop"); //winner div

function checkHorizontal() {
	for (i = 5; i >= 0; i--) {

		for (j = 0; j < 6; j++) {
			currentCell = rows[i].children[j].className;
			nextCell = rows[i].children[j + 1].className;
			if ((currentCell == "yellowcell" || currentCell == "redcell") &&
				(nextCell == "yellowcell" || nextCell == "redcell")) {
				if (currentCell == nextCell) {
					counter++;
					if (counter == 3) {
						
						winnerWindow[0].style.display = "inline-block";
						
						// return true;
					}
					
				}
				else {
					counter = 0;
				}
			}
			

		}//end second for

		counter = 0; // reset counter to zero after each row

	} //end first for
	
}//end function


function checkVertical() {

	for (j = 0; j < 7; j++) {
		for (i = 5; i > 0; i--) {
			currentCell = rows[i].children[j].className;
			nextCell = rows[i - 1].children[j].className;
			if ((currentCell == "yellowcell" || currentCell == "redcell") &&
				(nextCell == "yellowcell" || nextCell == "redcell")) {

				if (currentCell == nextCell) {
					counter++;
					if (counter == 3) {
						winnerWindow[0].style.display = "inline-block";
						
					}
				}
				else {

					counter = 0;

				}
			}
			

		}//inner for

		counter = 0;  // reset counter to zero after each column
	}//outer for

}// end checkVertical



////////////checkWinwer  Hard level  ////////////////

function checkHorizontalHard() {
	for (i = 5; i >= 0; i--) {

		for (j = 0; j < 6; j++) {
			currentCell = rows[i].children[j].className;
			nextCell = rows[i].children[j + 1].className;
			if ((currentCell == "yellowcell" || currentCell == "redcell") &&
				(nextCell == "yellowcell" || nextCell == "redcell")) {
				if (currentCell == nextCell) {
					counter++;
					if (counter == 4) {
						winnerWindow[0].style.display = "inline-block";
						
					}

				}
				else {
					counter = 0;
				}
			}
			

		}//end second for

		counter = 0; // reset counter to zero after each row

	} //end first for
	//return false;
}//end function


function checkVerticalHard() {

	for (j = 0; j < 7; j++) {
		for (i = 5; i > 0; i--) {
			currentCell = rows[i].children[j].className;
			nextCell = rows[i - 1].children[j].className;
			if ((currentCell == "yellowcell" || currentCell == "redcell") &&
				(nextCell == "yellowcell" || nextCell == "redcell")) {

				if (currentCell == nextCell) {
					counter++;
					if (counter == 4) {
						winnerWindow[0].style.display = "inline-block";
						// return true;
					}
				}
				else {

					counter = 0;

				}
			}
			

		}//inner for

		counter = 0;  // reset counter to zero after each column
	}//outer for

}// end checkVertical


function checkDiagonal() {

	// check down to right direction
	var n = 0;
	for (var j = 0; j < 5; j++) {
		currentCell = rows[n].children[j].className;
		nextCell = rows[n + 1].children[j + 1].className;

		if (currentCell == nextCell) {
			counter++;
			if (counter == 4)
				alert("winner");
		}
		else {

			counter = 0;
		}
		n++;

	}

	var v = 1;
	for (var j = 0; j < 4; j++) {
		currentCell = rows[v].children[j].className;
		nextCell = rows[v + 1].children[j + 1].className;

		if (currentCell == nextCell) {
			counter++;
			if (counter == 4)
				alert("winner");
		}
		else {

			counter = 0;
		}
		v++;

	}

	var vv = 0;
	for (var j = 1; j < 6; j++) {
		currentCell = rows[vv].children[j].className;
		nextCell = rows[vv + 1].children[j + 1].className;

		if (currentCell == nextCell) {
			counter++;
			if (counter == 4)
				alert("winner");
		}
		else {

			counter = 0;
		}
		vv++;
	}

	var s = 0;
	for (var j = 2; j < 6; j++) {
		currentCell = rows[s].children[j].className;
		nextCell = rows[s + 1].children[j + 1].className;

		if (currentCell == nextCell) {
			counter++;
			if (counter == 4)
				alert("winner");
		}
		else {

			counter = 0;
		}
		s++;
	}





	//------------------------------------------------------------------------------------------------------
	// check down to left  direction
	var x = 0;
	for (var j = 6; j > 1; j--) {
		currentCell = rows[x].children[j].className;
		nextCell = rows[x + 1].children[j - 1].className;
		if (currentCell == nextCell) {
			counter++;
			if (counter == 4)
				alert("Win");
		}
		else {
			counter = 0;
		}
		x++;
	}

	var z = 0;
	for (var j = 5; j > 0; j--) {


		currentCell = rows[z].children[j].className;
		nextCell = rows[z + 1].children[j - 1].className;
		if (currentCell == nextCell) {
			counter++;
			if (counter == 4)
				alert("Win");
		}
		else {
			counter = 0;
		}

		z++;
	}


	var a = 0;
	for (var j = 4; j > 0; j--) {


		currentCell = rows[a].children[j].className;
		nextCell = rows[a + 1].children[j - 1].className;
		if (currentCell == nextCell) {
			counter++;
			if (counter == 4)
				alert("Win");
		}
		else {
			counter = 0;
		}
		a++;
	}


	var f = 1;
	for (var j = 6; j > 2; j--) {

		currentCell = rows[f].children[j].className;
		nextCell = rows[f + 1].children[j - 1].className;
		if (currentCell == nextCell) {
			counter++;
			if (counter == 4)
				alert("Win");
		}
		else {
			counter = 0;
		}

		f++;
	}







} // end of function checkDiagonal
	
function Random(min,max)
{

	return Math.floor(Math.random() * (max - min + 1) + min);
}


function replay()
{
	location.reload(); //reload game page again
	
} // replay again

function exit()
{
	
	var confirm = window.confirm("are you want to exit ?");
	if (confirm == true)
	{
		history.back();
	}
	
}  // exit game and go to home

window.addEventListener("load", function () {

	rowCells;
	rows = document.getElementsByTagName("tr");
	ball = document.getElementsByClassName("ball1")[0]; // yellow ball
	ball2 = document.getElementsByClassName("ball2")[0];// red ball
	ball2.style.display = "none";
	tableObj = document.getElementsByClassName("table")[0];

	// showing timer in connect four page

	var timer = document.getElementsByClassName("timer");

	var strat = document.getElementById("start");
	var stop = document.getElementById("stop");
	var minute1 = document.getElementById("minute1");
	var second1 = document.getElementById("second1");
	var minute2 = document.getElementById("minute2");
	var second2 = document.getElementById("second2");
	counter1 = 0;
	counter2 = 0;
	minuteCounter1 = 0;
	minuteCounter2 = 0;

	timerId = setInterval(function () {
		counter1++;

		if (counter1 == 10) { counter1 = 0; counter2++; second2.innerText = counter2; }
		if (counter2 == 6) { counter2 = 0; second2.innerText = counter2; minuteCounter1++; minute1.innerText = minuteCounter1; }
		if (minuteCounter1 == 10) {
			minuteCounter1 = 0;
			minute1.innerText = minuteCounter1;
			minuteCounter2++;
			minute2.innerText = minuteCounter2;
		}
		if (minuteCounter2 == 6)
			clearInterval(timerId);

		second1.innerText = counter1;


	}, 1000);


	showGameLevel();   // passing gamelevel from home to connect4 page

	checkCompititor();

	 //player&player
	if (compititor[0] == "withPlayer") {

		//easy level
		if (gameLvl[1] == "Easy")
		{
			
			
			document.addEventListener('keyup', function (event) {
				global = event;
				
				switch (event.keyCode) {
					case 39: //ascii of right arrow


						// player1 yellow
						if (playerRol == 0) {

							if (selectCol1 > 6) {
								event.preventDefault;
							}
							else {
								moveRight(ball, ballposition);

								ballposition += 85;
								selectCol1++;
							}
						}
						// player2 red
						else {
							if (selectCol2 > 6) {
								event.preventDefault;
							}
							else {
								moveRight(ball2, ball2position);

								ball2position += 85;
								selectCol2++;
							}
						}


						break;

					case 37:// ascii of left arrow                

						if (playerRol == 0) {

							if (selectCol1 <= 1) {
								event.preventDefault;
							}
							else {
								moveLeft(ball, ballposition);

								ballposition -= 85;
								selectCol1--;
							}
						}
						else {
							if (selectCol2 <= 1) {
								event.preventDefault;
							}
							else {
								moveLeft(ball2, ball2position);

								ball2position -= 85;
								selectCol2--;
							}
						}

						break;
						
					case 13:
						
						if (playerRol == 0) {
							
							switchSelectCol_pl(selectCol1);
							checkVertical();
							checkHorizontal();
							
						}
						else {
							
							switchSelectCol_pl(selectCol2);
							checkVertical();
							checkHorizontal();
						
						}
						

						break;

				}

				
			});  // end key up
			
		}

		//hard level

		if (gameLvl[1] == "hard") {


			document.addEventListener('keyup', function (event) {
				global = event;

				switch (event.keyCode) {
					case 39: //ascii of right arrow


						// player1 yellow
						if (playerRol == 0) {

							if (selectCol1 > 6) {
								event.preventDefault;
							}
							else {
								moveRight(ball, ballposition);

								ballposition += 85;
								selectCol1++;
							}
						}
						// player2 red
						else {
							if (selectCol2 > 6) {
								event.preventDefault;
							}
							else {
								moveRight(ball2, ball2position);

								ball2position += 85;
								selectCol2++;
							}
						}


						break;

					case 37:// ascii of left arrow                

						if (playerRol == 0) {

							if (selectCol1 <= 1) {
								event.preventDefault;
							}
							else {
								moveLeft(ball, ballposition);

								ballposition -= 85;
								selectCol1--;
							}
						}
						else {
							if (selectCol2 <= 1) {
								event.preventDefault;
							}
							else {
								moveLeft(ball2, ball2position);

								ball2position -= 85;
								selectCol2--;
							}
						}

						break;

					case 13:

						if (playerRol == 0) {

							switchSelectCol_pl(selectCol1);
							checkHorizontalHard();
							checkVerticalHard();
							checkDiagonal();
						}
						else {

							switchSelectCol_pl(selectCol2);
							checkHorizontalHard();
							checkVerticalHard();
							checkDiagonal();
						}


						break;

				}


			});  // end key up

		}
	}

	 //player&computer

	else if (compititor[0] == "withComputer") {

		//easy level
		if (gameLvl[1] == "Easy")
		{
			document.addEventListener('keyup', function (event) {

				switch (event.keyCode) {
					case 39: //ascii of right arrow


						//player1 yellow
						if (playerRol == 0) {
							if (selectCol1 > 6) {
								event.preventDefault;
							}
							else {
								moveRight(ball, ballposition);

								ballposition += 85;
								selectCol1++;
							}


						}



						break;

					case 37:// ascii of left arrow                


						if (playerRol == 0) {

							if (selectCol1 <= 1) {
								event.preventDefault();
							}
							else {
								moveLeft(ball, ballposition);

								ballposition -= 85;
								selectCol1--;
							}
						}


						break;


					case 13:



						if (playerRol == 0) {
							switchSelectCol_com(selectCol1);
							checkHorizontal();
							checkVertical();
							
							random = Random(nowCell, nowCell + 2);
							if (random < 0)
							{
								random = 1;
								selectCol2 = random;
								switchSelectCol_com(selectCol2);
								checkHorizontal();
								checkVertical();
							}
							else if (random > 6)
							{
								random = 6;
								selectCol2 = random;
								switchSelectCol_com(selectCol2);
								checkHorizontal();
								checkVertical();
							}
							else
							{

								selectCol2 = random;
								switchSelectCol_com(selectCol2);
								checkHorizontal();
								checkVertical();
							}
							
							
						}



						break;

				}



			});  // end key up
		}

		//hard level
		if (gameLvl[1] == "hard")
		{
			document.addEventListener('keyup', function (event) {

				switch (event.keyCode) {
					case 39: //ascii of right arrow


						//	 player1 yellow
						if (playerRol == 0) {
							if (selectCol1 > 6) {
								event.preventDefault;
							}
							else {
								moveRight(ball, ballposition);

								ballposition += 85;
								selectCol1++;
							}


						}



						break;

					case 37:// ascii of left arrow                


						if (playerRol == 0) {

							if (selectCol1 <= 1) {
								event.preventDefault();
							}
							else {
								moveLeft(ball, ballposition);

								ballposition -= 85;
								selectCol1--;
							}
						}


						break;


					case 13:



						if (playerRol == 0) {
							switchSelectCol_com(selectCol1);
							checkVerticalHard();
							checkHorizontalHard();
							checkDiagonal();


							random = Random(nowCell, nowCell + 2);
							if (random < 0) {
								random = 1;
								selectCol2 = random;
								switchSelectCol_com(selectCol2);
								checkHorizontalHard();
								checkVerticalHard();
								checkDiagonal();
							}
							else if (random > 6) {
								random = 6;
								selectCol2 = random;
								switchSelectCol_com(selectCol2);
								checkVerticalHard();
								checkHorizontalHard();
								checkDiagonal();

							}
							else {

								selectCol2 = random;
								switchSelectCol_com(selectCol2);
								checkHorizontalHard();
								checkVerticalHard();
								checkDiagonal();
							}


							

						}

						break;

				}
			});  // end key up
		}
	
	}


}); // end load