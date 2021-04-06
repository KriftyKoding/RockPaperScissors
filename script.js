
let compNumWins = 0;
let playerNumWins = 0;

const playerWins = document.querySelector('#playerWins'); 
playerWins.textContent = playerNumWins;

const compWins = document.querySelector('#compWins'); 
compWins.textContent = compNumWins;


// listen for player choice
document.getElementById("rockButton").addEventListener("click", () => playerRound("rock", compChoice()));
document.getElementById("paperButton").addEventListener("click", () => playerRound("paper", compChoice()));
document.getElementById("scissorsButton").addEventListener("click", () => playerRound("scissors", compChoice()));

//calc comp choice
function compChoice() {
    return  ["rock", "paper", "scissors"][Math.floor(Math.random()*3)];
  }

// this is to see who wins and loses  
function playerRound(player, comp){
    console.log(player)
    console.log(comp)
    if (player == comp){
        console.log("tie")
   }
   else if (player == "rock")
        if (comp == "paper"){
            console.log("comp wins")
            compWins.textContent = compNumWins += 1;
        }
        else {
            console.log("player wins")
            playerWins.textContent = playerNumWins += 1;
        }
    else if (player == "paper")
        if (comp == "scissors"){
            console.log("comp wins")
            compWins.textContent = compNumWins += 1;
        }
        else {
            console.log("player wins")
            playerWins.textContent = playerNumWins += 1;
        }
    else 
        if (comp == "rock"){
            console.log("comp wins")
            compWins.textContent = compNumWins += 1;
        }
        else {
            console.log("player wins")
            playerWins.textContent = playerNumWins += 1;
            }
}





