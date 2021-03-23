let test = "Fianlly!!!!";


let compNumWins = 0;
let yourNumWins = 0;


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
    console.log(player,comp);
   if (player == comp){
    console.log("tie, try again.");
   }
   else if (player == "rock")
        if (comp == "paper"){
        console.log("Lose, try again.");
        }
        else {
            console.log("Victory, try again.");
        }
    else if (player == "paper")
        if (comp == "scissors"){
        console.log("Lose, try again.");
        }
        else {
            console.log("Victory, try again.");
        }
    else 
        if (comp == "rock"){
        console.log("Lose, try again.");
        }
        else {
            console.log("Victory, try again.");
        }
}



