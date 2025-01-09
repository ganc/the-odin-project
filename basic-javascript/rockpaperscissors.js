const CHOICES = ["ROCK", "PAPER", "SCISSORS"];
const PLAYERS = Object.freeze({
  HUMAN:"HUMAN",
  COMPUTER:"COMPUTER"
});
// X:Y -> X beats Y
// ROCK:SCISSORS -> ROCK beats SCISSORS
const HIERARCHY = Object.freeze({
  "ROCK": "SCISSORS",
  "SCISSORS": "PAPER",
  "PAPER": "ROCK",
});


let humanScore = 0;
let computerScore = 0;

console.log("Hello World!");
// playGame();
const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
  button.addEventListener("click", function(e){
    playRound(e.target.id.toUpperCase());
  })
})



function getComputerChoice() {
  const computerChoiceIndex = Math.floor(Math.random()*CHOICES.length);
  const computerChoice = CHOICES[computerChoiceIndex];
  return computerChoice;
}

function getHumanChoice() {
  let input = "" 
  do {
    input = prompt("choose ROCK, PAPER, or SCISSORS").toUpperCase();
  } while (!isValidChoice(input));
  return input;
}

function isValidChoice(choice) {
  return CHOICES.includes(choice);
}

function XBeatsY(X, Y){
  if (HIERARCHY[X] == Y) {
    return true;
  } else {
    return false;
  }
}

function playRoundConsole(){
  playRound(getHumanChoice());
}

function playRound(humanChoice) {
  const computerChoice = getComputerChoice();
  console.log(computerChoice);
  console.log(humanChoice);
  if (XBeatsY(computerChoice, humanChoice)) {
    computerScore++;
    console.log("Computer wins round");
  } else if (XBeatsY(humanChoice, computerChoice)){
    humanScore++;
    console.log("Human wins round")
  } else {

    console.log("Tie!");
  }
  displayScore();
  checkScore();
}
  
function displayScore(){
  const score = document.querySelector("#score");
  if (score != null) {
  score.textContent = `Human: ${humanScore} | Computer: ${computerScore}`;
  } else {
    console.log("score was null?")
  }
}

function checkScore(){
  if (computerScore >= 5) {
    const score = document.querySelector("#score");
    const winMsg = document.createElement("h3");
    winMsg.textContent = "Computer Wins";
    score.appendChild(winMsg);
    resetGame();
  } else if (humanScore >= 5) {
    const score = document.querySelector("#score");
    const winMsg = document.createElement("h3");
    winMsg.textContent = "You Win!";
    score.appendChild(winMsg);
    resetGame();
  }
}

function resetGame(){
  humanScore = 0;
  computerScore = 0;
  const score = document.querySelector("#score");
  const newGameMsg = document.createElement("p");
  newGameMsg.textContent = "Press any button to start a new game."
  score.appendChild(newGameMsg);
}





// function playGame() {
  // for (var i = 0; i < 5; i++){
  //   playRound();
  // }

  // console.log(`Human: ${humanScore} | Computer: ${computerScore}`);
  // if (computerScore > humanScore){
  //   console.log("Computer wins!");
  // } else if (computerScore == humanScore) {
  //   console.log("Tie!");
  // } else if (computerScore < humanScore) {
  //   console.log("You win!")
  // }
// }

