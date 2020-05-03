var quotes = ["Love For All, Hatred For None. – Khalifatul Masih III", "Change the world by being yourself. – Amy Poehler", "Every moment is a fresh beginning. – T.S Eliot", "Never regret anything that made you smile. – Mark Twain", "Die with memories, not dreams. – Unknown ", "Aspire to inspire before we expire. – Unknown ", "Everything you can imagine is real. – Pablo Picasso", "Simplicity is the ultimate sophistication. – Leonardo da Vinci"]

function getRandomInt() {
  return Math.floor(Math.random() * Math.floor(7));
}

function pickQuote()
{
	genSound = new sound("sound/gen.mp3");
	genSound.play();
	document.getElementById("quote").innerHTML= quotes[getRandomInt()];
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