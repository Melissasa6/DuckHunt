
let mouse = document.querySelector('.mouse');
let dog= document.getElementById("dog");

const mainFieldContainer = document.getElementById("main-field-container");
const bodyContainer = document.body;

const bullet1Cover = document.querySelector(".bullet1-cover");
const bullet2Cover = document.querySelector(".bullet2-cover");
const bullet3Cover = document.querySelector(".bullet3-cover");

const bullet = new Audio("audio/gun-shot.mp3");

let maxFailedDucksToGameOver = 3;
let failedDucks = 0;
let bulletCounter = 3;
let hitDucks = 0;

let isEnableShooting = false;
let isGameOver = false;

let score=0;


// MOUSE

window.addEventListener('mousemove', function(move){
mouse.style.left = move.pageX + "px";
mouse.style.top = move.pageY + "px";

})

function dogLaugh(){
    let dogLaugh= document.getElementById("dogLaughContainer");
    dogLaugh.classList.add("animate");
    setTimeout(() => {dogLaugh.classList.remove("animate")}, 3000);
    const laugh = new Audio("audio/laugh.wav");
}

function dogGotDuck(){
    let dogGotDuck= document.getElementById("dogGotDuckContainer");
    dogGotDuck.classList.add("animate1");
    setTimeout(() => {dogGotDuck.classList.remove("animate1")}, 3000);
}


//STARTING TIMER
let gameStartingEndTimer;

function displayStartingTimer(seconds){

    gameStartingEndTimer = Date.now() + (seconds * 1000);

    const gameTimerContainer = document.getElementById("starting-timer");
    const timeElement = document.createElement("div");
    timeElement.setAttribute("id", "timer");
    timeElement.style.fontFamily ="DuckHuntFont";
    timeElement.style.fontSize = "400%";
    timeElement.style.color = "yellow";
    gameTimerContainer.appendChild(timeElement);


    const updateTimer = () => {
        const currentTime = Date.now();
        const timeLeft = Math.ceil((gameStartingEndTimer - currentTime) / 1000);

        if (timeLeft > 0) {
            timeElement.textContent = `${timeLeft}`;
            setTimeout(updateTimer, 1000);
        } else {
            timeElement.textContent = 'SHOOT';
            setTimeout(() => timeElement.remove(), 1000);
        }
    };
    updateTimer();
}



document.addEventListener('click', ()=> {
     if(isEnableShooting){
         bulletCounter--;
         bullet.play();
     } if (bulletCounter ===2) {
         bullet1Cover.style.display = "inline";
     } else if ( bulletCounter ===1) {
         bullet1Cover.style.display, bullet2Cover.style.display = "inline";
     }else if ( bulletCounter ===1) {
         bullet1Cover.style.display, bullet2Cover.style.display, bullet3Cover.style.display = "inline";
     }
     });




function play() {
    stopIntroAndGameOverAudio();
    startGame();
}


function startGame() {
    displayStartingTimer(3);
    showBullets();

}


function stopIntroAndGameOverAudio() {
    const introAndGameOverAudio = document.getElementsByClassName('audio');
    introAndGameOverAudio.pause();
    introAndGameOverAudio.currentTime = 0;
}


function refreshScore(){
    let score = document.querySelector(".score");
    score.innerHTML = `${totalDucksKilled * 100}`;
}

function showBullets() {
    const bulletCounter = document.getElementById("bullet-counter");
    const childDivs = bulletCounter.querySelectorAll("div");
    childDivs.forEach((div) => (div.style.display = "none"));
}



// GAME OVER

const GameOverDiv = document.getElementById("game-over-container");
const restartButton = document.getElementById("restart-button");


function displayGameOver(score) {
   isGameOver = true;
    const scoreElement = document.getElementById("score");
    scoreElement.innerHTML = score;
    GameOverDiv.style.display = "flex";

    if(isGameOver = true) {
        window.location.href= 'gameOver.html';
    }
}


function replay () {
    hitDuckesDisplay();
    startGame();
    stopIntroAndGameOverAudio()

}




function hitDuckesDisplay() {
    let ducks = Array.from(document.querySelector(".little-ducks").children);
    switch(hitDucks) {
        case 5: ducks[4].style.color = "red"; ducks[3].style.color = "red"; ducks[2].style.color = "red"; ducks[1].style.color = "red"; ducks[0].style.color = "red";
        break;
        case 4: ducks[3].style.color = "red"; ducks[2].style.color = "red"; ducks[1].style.color = "red"; ducks[0].style.color = "red";
        break;
        case 3: ducks[2].style.color = "red"; ducks[1].style.color = "red"; ducks[0].style.color = "red";
        break;
        case 2: ducks[1].style.color = "red"; ducks[0].style.color = "red";
        break; 
        case 1: ducks[0].style.color = "red";
        break;
        case 0: ducks.forEach(duck => {duck.style.color = "white";});
        break;
        default: ducks.forEach(duck => {duck.style.color = "red";});
        break;
    } 
}




