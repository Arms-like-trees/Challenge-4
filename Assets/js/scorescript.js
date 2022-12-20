//Place to populate scores
var highScoreString = JSON.parse(localStorage.getItem("highscore"));
console.log(highScoreString[0])
var userScores = document.querySelector('#userScores')
function populateScores(){/*for loop to run through values*/
    userScores.textContent = highScoreString[i].score
}

//To clear the scores
var clearScore = document.querySelector('#clear')

clearScore.addEventListener('click', function(event){
    event.preventDefault();
    localStorage.clear("highscore");
})

populateScores()