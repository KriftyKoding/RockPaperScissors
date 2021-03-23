let test = "Fianlly!!!!";


let compNumWins = 0;
let yourNumWins = 0;
let rounds = 0;

test2();

function test2(){
    let test2 = 6
    test2 += 1
    console.log(test2)
}



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
    let alertComp = capFirstLetter(comp)
   if (player == comp){
       rounds += 1;
       alert(alertComp + ". Tie, " + (5-rounds) + 
            " rounds left. Score " + yourNumWins +
            " vs " + compNumWins + ".");
       game();
   }
   else if (player == "rock")
        if (comp == "paper"){
        compNumWins += 1
        rounds += 1;
        alert(alertComp + ". Sorry you lose, " + (5-rounds) + 
            " rounds left. Score " + yourNumWins +
            " vs " + compNumWins + ".");
       game();

        }
        else {
        yourNumWins += 1
        rounds += 1;
        alert(alertComp + ". Congrats, " + (5-rounds) + 
            " rounds left. Score " + yourNumWins +
            " vs " + compNumWins + ".");
       game();
        }
    else if (player == "paper")
        if (comp == "scissors"){
            compNumWins += 1;
            rounds += 1;
            alert(alertComp + ". Sorry you lose, " + (5-rounds) + 
                " rounds left. Score " + yourNumWins +
                " vs " + compNumWins + ".");
           game();
        }
        else {
            yourNumWins += 1
            rounds += 1;
            alert(alertComp + ". Congrats, " + (5-rounds) + 
                " rounds left. Score " + yourNumWins +
                " vs " + compNumWins + ".");
        game();
        }
    else 
        if (comp == "rock"){
        compNumWins += 1;
        rounds += 1;
        alert(alertComp + ". Sorry you lose, " + (5-rounds) + 
            " rounds left. Score " + yourNumWins +
            " vs " + compNumWins + ".");
       game();
        }
        else {
            yourNumWins += 1
            rounds += 1;
            alert(alertComp + ". Congrats, " + (5-rounds) + 
                " rounds left. Score " + yourNumWins +
                " vs " + compNumWins + ".");
           game();
            }
}

function game(){
    if (rounds == 5){
        alert("Congrat game over");
    }
    else{
        fight();
    }
};

function capFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  




