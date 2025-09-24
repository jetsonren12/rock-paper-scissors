let body = document.querySelector('body')
let gameOverContainer = document.createElement('div')
gameOverContainer.setAttribute('class', 'gameover-container')
let answerContainer = document.createElement('div')
answerContainer.setAttribute('class','answer-container')
let rock = document.querySelector('#rock')
let paper = document.querySelector('#paper')
let scissors = document.querySelector('#scissors')
let hScore = document.querySelector('#human')
let cScore = document.querySelector('#computer')
let tScore = document.querySelector('#tie')
let hChoice = document.createElement('p')
let cChoice = document.createElement('p')
hChoice.setAttribute('id','human-choice')
cChoice.setAttribute('id','comp-choice')
body.appendChild(answerContainer)
body.appendChild(gameOverContainer)

let options = [rock,paper,scissors]
let n_of_rounds = 5
let humanScore = 0
let computerScore = 0
let tie = 0

options.forEach(o => {
    o.addEventListener('click', (e) => {
    let h = getHumanChoice(e)
    let c = getComputerChoice()
    let winner = playRound(h,c)
    playGame(winner,n_of_rounds,e,c)
    n_of_rounds -= 1
    })
})

const getComputerChoice = function(){
    let options = ['rock','paper','scissors']
    let rdm = Math.floor(Math.random() * 3)
    return options[rdm]
}

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

function rewardPoint(selection){
    switch (selection) {
        case 'human':
            humanScore += 1
            hScore.innerText = `Human Score: ${humanScore}`
            break;
        default: 
            computerScore += 1
            cScore.innerText = `Computer Score: ${computerScore}`
            break;
    } 
}

function showChoice(e,c){
    hChoice.innerText = `Your choice: ${e.target.innerText.toLowerCase()}`
    answerContainer.append(hChoice)
    
    cChoice.innerText = `Computer choice: ${c}`
    answerContainer.append(cChoice)
}

function playGame(round,n,e,c){    
    if(n === 0 ){
        gameOver()
    } else if(round === 'human'){
        showChoice(e,c)
        rewardPoint(round)
    } else if(round === 'computer'){
        showChoice(e,c)
        rewardPoint(round)
    } else {
        showChoice(e,c)
        tie += 1
        tScore.innerText = `Tie: ${tie}`
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












