let rock = document.querySelector('#rock')
let paper = document.querySelector('#paper')
let scissors = document.querySelector('#scissors')

let options = [rock,paper,scissors]

options.forEach(o => {
    o.addEventListener('click', (e) => {
    getHumanChoice(e)
    })
})


// A function that randomly selects rock, paper, or scissors
const getComputerChoice = function(){
    let options = ['rock','paper','scissors']
    let rdm = Math.floor(Math.random() * 3)
    return options[rdm]
}

// A function that gets the user input
const getHumanChoice = (e) => console.log(e.target.innerText.toLowerCase())


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


function playGame(){

    let humanScore = 0
    let computerScore = 0
    let tie = 0
    let c = getComputerChoice()
    let h = getHumanChoice()
    let round = playRound(h,c)

    if(n === 0){
        console.log('Game Over')
    } else {
        if(round === 'human'){
            humanScore += 1
            console.log(`Human score: ${humanScore}`)
        } else if(round === 'computer'){
            computerScore += 1
            console.log(`Comp score: ${computerScore}`)
        } else {
            tie += 1
            console.log(`Tie score: ${tie}`)
        }
        playGame(n-1)
        console.log(`Rounds: ${n}`)
    }
}








