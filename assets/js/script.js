
// check for what was selected
let choices = document.querySelectorAll('[data-is-selectable="true"]');
for (let choice of choices) {
  choice.onclick = function() {
    battleScreen(choice);
  }
}
// display rules when clicked
document.getElementById('rules-button').onclick = function() {
  document.getElementById('modal-bg').classList.remove('hidden');
  document.getElementById('modal').classList.remove('hidden');
  document.getElementById('rules-button').classList.remove('hover');
}
document.getElementById("close-modal").onclick = function() {
  document.getElementById('modal-bg').classList.add('hidden');
  document.getElementById('modal').classList.add('hidden');
  document.getElementById('rules-button').classList.add('hover');
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
  let result = null;
  if (playerChoice.dataset.icon == "paper" && randomInt == 0) {
    result = 'win';
  }
  else if (playerChoice.dataset.icon == "paper" && randomInt == 1) {
    result = 'draw';
  }
  else if (playerChoice.dataset.icon == "paper" && randomInt == 2){
    result = 'lose';
  }
  else if (playerChoice.dataset.icon == "rock" && randomInt == 0) {
    result = 'draw';
  }
  else if (playerChoice.dataset.icon == "rock" && randomInt == 1) {
    result = 'lose';
  }
  else if (playerChoice.dataset.icon == "rock" && randomInt == 2){
    result = 'win';
  }
  else if (playerChoice.dataset.icon == "scissors" && randomInt == 0) {
    result = 'lose';
  }
  else if (playerChoice.dataset.icon == "scissors" && randomInt == 1) {
    result = 'win';
  }
  else if (playerChoice.dataset.icon == "scissors" && randomInt == 2){
    result = 'draw';
  }
  // display the winner
  // update score
  document.getElementById('result-desktop').innerHTML = '';
  document.getElementById('result-mobile').innerHTML = '';
  document.getElementById('result-desktop').classList.remove('hidden');
  document.getElementById('result-mobile').classList.remove('hidden');
  if (result == "win") {
    document.getElementById('score').innerHTML = parseInt(document.getElementById('score').innerHTML) + 1;
    document.getElementById('result-desktop').appendChild(document.createTextNode("You win"));
    document.getElementById('result-mobile').appendChild(document.createTextNode("You win"));
  }
  else if (result == "lose") {
    document.getElementById('score').innerHTML = parseInt(document.getElementById('score').innerHTML) - 1;
    document.getElementById('result-desktop').appendChild(document.createTextNode("You Lose"));
    document.getElementById('result-mobile').appendChild(document.createTextNode("You Lose"));
  }
  else if (result == "draw") {
    document.getElementById('result-desktop').appendChild(document.createTextNode("Draw"));
    document.getElementById('result-mobile').appendChild(document.createTextNode("Draw"));
  }
  // reset game on play again
  document.getElementById('reset-desktop').onclick = function() {
    document.getElementById('player-choice').innerHTML = '<div class="choice-holder"></div>';
    document.getElementById('computer-choice').innerHTML = '<div class="choice-holder"></div>';
    document.getElementById('result-desktop').classList.add('hidden');
    document.getElementById('result-mobile').classList.add('hidden');
    document.querySelector("[data-board-type='selector']").classList.remove("hidden");
    document.querySelector("[data-board-type='battle']").classList.add("hidden");
  };
  document.getElementById('reset-mobile').onclick = function() {
    document.getElementById('player-choice').innerHTML = '<div class="choice-holder"></div>';
    document.getElementById('computer-choice').innerHTML = '<div class="choice-holder"></div>';
    document.getElementById('result-desktop').classList.add('hidden');
    document.getElementById('result-mobile').classList.add('hidden');
    document.querySelector("[data-board-type='selector']").classList.remove("hidden");
    document.querySelector("[data-board-type='battle']").classList.add("hidden");
  };

}
