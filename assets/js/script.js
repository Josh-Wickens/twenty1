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

let playGameBtn = document.getElementById("play-button");
playGameBtn.addEventListener("click", playGame);

var playerTotal = 0;
var computerTotal = 0;
var cards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function shuffleCards() {
    let newPos, temp;
    for (let i = cards.length - 1; i > 0; i--) {
        newPos = Math.floor(Math.random() * (i + 1));
        temp = cards[i];
        cards[i] = cards[newPos];
        cards[newPos] = temp;
    }
    return cards;
}
console.log(cards);


function playGame(event) {
    shuffleCards();
    console.log(cards);
    compCard = cards.pop();
    playCard = cards.pop();
    playCard = cards.pop();

}





function computerDrawCard() {
    return Math.floor(Math.random() * 10) + 1;

}

function playerDrawCard() {
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