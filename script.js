//generate secret number between 1 to 20
let secretNumber = Math.trunc(Math.random()*20) + 1;
console.log(secretNumber);

//initial score 20
let score = 20;

let highscore = 0;

let audio = new Audio('win.mp3');

//message can be vary

const displayMessage = (message) =>{
  document.querySelector('.message').textContent = message;
}

//game logic 
//1. when input a number a click on check it'll store into guess

document.querySelector('.check').addEventListener('click', ()=>{

  const guess = Number(document.querySelector('.guess').value);

  //console.log(guess, typeof guess);

  //edge case if input is not a number

  if(!guess){

     document.querySelector('.message').textContent ='⛔ No number!';

//check the guess is same as secret number
  }else if(guess === secretNumber){
//if it's then change body color
//show the winning message
//also show the secret number
  document.querySelector('body').style.backgroundColor = '#60b347';
  document.querySelector('.message').textContent = '🎉Correct Number';
  document.querySelector('.number').textContent = secretNumber;
//win sound play here
  audio.play();
//highscore store previous score if it's higher than previous
  highscore = localStorage.getItem("highscore");
  if(score > highscore){
    highscore = score;
    localStorage.setItem("highscore", score);
    document.querySelector('.highscore').textContent = highscore;
  }

 // reload();

  }else if(guess !== secretNumber){

    if(score > 1){

      document.querySelector('.message').textContent = guess > secretNumber ? 'Too High!' : 'Too Low';
      score--;
      document.querySelector('.score').textContent = score;

    }else{

      document.querySelector('.message').textContent = 'you lost the game!'

    }
  }
})



document.querySelector('.again').addEventListener('click',()=>{

  score = 20;
  secretNumber = Math.trunc(Math.random()*20) + 1;

  document.querySelector('.number').textContent = '?';
  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.message').value = 'Start guessing....';


})