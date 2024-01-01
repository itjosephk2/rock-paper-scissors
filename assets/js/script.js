
// check for what was selected
let choices = document.querySelectorAll('[data-is-selectable="true"]');
for (let choice of choices) {
  choice.onclick = function() {
    battleScreen(choice);
  }
}
// display your choice on screen
function battleScreen(playerChoice) {
  document.querySelector("[data-board-type='selector']").classList.add("hidden");
  document.querySelector("[data-board-type='battle']").classList.remove("hidden");

  if (playerChoice.dataset.icon == "rock") {
    document.getElementById('player-choice').innerHTML = '<div class="choice rock-oval oval-one-large"><div class="inner-rock-oval oval-two-large"><div class="white-shadow-oval oval-three-large"><div class="white-oval oval-four-large"><img class="icon-rock-large" src="assets/images/icon-rock.svg" alt=""></div></div></div></div>';
  }
  else if (playerChoice.dataset.icon == "paper") {
    document.getElementById('player-choice').innerHTML = '<div class="choice paper-oval oval-one-large"><div class="inner-paper-oval oval-two-large"><div class="white-shadow-oval oval-three-large"><div class="white-oval oval-four-large"><img class="icon-paper-large" src="assets/images/icon-paper.svg" alt=""></div></div></div></div>';
  }
  else if (playerChoice.dataset.icon == "scissors") {
    document.getElementById('player-choice').innerHTML = '<div class="choice scissors-oval oval-one-large"><div class="inner-scissors-oval oval-two-large"><div class="white-shadow-oval oval-three-large"><div class="white-oval oval-four-large"><img class="icon-scissors-large" src="assets/images/icon-scissors.svg" alt=""></div></div></div></div>';
  }

  // randomly generate a selection for the computer
  let randomInt = Math.floor(Math.random() * 3);
  console.log(randomInt);
  // display computers choice on screen
  if (randomInt == 0) {
    document.getElementById('computer-choice').innerHTML = '<div class="choice rock-oval oval-one-large"><div class="inner-rock-oval oval-two-large"><div class="white-shadow-oval oval-three-large"><div class="white-oval oval-four-large"><img class="icon-rock-large" src="assets/images/icon-rock.svg" alt=""></div></div></div></div>';
  }
  else if (randomInt == 1) {
    document.getElementById('computer-choice').innerHTML = '<div class="choice paper-oval oval-one-large"><div class="inner-paper-oval oval-two-large"><div class="white-shadow-oval oval-three-large"><div class="white-oval oval-four-large"><img class="icon-paper-large" src="assets/images/icon-paper.svg" alt=""></div></div></div></div>';
  }
  else if (randomInt == 2) {
    document.getElementById('computer-choice').innerHTML = '<div class="choice scissors-oval oval-one-large"><div class="inner-scissors-oval oval-two-large"><div class="white-shadow-oval oval-three-large"><div class="white-oval oval-four-large"><img class="icon-scissors-large" src="assets/images/icon-scissors.svg" alt=""></div></div></div></div>';
  }
  // check to see who wins
  if (playerChoice.dataset.icon == "paper" && randomInt == 0) {
    console.log("You win");
  }
  else if (playerChoice.dataset.icon == "paper" && randomInt == 1) {
    console.log("It is a draw");
  }
  else if (playerChoice.dataset.icon == "paper" && randomInt == 2){
    console.log("You Loose")
  }
  else if (playerChoice.dataset.icon == "rock" && randomInt == 0) {
    console.log("It is a draw");
  }
  else if (playerChoice.dataset.icon == "rock" && randomInt == 1) {
    console.log("You Loose");
  }
  else if (playerChoice.dataset.icon == "rock" && randomInt == 2){
    console.log("You win");
  }
  else if (playerChoice.dataset.icon == "scissors" && randomInt == 0) {
    console.log("You Loose");
  }
  else if (playerChoice.dataset.icon == "scissors" && randomInt == 1) {
    console.log("You win");
  }
  else if (playerChoice.dataset.icon == "scissors" && randomInt == 2){
    console.log("It is a draw");
  }
}
// display the winner
// update score
// reset game on play again
// display rules when clicked
