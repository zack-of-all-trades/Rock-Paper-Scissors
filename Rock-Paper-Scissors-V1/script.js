const choices = ['Rock', 'Paper', 'Scissors'];

let pScore = 0;
let cScore = 0;
let round = 1;


for(let i = 1; i <= 5; i++){

  function playRound(playerSelection, computerSelection) {

    if(playerSelection === computerSelection){
      round++;
      return "It's a tie. Play Again.";
    
    }else if(playerSelection === 'Rock' && computerSelection === 'Paper'){
      cScore++;
      round++;
      return 'You Loose. Paper beats Rock.';
    
    }else if(playerSelection === 'Rock' && computerSelection === 'Scissors'){
      pScore++;
      round++;
      return 'You Win! Rock beats Scissors.';
    
    }else if(playerSelection === 'Scissors' && computerSelection === 'Rock'){
      cScore++;
      round++;
      return 'You Loose. Rock beats Scissors.';
    
    }else if(playerSelection === 'Scissors' && computerSelection === 'Paper'){
      pScore++;
      round++;
      return 'You Win! Scissors beats Paper.';
    
    }else if(playerSelection === 'Paper' && computerSelection === 'Scissors'){
      cScore++;
      round++;
      return 'You Loose. Scissors beats Paper.';
    
    }else if(playerSelection === 'Paper' && computerSelection === 'Rock'){
      pScore++;
      round++;
      return 'You Win! Paper beats Rock.';
    
    }else{
      round++
      return 'ERROR!';
    }
  }

  const getComputerChoice = choices[Math.floor(Math.random() * 3)];
  let playerSel = prompt('Lets play: Rock, Paper, Scissors. Best out of 5 wins. Round ' + round +'.');
  let playerSelection = playerSel.charAt(0).toUpperCase() + playerSel.slice(1).toLowerCase();
  let computerSelection = getComputerChoice;
  let result = '(Round ' + round + ') Player: ' + playerSelection + ' / Computer: ' + computerSelection;

  console.log(result);
  console.log(playRound(playerSelection, computerSelection));
  
  let score = '(Score) Player: ' + pScore + ' / Computer: ' + cScore;
  console.log(score);
  
}

function outcome(){
  if(pScore === cScore){
    return "It's a Tie.";
  
  }else if(pScore > cScore){
    return 'WINNER, WINNER, CHICKEN DINNER!!!';
  
  }else{
    return 'Loser, Lamo, Wanna Be!!!';
  }
}

alert(outcome());








