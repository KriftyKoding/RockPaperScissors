
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
        tieResults(comp);
   }
   else if (player == "rock")
        if (comp == "paper"){
            compWinsResult(comp);
        }
        else {
            playerWinsResult(comp);
        }
    else if (player == "paper")
        if (comp == "scissors"){
            compWinsResult(comp);
        }
        else {
            playerWinsResult(comp);
        }
    else 
        if (comp == "rock"){
            compWinsResult(comp);
        }
        else {
            playerWinsResult(comp);
            }
}
// what happens if player wins
function playerWinsResult(comp){
    playerWins.textContent = playerNumWins += 1;
    console.log(playerNumWins)
    if (playerNumWins == 5){
        console.log("winner!")
        const body = document.querySelector('body');
        body.textContent = "Player Wins!!!";
        body.classList.add('done');
    }
    else {
        const container = document.querySelector('#button'); 
        const content = document.createElement('div'); 
        content.setAttribute('id','display');
        content.textContent = 'Comp choose ' + comp + `. \r\nPlayer Wins!`; 
        container.appendChild(content);
        setTimeout(function(){ 
            container.removeChild(content);
        }, 3000);
    }
}

//what happens if comp wins
function compWinsResult(comp){
    compWins.textContent = compNumWins += 1;
    if (compNumWins == 5){
        console.log("Comp Wins")
        const body = document.querySelector('body');
        body.textContent = "Comp Wins";
        body.classList.add('done');
    }
    else {
    const container = document.querySelector('#button'); 
    const content = document.createElement('div'); 
    content.setAttribute('id','display');
    content.textContent = 'Comp choose ' + comp + `. \r\nPlayer Loses.`; 
    container.appendChild(content);
    setTimeout(function(){ 
        container.removeChild(content);
    }, 3000);
    }
}

//what happens if tie
function tieResults(comp){
    const container = document.querySelector('#button'); 
    const content = document.createElement('div'); 
    content.setAttribute('id','display');
    content.textContent = 'Comp choose ' + comp + `. \r\nTie.`; 
    container.appendChild(content);
    setTimeout(function(){ 
        container.removeChild(content);
    }, 3000);
}


