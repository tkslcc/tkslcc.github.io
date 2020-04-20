function getRandomInt() {
  return Math.floor(Math.random() * Math.floor(99));
}
function restart() {
	document.getElementById("button1").style.display = 'none';
	num = getRandomInt();
	document.getElementById("pic").src="img/start.jpg";
	document.getElementById("outcome").innerHTML="";
	document.getElementById("guess").value="";
	console.log(num);
	guesses = 0;
}
function switchImage()
{
	document.getElementById("guesscount").innerHTML= guessedNums;
	guesses += 1;
	document.getElementById("guesscount").innerHTML= "Guess counter: " + guesses;
	if(document.getElementById("guess").value == num){
		if (guesses == 1){
			document.getElementById("pic").src="img/nice.jpg";
			document.getElementById("outcome").innerHTML="Correct! You got it in one try!";
			document.getElementById("button1").style.display = 'block';
		}
		else {
			document.getElementById("pic").src="img/correct.jpg";
			document.getElementById("outcome").innerHTML="Correct!";
			document.getElementById("button1").style.display = 'block';
		}
	}
	if(document.getElementById("guess").value > num){
		document.getElementById("pic").src="img/toohigh.jpg";
		document.getElementById("outcome").innerHTML="Too high!";
		guessedNums[guessedNums.length] = document.getElementById("guess").value;
	}
	if(document.getElementById("guess").value < num){
		document.getElementById("pic").src="img/toolow.jpg";
		document.getElementById("outcome").innerHTML="Too low!";
		guessedNums[guessedNums.length] = document.getElementById("guess").value;
	}
	if(document.getElementById("guess").value % 1 != 0){
		document.getElementById("pic").src="img/error.jpg";
		document.getElementById("outcome").innerHTML="Numbers only!";
	}
	document.getElementById("guesses").innerHTML= "Previous guesses: " + guessedNums;
}
var guessedNums = [];
var num = getRandomInt();
var guesses = 0;
console.log(num);
