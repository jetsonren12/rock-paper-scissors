// A function that randomly selects rock, paper, or scissors
const getComputerChoice = function(){
    let options = ['rock','paper','scissors']
    let rdm = Math.floor(Math.random() * 3)
    return options[rdm]
}
let computerChoice = getComputerChoice()

// A function that gets the user input
const getHumanChoice = () => prompt('rock, paper, or scissors?').toLowerCase()
let humanChoice = getHumanChoice()

// Variables for keeping score
let humanScore = 0
let computerScore = 0

/* 
    A function that plays one round of rock, paper, scissors to determine a winner.
    A function that determines the value of each selection:
    rock beats scissors
    paper beats rock
    scissors beat paper
*/
let playRound = function(human,computer){
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

function playGame(round){
    switch (round) {
        case (round === 'human'):
            humanScore +=1 
            break;
        case (round === 'computer'):
            computerScore +=1 
            break;
        default:
            "It's a tie."
            break;
    }
    console.log(round)
    let humanScore = 0
    let computerScore = 0
}


playGame(playRound(humanChoice,computerChoice));

