var questionSet = document.querySelector("#questionSet")
var questionDivs = document.querySelectorAll('#questionSet > div')
var startQuiz = document.querySelector('.start-box')

// For setting the timer
var timeEl = document.querySelector(".time");

var secondsLeft = 75;
var timerInterval = null

function setTime() {
    timerInterval = setInterval(function(){
    secondsLeft--;
    timeEl.textContent = "Time: " + secondsLeft;

    if(secondsLeft === 0){
        clearInterval(timerInterval);

    }
}, 1000);
}



//The start button to start the quiz
var startTimer = document.querySelector("#startButton");

startTimer.addEventListener("click", setTime);





// To change the divs
var currentQuestion = 0;
document.querySelector("#questionSet").addEventListener('click', function(event){
    var targetEl = event.target;
    var forward = targetEl.dataset.direction;

    if (targetEl.matches("button")) {
        var questionDivs = document.querySelectorAll('#questionSet > div');
        currentQuestion += parseInt(forward,  10);
        if (forward <= 5){
            console.log(currentQuestion)
        questionDivs[currentQuestion].classList.remove('text-box');
        questionDivs[currentQuestion - 1].classList.add("text-box")
        } if (secondsLeft <= 0){
            secondsLeft = 0;
            questionDivs[4].classList.add('text-box');
            questionDivs[currentQuestion].classList.remove('text-box')
        }
        
    }
})


// For selecting the wrong answer basic code
/*
 var incorrect = document.querySelector(".wrong");

 incorrect.addEventListener("click", function(){

     secondsLeft-=10;
 })


// Stop timer basic code

var stopTimer = document.querySelector('.stop');
console.log(stopTimer)
stopTimer.addEventListener('click', function(){
    clearInterval(timerInterval);
})
*/





//Combined function of wrong answer and stop timer.
questionSet.addEventListener("click", function(event) {
    var element = event.target;
    if (element.matches('.stop')) {
        clearInterval(timerInterval);
    } if (element.matches('.wrong')){
        secondsLeft-=10
    }
})


//Submit score to local storage

var score = document.querySelector("#score");
var submitScore = document.querySelector("#submitInitials");
var initials = document.querySelector('Initials').value;
score.textContent = timerInterval//how do i grab the time remaining to set as time?

submitScore.addEventListener('click',function(event){
    event.preventDefault();
    if (initials === "") {
        displayMessage("error", "Initials cannot be blank")
    } else {
        displayMessage("success", "Your score was saved");
        localStorage.setItem('initials', initials)
        //place for score
    }
})
