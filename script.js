    let mouse = document.querySelector('.mouse');
    let duck = document.querySelector('.duck');

    const mainFieldContainer = document.getElementById("main-field-container");
    
    let dog= document.getElementById("dog");
    let ducks = [];
    
    const bullet1Cover = document.querySelector(".bullet1-cover");
    const bullet2Cover = document.querySelector(".bullet2-cover");
    const bullet3Cover = document.querySelector(".bullet3-cover");


    let bulletCounter = 3;

    let isGameOver = false;
    let youWin = false;
    let hitDucks = 0;
    let isEnableShooting = false;
    let ducksPaint = 0;

    let round = 1;
    const maxRound = 6;


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



// SHOOTS

document.addEventListener('click', (event)=> {

    if(isEnableShooting === false){
        return;
    }  

    bulletCounter--;

    const bullet = new Audio("audio/gun-shot.mp3");
    bullet.play();

    
    if (event.target !== duck) {
        dogLaugh();
    }
    hideBullets();
   
});



duck?.addEventListener('click', function() {
    console.log("HIT");
    hitDucks++;
    ducksPaint++;
    hitDucksDisplay();
    displayScore();
    
    resetBulletCounter ()

    setTimeout(() => {
        const duckFalling = new Audio("audio/duck-falling.mp3");
        duckFalling.play();
    }, 500);

    dogGotDuck();

    setTimeout(() => {
        updateRound();
    }, 500);

    
});


function hideBullets() {
     if (bulletCounter ===2) {
        bullet1Cover.style.display = "inline";
    } else if ( bulletCounter ===1) {
        bullet1Cover.style.display, 
        bullet2Cover.style.display = "inline";
    } else if ( bulletCounter ===0) {
        bullet1Cover.style.display, 
        bullet2Cover.style.display, 
        bullet3Cover.style.display = "inline";
    setTimeout(() => {
            displayGameOver(score);}, 1000);
        }
}


function resetBulletCounter () {
    bulletCounter = 4;
    bullet1Cover.style.display = "none";
    bullet2Cover.style.display = "none";
    bullet3Cover.style.display = "none";
}


function enableShooting() {
    isEnableShooting = true;
    document.getElementById("mouse").hidden = false;
}


function disableShooting() {
    isEnableShooting = false;
    document.getElementById("mouse").hidden = true; 
}


function showBullets() {
    const bulletCounter = document.getElementById("bullet-counter");
    const childDivs = bulletCounter.querySelectorAll("div");
    childDivs.forEach((div) => (div.style.display = "none"));
}



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






// GAME OVER

const GameOver = document.getElementById("game-over-wrapper");

function displayGameOver(score) {
    isGameOver = true;

    let scoreElement = document.getElementById("score");

    setTimeout(() => {
        const gameOverAudio = new Audio("audio/gameOver.wav");
        gameOverAudio.play();
    }, 1000);
 
    scoreElement.innerHTML = `${hitDucks * 100}`;
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
    switch(ducksPaint) {
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




// SCORE

function displayScore(){
    let score = document.querySelector(".score");
    score.innerHTML = `${hitDucks * 100}`;
}



// ROUNDS

function updateRound() {

   let rounds = document.querySelector(".roundNumber");

   switch(hitDucks) {
    case 6:
        round++;
        rounds.innerHTML = `${round}`;
        document.body.style.backgroundColor = "pink";
        ducksPaint = 0;
        hitDucksDisplay();
        break;
    case 12:
        round++;
        rounds.innerHTML = `${round}`;
        document.body.style.backgroundColor = "orange";
        ducksPaint = 0;
        hitDucksDisplay();
        break;
    case 18:
        round++;
        rounds.innerHTML = `${round}`;
        document.body.style.backgroundColor = "lightgreen";
        ducksPaint = 0;
        hitDucksDisplay();
        break;
    case 24:
        round++;
        rounds.innerHTML = `${round}`;
        document.body.style.backgroundColor = "lightblue";
        ducksPaint = 0;
        hitDucksDisplay();
        break;
    case 30:
        round++;
        rounds.innerHTML = `${round}`;
        document.body.style.backgroundColor = "lightyellow";
        ducksPaint = 0;
        hitDucksDisplay();
        break;
    case 36:
            displayWinner(score);
        break;
    default:
        break;
}
}


const Winner = document.getElementById("winner-wrapper");
function displayWinner(score) {

     youWin = true;

     let scoreElement = document.getElementById("winnerScore");

    
    const gameOverAudio = new Audio("audio/winner-sound.wav");
    gameOverAudio.play();
   

     scoreElement.innerHTML = `${hitDucks * 100}`;
     Winner.style.display = "flex";

    
 

}



