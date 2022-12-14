var questionSet = document.querySelector("#questionSet")
var questionDivs = document.querySelectorAll('#questionSet > div')
var startQuiz = document.querySelector('.start-box')

// For setting the timer
var timeEl = document.querySelector(".time");

var secondsLeft = 75;
var timerInterval = null

function setTime() {
    timeEl.textContent = "Time: " + secondsLeft;
    timerInterval = setInterval(function(){
    secondsLeft--;
    timeEl.textContent = "Time: " + secondsLeft;
    checkTime();
}, 1000);
}


function checkTime() {
    if (secondsLeft <= 0){
        console.log ("is it called")
        var questionDivs = document.querySelectorAll('#questionSet > div');
        
        questionDivs[5].classList.remove('text-box');
        questionDivs[currentQuestion].classList.add('text-box');
        clearInterval(timerInterval);
        
    };
    score.textContent = secondsLeft;
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
        questionDivs[currentQuestion - forward].classList.add("text-box")
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
        secondsLeft-=10;
        timeEl.textContent = "Time: " + secondsLeft;
        checkTime();
    }
    
})

//Message for wrong right answers
questionSet.addEventListener("click", function(event) {
    var element = event.target;
    
    function answer (type, message){
        var answerspan = document.querySelector(".answer");
        answerspan.textContent = message;
        answerspan.setAttribute("class", type);
        console.log("working?")

    }
    if (element.matches('.right')) {
        answer("answer", "correct");
        
    } if (element.matches('.wrong')) 
        answer("answer", "Incorrect")
    
    
})


//Submit score to local storage

var score = document.querySelector("#score");
var submitScore = document.querySelector("#submitInitials");
var initials = document.querySelector('#Initials');
score.textContent = secondsLeft


function displayMessage(type, message) {
    msgDiv.textContent = message;
    msgDiv.setAttribute('class', type);
}

submitScore.addEventListener('click',function(event){
    event.preventDefault();
    if (initials.value === "") {
        displayMessage("error", "Initials cannot be blank")
    } else {
        let scoreInitials = {initials:initials.value, score:score.textContent};
        var highScoreString = localStorage.getItem("highscore");
        var highscoreArray = JSON.parse(highScoreString);
        if (highscoreArray === null ){
            highscoreArray = []
        }
        highscoreArray.push(scoreInitials);

        displayMessage("success", "Your score was saved");
        localStorage.setItem("highscore", JSON.stringify(highscoreArray))
      
    }
})

