//* wait for DOM to load/*
//* get the button tags and add event listeners to them/*

/*  commented out code whilst sort game logic!!

document.addEventListener("DOMContentLoaded", function () {
    document.getElementsByTagName("input")[0].focus();
    insertName();
});

*/




/*
function insertName() {

}
*/


let playerTotal = [];
let computerTotal = [];

function runGame() {
    return Math.floor(Math.random() * 10) + 1;
}

var pCards = runGame();
var cCards = runGame();

document.getElementById("computer-card-number").innerHTML = pCards;
document.getElementById("player-card-number").innerHTML = cCards;

function displayCardNumber() {


}

{

}

function howToPlay() {

}

function countCards() {

}

function hit() {

}

function stick() {

}

function bust() {

}

function winRound() {

}

function loseRound() {

}

function drawRound() {

}

function increaseScore() {

}

function loseGame() {

}

function winGame() {

}