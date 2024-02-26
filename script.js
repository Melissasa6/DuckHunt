mouse = document.querySelector('.mouse')


window.addEventListener('mousemove', function(move){
    mouse.style.left = move.pageX + "px";
    mouse.style.top = move.pageY + "px";

})

//DOG
/*function dogRunAnimation(){
    const mainContainer = document.getElementById('main-container');
    let dogRunning = document.createElement('div');
    dogRunning.setAttribute("id", "dogRun");
    mainContainer.appendChild(dogRunning);
}*/