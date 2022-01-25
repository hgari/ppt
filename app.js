//refresh page for new game
resetBtn.addEventListener('click',() => location.reload());

let choices=['Piedra','Pape','Tijera'];

optionBtn.forEach(button => {
    button.addEventListener('click',getPlayerChoice)
}); 

function computerPlay(){
    return choices[Math.floor(Math.random() * choices.length)] ;
}


function getPlayerChoice(e) {
    let playerSelection= (e.target.id);
    playerChoice = e.target.textContent;
    //playRound(playerSelection, computerPlay());
  }

