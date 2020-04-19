function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}


var nums = prompt("How many numbers do you want to pick? (Must be less than 10)");

if (nums >= 10)
	alert("Invalid number");

var lotNums = [];
var lottoPicks = " ";

for (var i = 0; i < nums; i++){
	lotNums[i] = getRandomInt(nums);
}


for (var i = 0; i < lotNums.length; i++){
	if (i == (lotNums.length - 1)){
		lottoPicks += lotNums[i];
	}
	else{
		lottoPicks = lottoPicks + lotNums[i] + "-";
	}
}

