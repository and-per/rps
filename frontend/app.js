const rock = 'rock';
const paper = 'paper';
const scissors = 'scissors';
const gameElements = [rock, paper, scissors];
let score = 0;
let PCscore = 0;
let Won = false;

const gameItems = document.querySelectorAll('.gameItem');
const scoretext = document.querySelector('.Score')
const restartbtn = document.querySelector('.Restart')
const result = document.querySelector('.RoundR')








gameItems.forEach(item => {
    item.addEventListener('click', () => {
        if (Won === false){
            let answer = computerPlay()
            console.log("Player: " + item.alt);
            console.log("Computer: " + answer);
            if (CheckPlrAnswer(item.alt, answer) === true) {
                score++
            }else if(CheckPlrAnswer(item.alt, answer) === false){
                PCscore++  
            }
            console.log(score + ':' + PCscore)
            if (score == 10 || PCscore == 10) {
                if (score > PCscore) {
                    result .innerHTML = "Player Won"
                    scoretext.innerHTML = "Game ended, Computer Score: " + PCscore + " - Player Score: " + score
                    Won = true
                }else if (score < PCscore) {
                    result.innerHTML = "Computer Won"
                    scoretext.innerHTML = "Game ended, Computer Score: " + PCscore +" - Player Score: " + score
                    Won = true
                }
            }else{
                scoretext.innerHTML = "Computer Score: " + PCscore + " - Player Score: " + score
            }
        }else{
            console.log("game already ended, please restart")
        }
    });
}); 





restartbtn.addEventListener('click', () => {
    score = 0;
    PCscore = 0;
    scoretext.innerHTML = "Computer Score: " + PCscore + " - Player Score: " + score;
    result.innerHTML = ""
    Won = false;
})





function CheckPlrAnswer(Plr, PC) {
    if (Plr === "rock" && PC === "scissors") {
        return true;
    }else if (Plr === "paper" && PC === "rock") {
        return true;
    }else if (Plr === "scissors" && PC === "paper") {
        return true;
    }else if (Plr === PC){
        return "Tie";
    }else{
        return false;
    }
}




function computerPlay() {
    const i = Math.round(Math.random() * 2);
    return gameElements[i];
}
