
let compNumWins = 0;
let yourNumWins = 0;

// listen for player choice
document.getElementById("rockButton").addEventListener("click", () => playerRound("rock", compChoice()));
document.getElementById("paperButton").addEventListener("click", () => playerRound("paper", compChoice()));
document.getElementById("scissorsButton").addEventListener("click", () => playerRound("scissor", compChoice()));

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
        }
        else {
         console.log("player wins")
        }
    else if (player == "paper")
        if (comp == "scissors"){
            console.log("comp wins")
        }
        else {
            console.log("player wins")
        }
    else 
        if (comp == "rock"){
        console.log("comp wins")
        }
        else {
            console.log("player wins")
            }
}





