
mouse = document.querySelector('.mouse');
let dog= document.getElementById("dog")

const mainFieldContainer = document.getElementById("main-field-container");
const bodyContainer = document.body;

const bullet1Cover = document.querySelector(".bullet1-cover");
const bullet2Cover = document.querySelector(".bullet2-cover");
const bullet3Cover = document.querySelector(".bullet3-cover");

const bullet = new Audio("audio/gun-shop.mp3");

let maxFailedDucksToGameOver = 3;
let failedDucks = 0;
let bulletCounter = 3;

let isEnableShooting = false;
let isGameOver = false;


// MOUSE

window.addEventListener('mousemove', function(move){
mouse.style.left = move.pageX + "px";
mouse.style.top = move.pageY + "px";

})

function dogLaugh(){
    let dogLaugh= document.getElementById("dogLaughContainer");
    dogLaugh.classList.add("animate");
    setTimeout(() => {dogLaugh.classList.remove("animate")}, 3000);
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
    gameTimerContainer.appendChild(timeElement);
}



// document.addEventListener('click', ()=> {
//     if(isEnableShooting){
//         bulletCounter--;
//         bullet.play();
//     } if (bulletCounter ===2) {
//         bullet1Cover.style.display = "inline";
//     } else if ( bulletCounter ===1) {
//         bullet1Cover.style.display, bullet2Cover.style.display = "inline";
//     }else if ( bulletCounter ===1) {
//         bullet1Cover.style.display, bullet2Cover.style.display, bullet3Cover.style.display = "inline";
//     }
//     });




function play() {
    stopIntroAudio();
    //startGame();
}



function stopIntroAudio() {
    const introAudio = document.getElementById('intro-audio');
    introAudio.pause();
    introAudio.currentTime = 0;
}


//DOG
/*function dogRunAnimation(){
    const mainContainer = document.getElementById('main-container');
    let dogRunning = document.createElement('div');
    dogRunning.setAttribute("id", "dogRun");
    mainContainer.appendChild(dogRunning);
}*/




