
let compNumWins = 0;
let playerNumWins = 0;
let count = 0

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
        handleResultBeforeWin(comp, 'Player Wins!');
    }
}

//what happens if comp wins
function compWinsResult(comp){
    compWins.textContent = compNumWins += 1;
    console.log(compNumWins)
    if (compNumWins == 5){
        console.log("Comp Wins")
        const body = document.querySelector('body');
        body.textContent = "Comp Wins";
        body.classList.add('done');
    }
    else {
        handleResultBeforeWin(comp, 'Player Loses.');
    }
}

//what happens if tie
function tieResults(comp){
    handleResultBeforeWin(comp, 'Tie.');
}

//handles the results of each match if there's no current winner
function handleResultBeforeWin(comp, stringToDetermineWinner){
    const container = document.querySelector('#button');
    const content = document.createElement('div'); 
    
    if (document.querySelector('#display')) {
        document.querySelector('#display').remove();
    }

    content.setAttribute('id','display');
    content.textContent = 'Comp choose ' + comp + `.\r\n${stringToDetermineWinner}`;  /* 'Tie' */
    container.appendChild(content);
    setTimeout(function () {
        if (content) {
            content.remove();
        }
    }, 3000);
}