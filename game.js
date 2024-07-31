
let number = Math.trunc(Math.random() * 20) + 1;

let score = 20;
let highscore = 0;
//console.log(number);
//document.querySelector('.number').textContent = number;

const displayMessage = function(message){
    document.querySelector('.message').textContent = message;
}

document.querySelector('.check').addEventListener('click', function() {
    let guess = Number (document.querySelector('.guess').value);
    
    console.log(guess);
    
    if(!guess) {
        //document.querySelector('.message').textContent = 'Please make a guess';
        displayMessage('Please make a guess');
        
    } else if ( guess === number){

        document.querySelector('.number').textContent = guess;
        score + 1
        document.querySelector('.score').textContent = score;
        highscore = score;
        document.querySelector('.highscore').textContent = score;
        //document.querySelector('.message').textContent = 'Correct Answer';
        displayMessage('Correct Answer');
        document.querySelector('body').style.backgroundColor = 'green';
        document.querySelector('.number').style.width = '30rem';
    }else if(guess !== number){
        score--
      document.querySelector('.score').textContent = score;
        //document.querySelector('.message').textContent = 'Too High';
        displayMessage(guess < number ? 'Too low' : 'Too high');
        
        document.querySelector('body').style = 'background-color:red;'
    }/*else if(guess < number){
        score--
        document.querySelector('.score').textContent = score;
        document.querySelector('.message').textContent = 'Too low';
        
        document.querySelector('body').style = 'background-color:red;'
    }*/

    if(score === 0 || score < 0){
        document.querySelector('.message').textContent = 'You lost the game';
        score = 0;
        document.querySelector('.score').textContent = score;
    }
     
})

document.querySelector('.again').addEventListener('click', function(){
    score = 20;
    document.querySelector('.score').textContent = score;
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').textContent = '?';
    document.querySelector('.message').textContent = 'Start Guessing';
    number = Math.trunc(Math.random() * 20) + 1;
    document.querySelector('.number').value = number;
    document.querySelector('.guess').value = '';
    document.querySelector('.number').style.width = '15rem';
})
