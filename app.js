let body = document.querySelector('body')
let gameOverContainer = document.createElement('div')
gameOverContainer.setAttribute('class', 'gameover-container')
let rock = document.querySelector('#rock')
let paper = document.querySelector('#paper')
let scissors = document.querySelector('#scissors')
let hScore = document.querySelector('#human')
let cScore = document.querySelector('#computer')
let tScore = document.querySelector('#tie')
body.appendChild(gameOverContainer)

console.log(body);


let options = [rock,paper,scissors]
let num_of_rounds = 4
let humanScore = 0
let computerScore = 0
let tie = 0

options.forEach(o => {
    o.addEventListener('click', (e) => {
    let h = getHumanChoice(e)
    let c = getComputerChoice()
    let winner = playRound(h,c)
    playGame(winner,num_of_rounds)
    num_of_rounds -= 1
    })
})



// A function that randomly selects rock, paper, or scissors
const getComputerChoice = function(){
    let options = ['rock','paper','scissors']
    let rdm = Math.floor(Math.random() * 3)
    return options[rdm]
}

// A function that gets the user input
const getHumanChoice = (e) => e.target.innerText.toLowerCase()


/* 
    A function that plays one round of rock, paper, scissors to determine a winner.
    A function that determines the value of each selection:
    rock beats scissors
    paper beats rock
    scissors beat paper
*/
function playRound(human,computer){
    if((human === 'rock' && computer === 'scissors') || (human === 'paper' && computer === 'rock')){
        return 'human'
    } else if(human === 'scissors' && computer === 'paper'){
        return 'human'
    } else if(human === computer){
        return 'tie'
    } else {
        return 'computer'
    }
}


function playGame(round,n){
    if(n === 0){
        gameOver()
    } else if(round === 'human'){
       rewardPoint(round)
    } else if(round === 'computer'){
        rewardPoint(round)
    } else {
        rewardPoint(round)
    }
}

function gameOver(){
    options.forEach(o => {
        o.setAttribute('disabled', '')
    })
    let gameOver = document.createElement('h3')
    gameOver.innerText = 'Game Over!'
    gameOverContainer.append(gameOver)
}

function rewardPoint(selection){
    switch (selection) {
        case 'human':
            humanScore += 1
            hScore.innerText = `Human Score: ${humanScore}`
            break;
        case 'computer':
            computerScore += 1
            cScore.innerText = `Computer Score: ${computerScore}`
        default:
            tie += 1
            tScore.innerText = `Tie: ${tie}`
            break;
    } 
}








