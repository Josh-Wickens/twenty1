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


var playerTotal = 0;
var computerTotal = 0;
let cards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

window.onload = function () {
    shuffleCards();
}



function computerDrawCard(computerCard) {
    return Math.floor(Math.random() * 10) + 1;

}

function playerDrawCard(playerCard) {
    return Math.floor(Math.random() * 10) + 1;

}


document.getElementById("computer-card-number").innerHTML = computerDrawCard();
countCards();
document.getElementById("player-card-number").innerHTML = playerDrawCard();
countCards();



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

function howToPlay() {

}