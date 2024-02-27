mouse = document.querySelector('.mouse')


window.addEventListener('mousemove', function(move){
    mouse.style.left = move.pageX + "px";
    mouse.style.top = move.pageY + "px";

})


