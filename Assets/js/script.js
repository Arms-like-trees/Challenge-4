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


var currentQuestion = 0;
document.querySelector("#questionSet").addEventListener('click', function(event){
    var targetEl = event.target;
    var forward = targetEl.dataset.direction;

    if (targetEl.matches("button")) {
        var questionDivs = document.querySelectorAll('#questionSet > div');
        currentQuestion += parseInt(forward,  10);
        questionDivs[currentQuestion].classList.remove('text-box');
        questionDivs[currentQuestion - 1].classList.add("text-box")
    }
})


// For selecting the wrong answer

var incorrect = document.querySelector(".wrong");

incorrect.addEventListener("click", function(){

    secondsLeft-=10;
})


