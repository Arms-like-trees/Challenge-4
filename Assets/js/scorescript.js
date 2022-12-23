//Place to populate scores

var userScores = document.querySelector('#userScores')
function populateScores () {
    var hsArray = JSON.parse(localStorage.getItem("highscore"))||[];
    if (hsArray.length === 0){
        var hs = document.createElement('h2');
        hs.textContent = 'No High Scores';
        userScores.appendChild(hs)
    } else {
      console.log(hsArray)
    hsArray.sort((a,b)=>parseInt(b.score)-parseInt(a.score))
    for (var item of hsArray){
        var hs = document.createElement('li');
        hs.textContent = item.initials + ': '+item.score;
        userScores.appendChild(hs)
    }  
    }
    
}

//To clear the scores
var clearScore = document.querySelector('#clear')

clearScore.addEventListener('click', function(event){
    event.preventDefault();
    localStorage.removeItem("highscore");
})

populateScores()

