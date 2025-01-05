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
playGame();



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
  // for (let i = 0; i < CHOICES.length; i++){
  //   if (choice === CHOICES[i]) {
  //     return true;
  //   }
  // }
  // return false;
}

function XBeatsY(X, Y){
  if (HIERARCHY[X] == Y) {
    return true;
  } else {
    return false;
  }
}

function playRound() {
  const computerChoice = getComputerChoice();
  console.log(computerChoice);
  const humanChoice = getHumanChoice();
  console.log(humanChoice);
  if (XBeatsY(computerChoice, humanChoice)) {
    computerScore++;
    console.log("Computer wins round");
  } else if (XBeatsY(humanChoice, computerChoice)){
    humanScore++;
    console.log("Human wins round")
  }
}
  
function playGame() {
  for (var i = 0; i < 5; i++){
    playRound();
  }

  console.log(`Human: ${humanScore} | Computer: ${computerScore}`);
  if (computerScore > humanScore){
    console.log("Computer wins!");
  } else if (computerScore == humanScore) {
    console.log("Tie!");
  } else if (computerScore < humanScore) {
    console.log("You win!")
  }
}

