
let compNumWins = 0;
let yourNumWins = 0;


function compChoice() {
    //calc comp choice
    return  ["rock", "paper", "scissors"][Math.floor(Math.random()*3)];
  }
function playerRound(player, comp){
    // this is to see who wins and loses
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





