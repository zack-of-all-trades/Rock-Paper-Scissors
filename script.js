const pScore = document.getElementById('pScore');
const cScore = document.getElementById('cScore');
const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');
const pChoice = document.getElementById('pChoice');
const cChoice = document.getElementById('cChoice');
const winLoseWords = document.getElementById('winner');
let choices = ['Rock', 'Paper', 'Scissors'];
let score = 0;

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
    cScore.textContent = score++;

  }else if(getComputerChoice === 'Scissors'){
    result = 'Rock beats Scissors. You Win!';
    winLoseWords.textContent = result;
    pScore.textContent = score++;

  }else{
    result = 'error';
    winLoseWords.textContent = result;
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
    cScore.textContent = score++;

  }else if(getComputerChoice === 'Rock'){
    result = 'Paper beats Rock. You Win!';
    winLoseWords.textContent = result;
    pScore.textContent = score++;
    
  }else{
    result = 'error';
    winLoseWords.textContent = result;
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
    cScore.textContent = score++;

  }else if(getComputerChoice === 'Paper'){
    result = 'Scissors beats Paper. You Win!';
    winLoseWords.textContent = result;
    pScore.textContent = score++;

  }else{
    result = 'error';
    winLoseWords.textContent = result;
  }
}

/* The below is a test because the above wasn't working 

It Works...had "const stuff" line in wrong spot!..under "const tests"

const tests = ["Blood", "Boogers", "Toe Jam"];

testing.onclick = function(){
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
  } 
}
*/