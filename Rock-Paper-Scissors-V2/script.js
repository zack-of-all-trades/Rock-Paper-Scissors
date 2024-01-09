const pScore = document.getElementById('pScore');
const cScore = document.getElementById('cScore');
const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');
const pChoice = document.getElementById('pChoice');
const cChoice = document.getElementById('cChoice');
const winLoseWords = document.getElementById('winner');
const reset = document.getElementById('reset');
const choices = ['Rock', 'Paper', 'Scissors'];
let pCount = 1;
let cCount = 1;
let plCoReset = 0;


rock.onclick = function(){
  let getComputerChoice = choices[Math.floor(Math.random() * 3)];
  pChoice.textContent = 'Rock';
  cChoice.textContent = getComputerChoice;
  
  if(getComputerChoice === 'Rock'){
    result = 'It is a Tie! Try again.';
    winLoseWords.textContent = result;

  }else if(getComputerChoice === 'Paper') {
    result = 'Paper beats Rock. You Loose.';
    winLoseWords.textContent = result;
    cScore.textContent = cCount++;

  }else{
    result = 'Rock beats Scissors. You Win!';
    winLoseWords.textContent = result;
    pScore.textContent = pCount++;
  }
}

paper.onclick = function(){
  let getComputerChoice = choices[Math.floor(Math.random() * 3)];
  pChoice.textContent = 'Paper';
  cChoice.textContent = getComputerChoice;

  if(getComputerChoice === 'Paper'){
    result = 'It is a Tie! Try again.';
    winLoseWords.textContent = result;

  }else if(getComputerChoice === 'Scissors') {
    result = 'Scissors beat Paper. You Loose.';
    winLoseWords.textContent = result;
    cScore.textContent = cCount++;

  }else{
    result = 'Paper beats Rock. You Win!';
    winLoseWords.textContent = result;
    pScore.textContent = pCount++;
  }  
}

scissors.onclick = function(){
  let getComputerChoice = choices[Math.floor(Math.random() * 3)];
  pChoice.textContent = 'Scissors';
  cChoice.textContent = getComputerChoice;

  if(getComputerChoice === 'Scissors'){
    result = 'It is a Tie! Try again.';
    winLoseWords.textContent = result;

  }else if(getComputerChoice === 'Rock') {
    result = 'Rock beats Scissors. You Loose.';
    winLoseWords.textContent = result;
    cScore.textContent = cCount++;

  }else{
    result = 'Scissors beats Paper. You Win!';
    winLoseWords.textContent = result;
    pScore.textContent = pCount++;
  }
}


reset.onclick = function(){
  pCount = 1;
  cCount = 1;
  pScore.textContent = plCoReset;
  cScore.textContent = plCoReset;
  winLoseWords.textContent = '';
}
