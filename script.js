let test = "Fianlly!!!!";


let compNumWins = 0;
let yourNumWins = 0;
let playerValue ;
let compValue;

CompResult();

function CompResult() {
    return  ["rock", "paper", "scissors"][Math.floor(Math.random()*3)];
  }

function fight(){
    let userInput = prompt("Rock, paper, scissor???");
    let comp = CompResult();
    userInput= userInput.toLowerCase();
    
    if (userInput == "rock") {
        playerRound(userInput, comp);
    }
    else if(userInput == "paper") {
        playerRound(userInput, comp);
    }
    else if(userInput == "scissors") {
        playerRound(userInput, comp);
    }
    else {
        alert("Invalid input. Please try again");
    }
}

function playerRound(player, comp){
    console.log(player);
    console.log(comp);
};

