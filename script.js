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

    let bulletCounter = 3;

    let isGameOver = false;
    let maxFailedDucksToGameOver = 3;
    let failedDucks = 0;
    let hitDucks = 2;
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
    setTimeout(() => {
        displayGameOver(score);}, 1000);
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
    hitDucks++;
    hitDucksDisplay();
    refreshScore();
    
});




// MOUSE

window.addEventListener('mousemove', function(move){
mouse.style.left = move.pageX + "px";
mouse.style.top = move.pageY + "px";

})


// DOG

function dogMove(){
    let dogMove= document.getElementById("dogRun");
    dogMove.classList.add("dogRunContainer");
    setTimeout(() => {
        dogMove.classList.remove("dogRunContainer")},6000);
    setTimeout(() => {
        let sniff = new Audio("audio/sniff.mp3");
        sniff.play();
    }, 2000);
}


function dogLaugh(){
    let dogLaugh= document.getElementById("dogLaughContainer");
    dogLaugh.classList.add("animate");
    setTimeout(() => {dogLaugh.classList.remove("animate")}, 3000);
    const laugh = new Audio("audio/laugh.wav");
    laugh.play();
    dogLaugh.classList.add("dogLaughAnimate");
    setTimeout(() => {dogLaugh.classList.remove("dogLaughAnimate")}, 3000);
}

function dogGotDuck(){
    let dogGotDuck= document.getElementById("dogGotDuckContainer");
    dogGotDuck.classList.add("dogGotDuckAnimate");
    setTimeout(() => {dogGotDuck.classList.remove("dogGotDuckAnimate")}, 3000);
}


// STARTING TIMER
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
    score.innerHTML = `${hitDucks * 100}`;
}

function showBullets() {
    const bulletCounter = document.getElementById("bullet-counter");
    const childDivs = bulletCounter.querySelectorAll("div");
    childDivs.forEach((div) => (div.style.display = "none"));

}



// GAME OVER

const GameOver = document.getElementById("game-over-wrapper");

function displayGameOver(score) {
    isGameOver = true;

    let scoreElement = document.getElementById("score");

    setTimeout(() => {
        const gameOverAudio = new Audio("audio/gameOver.wav");
        gameOverAudio.play();
    }, 1000);
 
    scoreElement.innerHTML = score;
    GameOver.style.display = "flex";
    
    
}

function replay () {
    hitDucksDisplay();
    startGame();
}


// DUCKS COUNTER

function hitDucksDisplay() {
    console.log("hitduckdisplay");
    let ducks = Array.from(document.querySelector(".little-ducks").children);
    switch(hitDucks) {
        case 5: ducks[4].style.color = "yellow"; ducks[3].style.color = "yellow"; ducks[2].style.color = "yellow"; ducks[1].style.color = "yellow"; ducks[0].style.color = "yellow";
        break;
        case 4: ducks[3].style.color = "yellow"; ducks[2].style.color = "yellow"; ducks[1].style.color = "yellow"; ducks[0].style.color = "yellow";
        break;
        case 3: ducks[2].style.color = "yellow"; ducks[1].style.color = "yellow"; ducks[0].style.color = "yellow";
        break;
        case 2: ducks[1].style.color = "yellow"; ducks[0].style.color = "yellow";
        break; 
        case 1: ducks[0].style.color = "yellow";
        break;
        case 0: ducks.forEach(duck => {duck.style.color = "white";});
        break;
        default: ducks.forEach(duck => {duck.style.color = "yellow";});
        break;
    } 
}


// DUCKS

function shootDuck(){
    hitDucks++;
    refreshScore();

    setTimeout(() => {
        const duckFalling = new Audio("audio/duck-falling.mp3");
        duckFalling.play();
    }, 500)
   
}


function refreshScore(){
    let score = document.querySelector(".score");
    score.innerHTML = `${hitDucks * 100}`;
}
