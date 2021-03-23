


let compNumWins = 0;
let yourNumWins = 0;
let rounds = 0;


function compChoice() {
    return  ["rock", "paper", "scissors"][Math.floor(Math.random()*3)];
  }

function fight(){ 
    // this function is to see if input is invalid
    let userInput = prompt("Rock, paper, scissor???");
    let comp = compChoice();
    userInput= userInput.toLowerCase();
    
    if (userInput == "rock") {
        playerRound(userInput, comp);
        // maybe add == rock or paper or scissocrs for cleaner code
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
    // this is to see who wins and loses
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
    // count  round function
    if (rounds == 5){
        if (yourNumWins > compNumWins){
            alert("Congrats. You win, finalscore is " + yourNumWins +
                " vs " + compNumWins + ".");
        }
        else if (yourNumWins = compNumWins){
            alert("Tie!!! Finalscore is " + yourNumWins +
              " vs " + compNumWins + ".");
        }
        else {
            alert("Sorry,. you win. Finalscore is " + yourNumWins +
            " vs " + compNumWins + ".");
        };
    
    }
    else{
        fight();
    }
};

function capFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  




