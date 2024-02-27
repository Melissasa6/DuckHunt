mouse = document.querySelector('.mouse');
let dog= document.getElementById("dog")

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


