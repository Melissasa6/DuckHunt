    let mouse = document.querySelector('.mouse');
    let duck = document.querySelector('.duck');

    const mainFieldContainer = document.getElementById("main-field-container");
    
    let dog= document.getElementById("dog");
    let ducks = [];
    


    const bullet1Cover = document.querySelector(".bullet1-cover");
    const bullet2Cover = document.querySelector(".bullet2-cover");
    const bullet3Cover = document.querySelector(".bullet3-cover");

    const bullet = new Audio("audio/gun-shot.mp3");
    
    let score = 0; 
    let bulletCounter = 103;
    let isGameOver = false;
    let maxFailedDucksToGameOver = 3;
    let failedDucks = 0;
    let hitDucks = 0;
    let isEnableShooting = false;



    window.addEventListener("load", () => {  
    startGame();
    });    

   

function startGame() {
    console.log("Starting game...");
    disableShooting();    
    dogMove();
    setTimeout(() => {displayStartingTimer(3);}, 6000);
    showBullets();
    
}


// SHOOT 

document.addEventListener('click', ()=> {
    if(isEnableShooting === false){
        return;
    }
    bullet.play();
    bulletCounter--;
if (bulletCounter ===2) {
    bullet1Cover.style.display = "inline";
} else if ( bulletCounter ===1) {
    bullet1Cover.style.display, bullet2Cover.style.display = "inline";
}else if ( bulletCounter ===0) {
    bullet1Cover.style.display, bullet2Cover.style.display, bullet3Cover.style.display = "inline";
    disableShooting();
    
}
});

function enableShooting() {
    isEnableShooting = true;
    document.getElementById("mouse").hidden = false;
}

function disableShooting() {
    isEnableShooting = false;
    document.getElementById("mouse").hidden = true;
    
}

duck?.addEventListener('click', function() {
    console.log("HIT");
    totalDucksKilled++;
    
});


// MOUSE

window.addEventListener('mousemove', function(move){
mouse.style.left = move.pageX + "px";
mouse.style.top = move.pageY + "px";

})

function dogMove(){
    let dogMove= document.getElementById("dogRun");
    dogMove.classList.add("dogRunContainer");
    setTimeout(() => {dogMove.classList.remove("dogRunContainer")},6000);
}

function dogLaugh(){
    let dogLaugh= document.getElementById("dogLaughContainer");
    dogLaugh.classList.add("animate");
    setTimeout(() => {dogLaugh.classList.remove("animate")}, 3000);
    const laugh = new Audio("audio/laugh.wav");
    dogLaugh.classList.add("dogLaughAnimate");
    setTimeout(() => {dogLaugh.classList.remove("dogLaughAnimate")}, 3000);
}

function dogGotDuck(){
    let dogGotDuck= document.getElementById("dogGotDuckContainer");
    dogGotDuck.classList.add("dogGotDuckAnimate");
    setTimeout(() => {dogGotDuck.classList.remove("dogGotDuckAnimate")}, 3000);
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
            setTimeout(() => {
                timeElement.remove();
                enableShooting();
            }, 1000);
        }
    };
    updateTimer();
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
    hitDucksDisplay();
    startGame();
    stopIntroAndGameOverAudio()
}


// DUCKS

function hitDucksDisplay() {
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


