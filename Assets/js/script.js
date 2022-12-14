// For setting the timer
var timeEl = document.querySelector(".time");

var secondsLeft = 75;

function setTime() {
    var timerInterval = setInterval(function(){
    secondsLeft--;
    timeEl.textContent = "Time: " + secondsLeft;

    if(secondsLeft === 0){
        clearInterval(timerInterval);

    }
}, 1000);
}



//The start button to start the quiz
var startTimer = document.querySelector("#startButton");

startTimer.addEventListener("click", function() {
    var timerInterval = setInterval(function(){
    secondsLeft--;
    timeEl.textContent = "Time: " + secondsLeft;

    if(secondsLeft === 0){
        clearInterval(timerInterval);

    }
}, 1000);
})

