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
        return 'paper'
    }
    else{
        return 'scissors'
    }

}

console.log(getComputerChoice())