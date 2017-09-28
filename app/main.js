//Globals
var restartButton = document.getElementById('restartButton');
var spaces = document.getElementsByClassName('space');
var symbols = ['O','X'];
var turn = 0;


// Wait for page to load before doing something
document.onreadystatechange = function(){
	if (document.readyState == "interactive"){
		restartButton.onclick = startGame;
		startGame();
	}
};

function startGame(){

	


	// reset turn counter
	turn = 0;

	// remove winner notification and make sure div is hidden

	//clear board and add click events on squares

	for (i=0;i<spaces.length;i++){
		spaces[i].innerHTML="";
		spaces[i].addEventListener("click", takeSpace);
	}




}

function takeSpace() {

	turn++;
	this.innerHTML = symbols[turn % 2];
	this.removeEventListener("click",takeSpace);
}