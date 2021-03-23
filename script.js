let test = "Fianlly!!!!"


let compNumWins = 0
let yourNumWins = 0
let playerValue 
let compValue

CompResult();

function CompResult() {
    test = ["rock", "paper", "scissors"][Math.floor(Math.random()*3)]
  }

function fight(){
    let userInput = prompt("Rock, paper, scissor???");

    if (userInput.toLowerCase() == "rock") {
      playerValue= userInput.toLowerCase();
    }
    else if(userInput.toLowerCase() == "paper") {
       playerValue= userInput.toLowerCase();
      }
    else if(userInput.toLowerCase() == "scissors") {
       playerValue= userInput.toLowerCase();
      }
    else {
        alert("Invalid input. Please try again");
      }
}
