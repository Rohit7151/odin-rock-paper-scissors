console.log('hello world');
function getRandomInt(max=3){
    return Math.floor(Math.random()*max);
}
function getComputerChoice(){
    let n = getRandomInt()
    if (n == 0){
        return 'rock';
    }
    else if (n == 1){
        return 'paper';
    }
    else{
        return 'scissors';
    }

}
function getHumanChoice(){

    let choice = parseInt(prompt('Enter 0 for rock, 1 for paper or 2 scissors: '))
    if (choice == 0){
        return 'rock';
    }
    else if (choice == 1){
        return 'paper';
    }
    else{
        return 'scissors';
    }
}


function playGame(){
    let humanScore = 0;
    let computerScore = 0;
    function playRound(humanChoice, computerChoice){
        if (humanChoice == computerChoice){
            console.log("It is draw no one wins");
        }
        else if (humanChoice == 'rock' && computerChoice == 'paper'){
            console.log(`You lose! paper beats rock`);
            computerScore += 1;
        }
        else if (humanChoice == 'rock' && computerChoice == 'scissors'){
            console.log(`You win! rock beats scissors`);
            humanScore += 1;
        }
        else if (humanChoice == 'scissors' && computerChoice == 'paper'){
            console.log(`You win! scissors beats paper`);
            humanScore += 1;
        }
        else if (humanChoice == 'scissors' && computerChoice == 'rock'){
            console.log(`You lose! rock beats scissors`);
            computerScore += 1;
        }
        else if (humanChoice == 'paper' && computerChoice == 'rock'){
            console.log('You win! paper beats rock');
            humanScore += 1;
    
        }
        else{
            console.log('You Lose! scissors beats paper');
            computerScore += 1
        }
    
    
    }
    for (let i = 0; i<5; i++){
        humanChoice = getHumanChoice()
        computerChoice = getComputerChoice()
        playRound(humanChoice, computerChoice)
    }
    if (humanScore > computerScore){
        console.log('you Win the game!!!!!')
    }
    else if(humanScore == computerScore){
        console.log('Its DRAW!!!')
    }
    else{
        console.log('You lose the game!!!!!!!!')
    }


}
playGame()
// const humanChoice = getHumanChoice()
// const computerChoice = getComputerChoice()
// playRound(humanChoice, computerChoice)
// console.log(getComputerChoice())
// console.log(getHumanChoice())