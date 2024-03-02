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

document.addEventListener('click', ()=> {
         bullet.play();
     if (bulletCounter ===2) {
         bullet1Cover.style.display = "inline";
     } else if ( bulletCounter ===1) {
         bullet1Cover.style.display, bullet2Cover.style.display = "inline";
     }else if ( bulletCounter ===0) {
         bullet1Cover.style.display, bullet2Cover.style.display, bullet3Cover.style.display = "inline";
     }
     });


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

// ===============================================================================
// =================   DUCK FLY   ================================================
// ===============================================================================

function play() {
    let xO = getRandomInt(100);
    let duck1 = createDuck(xO, 35);
    
    duck1.addEventListener("animationend", () => {
        
        console.log("animation end")
        
        xO = duck1.positionX;
        yO = duck1.positionY;

        // Remove all the classes from div
        duck1.removeAttribute('class');
          
    });

}

const createDuck = (xO, yO) => {

    // DEFINE ORIGIN IF IT DOES NOT EXITS
    if (xO === null) {
        xO = getRandomInt(100);
    }

    if (yO === null) {
        yO = 35;
    }

    // DEFINE RANDOM DESTINATION 
    let posX = getRandomInt(100);
    console.log(posX);
    let posY = getRandomInt(35);
    console.log(posY);

    // CREATE DIV DUCK AND ASSERT POSITIONS
    let root = document.querySelector(':root');
    let duck = document.createElement("div");
    duck.id = getRandomInt(50);
    duck.positionXO = xO;
    duck.positionYO = yO;
    duck.positionX = posX;
    duck.positionY = posY;
    
    // DEFINE CLASS BASED ON POSITION VALUES
    defineMovement(xO, yO, posX, posY, duck);
    root.append(duck);

    // DETECT ANIMATION AND AND DEFINE NEW MOVE
    
    
    return duck;
}

function defineMovement(xO, yO, posX, posY, duck) {

    console.log("define move");
    if (xO === posX) {
        if (yO === posY) {
            console.log("generate new posY");
            y = getRandomInt(0,35);
        }
        // ------ FLY DOWN ------
        if (yO > posY) {
            console.log("FLY DOWN");
        
            
            // SET PROPERTIES POSITION

            duck.classList.add("duckFlyUp");
            duck.classList.add("duckFlyUpAnimation");

        }

        // ------ FLY UP -------
        if (yO < posY) {

            console.log("FLY UP");
            // SET PROPERTIES POSITION

            duck.classList.add("duckFlyUp");
            duck.classList.add("duckFlyUpAnimation");

        }
    }

    if (xO > posX) {
        // --------- FLY BACK HORIZONTAL ---------
        if (yO === posY) {
            console.log("FLY BACK");
            duck.style.setProperty('--backDuckOX', `${xO}vw`);
            duck.style.setProperty('--backDuckOY', `${yO}vw`);
            duck.style.setProperty('--backDuckX', `${posX}vw`);
            duck.style.setProperty('--backDuckY', `${posY}vw`);

            duck.classList.add("duckFlyBack");
            duck.classList.add("duckFlyBackAnimation");
        }

        // -------- LEFT DOWN ---------------------
        if (yO < posY) {
            console.log("LEFT DOWN");
            duck.style.setProperty('--leftDownXO', `${xO}vw`);
            duck.style.setProperty('--leftDownYO', `${yO}vw`);
            duck.style.setProperty('--leftDownX', `${posX}vw`);
            duck.style.setProperty('--leftDownY', `${posY}vw`);

            duck.classList.add("duckFlyDiagonalLeftDown");
            duck.classList.add("diagonalLeftDownAnimation");
        }

        // -------- LEFT UP ----------------------

        if (yO > posY) {
            console.log("LEFT UP");
            duck.style.setProperty('--leftUpXO', `${xO}vw`);
            duck.style.setProperty('--leftUpYO', `${yO}vw`);
            duck.style.setProperty('--leftUpX', `${posX}vw`);
            duck.style.setProperty('--leftUpY', `${posY}vw`);

            duck.classList.add("duckFlyDiagonalLeftUp");
            duck.classList.add("diagonalLeftUpAnimation");
        }
    }

    if (xO < posX) {
        
        // -------- LEFT TO RIGHT -----------
        if (yO === posY){
            console.log("LEFT TO RIGHT");
            duck.style.setProperty('--duckXO', `${xO}vw`);
            duck.style.setProperty('--duckYO', `${yO}vw`);
            duck.style.setProperty('--duckX', `${posX}vw`);
            duck.style.setProperty('--duckY', `${posY}vw`);

            duck.classList.add("duckFlyRight");
            duck.classList.add("duckFlyRightAnimation"); 
        }

        // -------- RIGHT DOWN -------------
        if (yO < posY) {
            console.log("RIGHT DOWN");
            duck.style.setProperty('--rightDownXO', `${xO}vw`);
            duck.style.setProperty('--rightDownYO', `${yO}vw`);
            duck.style.setProperty('--rightDownX', `${posX}vw`);
            duck.style.setProperty('--rightDownY', `${posY}vw`);

            duck.classList.add("duckFlyDiagonalRightDown");
            duck.classList.add("diagonalRightDownAnimation"); 

        }

        // ------- RIGHT UP -----------------
        if (yO > posY) {
            console.log("RIGHT UP");
            duck.style.setProperty('--rUpDuckXO', `${xO}vw`);
            duck.style.setProperty('--rUpDuckYO', `${yO}vw`);
            duck.style.setProperty('--rUpDuckX', `${posX}vw`);
            duck.style.setProperty('--rUpDuckY', `${posY}vw`);

            duck.classList.add("duckFlyDiagonalRightUp");
            duck.classList.add("diagonalRightUpAnimation"); 

        }

    }

}



function getRandomInt(max) {
    return Math.floor(Math.random() * max);

}

function getRandomIntInclusive(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled); // The maximum is inclusive and the minimum is inclusive
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



