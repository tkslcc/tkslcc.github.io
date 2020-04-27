var markers = ["X", "O"];
var currentPlayer = 0;
var players = [];
var totals = [];
var winTotals = [7,56,73,84,146,273,292,448];
var gameOver = false;
var winSound;
var tieSound;
var scores = [0, 0];
players[0] = prompt("Enter Player 1's name:");
players[1] = prompt("Enter Player 2's name:");

function startGame()
{
	document.getElementById("scores").innerHTML = "Scoreboard: <br>" + players[0] + ": " + scores[0] + "<br>" + players[1] + ": " + scores[1];
	winSound = new sound("sound/win.mp3");
	tieSound = new sound("sound/tie.mp3");
	var counter = 1;
	var innerDivs = "";
	for (i = 1; i <= 3; i++)
	{
		innerDivs += '<div id="row' + i + '">';
		for (j = 1; j <= 3; j++)
		{
			innerDivs += '<div onclick="playGame(this, ' + counter + ')"></div>'; 
			counter *= 2;
		}
		innerDivs += '</div>';
	}
	document.getElementById("game-board").innerHTML = innerDivs;
	
	totals = [0, 0];
	gameOver = false;
	document.getElementById("game-status").innerText = players[currentPlayer] + "'s turn!";
}

function playGame(clickedDiv, bits){
	if (!gameOver)
	{
		clickedDiv.innerText = markers[currentPlayer];
		
		totals[currentPlayer] += bits;
		if (isWin())
		{
			winSound.play();
			document.getElementById("game-status").innerText = players[currentPlayer] + " Wins!";
			scores[currentPlayer] += 1;
			document.getElementById("scores").innerHTML = "Scoreboard: <br>" + players[0] + ": " + scores[0] + "<br>" + players[1] + ": " + scores[1];
		}
		else if (gameOver)
		{
			document.getElementById("game-status").innerText = "Cat's Game!";
		}
		else
		{
			if (currentPlayer) currentPlayer = 0; else currentPlayer = 1;
			clickedDiv.attributes["0"].nodeValue = "";
			document.getElementById("game-status").innerText = players[currentPlayer] + "'s turn!";
			console.log(totals);
		}
	}
}

function isWin()
{
	for (i = 0; i < winTotals.length; i++)
	{
		if ((totals[currentPlayer] & winTotals[i]) == winTotals[i])
		{
			gameOver = true;
			return true;
		}
	}
	
	if (totals[0]+totals[1] == 511)
	{
		gameOver = true;
		tieSound.play();
	}
	
	return false;
}
function sound(src) {
	 this.sound = document.createElement("audio");
	 this.sound.src = src;
	 this.sound.setAttribute("preload", "auto");
	 this.sound.setAttribute("controls", "none");
	 this.sound.style.display = "none";
	 document.body.appendChild(this.sound);
	 this.play = function(){
	this.sound.play();
	 }
	 this.stop = function(){
	this.sound.pause();
	 }
} 