var markers = ["X", "O"]
var currentPlayer = 0;
var players = [];
players[0] = prompt("Enter Player 1's name:");
players[1] = prompt("Enter Player 2's name:");

function startGame()
{
	document.getElementById("game-status").innerText = players[currentPlayer] + "'s turn!";
}
function playGame(clickedDiv){
	clickedDiv.innerText = markers[currentPlayer];
	if (currentPlayer) currentPlayer = 0; else currentPlayer = 1;
	clickedDiv.attributes["0"].nodeValue = "";
	document.getElementById("game-status").innerText = players[currentPlayer] + "'s turn!";
}