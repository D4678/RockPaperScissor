const choices = document.querySelectorAll(".choice")
// console.log(choices)
const score = document.querySelector("#score")
const result = document.getElementById('result')
const restart = document.getElementById('restart')
const modal = document.querySelector('.modal')

const scoreboard = {
  player:0,
  computer:0
}

function getComputerChoice(){
  const randomNumber = Math.random()
  // console.log(randomNumber)
  if(randomNumber<0.32)
  return "rock";
  else if(randomNumber>=0.3)
  return "paper";
  else
  return "scissors";
}


function getWinner(p,c){
  // console.log(p,c)
  if(p===c){
    return 'draw';
  }else if(p==='rock'){
    if(c==='paper'){
      return 'computer';
    }else{
      return 'player'
    }

  }
  else if(p==='paper'){
    if(c==='scissors'){
      return 'computer';
    }else{
      return 'player';
    }
  }
  else if(p==='scissors'){
    if(c ==='rock'){
      return 'computer';
    }else{
      return 'player';
    }
  }
}

function showWinner(winner,computerChoice){
  console.log(computerChoice)
  if(winner == 'player'){
    scoreboard.player++;
    result.innerHTML = `
      <h1 class='text-win'>You Win</h1>
      <i class="fas fa-hand-${computerChoice} fa-10x"></i>
      <p>Computer Choice <strong>${computerChoice.charAt(0).toUpperCase()+computerChoice.slice(1)}
    `;
  }

  else if(winner == 'computer'){
    scoreboard.computer++;
    result.innerHTML = `
      <h1 class='text-lose'>You Lose</h1>
      <i class="fas fa-hand-${computerChoice} fa-10x"></i>
      <p>Computer Choice <strong>${computerChoice.charAt(0).toUpperCase()+computerChoice.slice(1)}
    `;
  }else{
    result.innerHTML = `
      <h1 class='text-lose'>It's Draw</h1>
      <i class="fas fa-hand-${computerChoice} fa-10x"></i>
      <p>Computer Choice <strong>${computerChoice.charAt(0).toUpperCase()+computerChoice.slice(1)}
    `;
  }

  score.innerHTML = `
  <p>Player: ${scoreboard.player}</p>
  <p>Computer: ${scoreboard.computer}</p>
  `
  modal.style.display = 'block'
}


function clearModal(e){
  if(e.target == modal){
    modal.style.display = 'none'
  }
}

function restartGame(){
  scoreboard.player = 0;
  scoreboard.computer = 0;
  score.innerHTML = `
  <p>Player: ${scoreboard.player}</p>
  <p>Computer: ${scoreboard.computer}</p>
  `
}


function play(e){
 restart.style.display = "inline-block"
//  console.log(e.target.id)
 const playerChoice = e.target.id
 const computerChoice = getComputerChoice()
//  console.log(computerChoice)
let winner = getWinner(playerChoice,computerChoice)
// console.log(winner)
showWinner(winner,computerChoice)
}



choices.forEach( x => x.addEventListener('click',play) )

window.addEventListener('click',clearModal)

restart.addEventListener('click',restartGame)