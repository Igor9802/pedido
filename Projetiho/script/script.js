var audio = document.getElementById('myAudio');
audio.loop = true; 
var button1 = document.getElementById('button-1');
var button2 = document.getElementById('button-2');
var buttonStart = document.getElementById('button-start');
var heartImage = document.getElementById('heart-image');
var moveCount = 0;
var maxMoveCount = 20;
var isMovingAllowed = false;

button1.addEventListener('mouseover', function() {
    if (isMovingAllowed && moveCount < maxMoveCount) {
        var x = Math.floor(Math.random() * (window.innerWidth - button1.offsetWidth));
        var y = Math.floor(Math.random() * (window.innerHeight - button1.offsetHeight));
        button1.style.position = 'absolute';
        button1.style.left = x + 'px';
        button1.style.top = y + 'px';
        moveCount++;
    }
});

function toggleButtons() {
    audio.play();
    buttonStart.style.display = 'none';
    button2.style.display = 'inline-block';
    button1.style.display = 'inline-block';
    isMovingAllowed = true;
}

function accepted() {
    alert('Eu te amo meu amor ❤️, Lanchinho mais tarde?');
    button2.style.display = 'none';
    heartImage.style.display = 'inline-block';
    button1.style.display = 'none';
}

function denied() {
    button1.style.display = 'none'; 
    alert('Diga sim logo!'); 
    
}