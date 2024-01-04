const playerScore = document.getElementById('pScore');
const computerScore = document.getElementById('cScore');
const btnR = document.getElementById('rock');
const btnP = document.getElementById('paper');
const btnS = document.getElementById('scissors');
const playersChoice = document.getElementById('pChoice');
const computersChoice = document.getElementById('cChoice');
const winningWords = document.getElementById('winner');

const choices = ['Rock', 'Paper', 'Scissors'];
const getComputerChoice = choices[Math.floor(Math.random() * 3)];

btnR.onclick = function(){
  playersChoice.textContent = 'Rock';
  computersChoice.textContent = getComputerChoice;
  
  if(getComputerChoice === 'Rock'){
    result = 'It is a Tie! Try again.';
    winningWords.textContent = result;
  }else if(getComputerChoice === 'Paper') {
    result = 'Paper beats Rock. You Loose.';
    winningWords.textContent = result;
  }else if(getComputerChoice === 'Scissors'){
    result = 'Rock beats Scissors. You Win!';
    winningWords.textContent = result;
  }else{
    result = 'error';
    winningWords.textContent = result;
  }
}

btnP.onclick = function(){
  playersChoice.textContent = 'Paper';
  computersChoice.textContent = getComputerChoice;

  if(getComputerChoice === 'Paper'){
    result = 'It is a Tie! Try again.';
    winningWords.textContent = result;
  }else if(getComputerChoice === 'Scissors') {
    result = 'Scissors beat Paper. You Loose.';
    winningWords.textContent = result;
  }else if(getComputerChoice === 'Rock'){
    result = 'Paper beats Rock. You Win!';
    winningWords.textContent = result;
  }else{
    result = 'error';
    winningWords.textContent = result;
  }  
}

btnS.onclick = function(){
  playersChoice.textContent = 'Scissors';
  computersChoice.textContent = getComputerChoice;

  if(getComputerChoice === 'Scissors'){
    result = 'It is a Tie! Try again.';
    winningWords.textContent = result;
  }else if(getComputerChoice === 'Rock') {
    result = 'Rock beats Scissors. You Loose.';
    winningWords.textContent = result;
  }else if(getComputerChoice === 'Paper'){
    result = 'Scissors beats Paper. You Win!';
    winningWords.textContent = result;
  }else{
    result = 'error';
    winningWords.textContent = result;
  }
}

/* The below is a text because the above wasn't working 

It works!

const tests = ['Blood', 'Boogers', 'Toe Jam'];
const stuff = tests[Math.floor(Math.random() * 3)];

if(stuff === 'Blood'){
  play = 'It is a TIE';
  console.log(play);
}else if(stuff === 'Boogers'){
  play = 'ouch';
  console.log(play);
}else if(stuff === 'Toe Jam'){
  play = 'EWWW';
  console.log(play);
}else{
  play = 'error';
  console.log(play);
} */