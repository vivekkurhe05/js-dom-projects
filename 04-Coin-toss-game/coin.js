const main = document.querySelector('.main');
const game = {score:0, streak:0};

const btn = document.createElement('button');
const btn1 = document.createElement('button');
const output = document.createElement('div');
const scoring = document.createElement('div');
const message = document.createElement('div');
message.classList.add('message');
message.textContent = 'Press Button to Start Game';
main.append(message);
main.append(scoring);
main.append(output);
main.append(btn);
main.append(btn1);
btn.classList.add('btn');
btn1.classList.add('btn');
scoring.classList.add('score')
const coin = document.createElement('div');
const sideA = document.createElement('div');
const sideB = document.createElement('div');
output.append(coin);
coin.append(sideA);
coin.append(sideB);

sideA.innerHTML = "&#9786;"; // happy face
sideB.innerHTML = "&#9785;"; // sad face
coin.classList.add('coin');
coin.style.display = 'none';
btn.textContent = 'Start Game';
btn.addEventListener('click', playGame);
btn1.textContent = 'Heads';
btn1.addEventListener('click', playGame);
btn1.style.display = 'none';

btn.style.backgroundColor = 'red';
btn1.style.backgroundColor = 'blue';

function playGame(e) {
    // console.log(e.target.textContent);
    const el = e.target;
    if(el.textContent === 'Start Game') {
        console.log('Start Game');
        game.score = 0;
        game.streak = 0;
        message.textContent = 'Select either Heads or Tails';
        btn.textContent = 'Heads';
        btn1.textContent = 'Tails';
        btn1.style.display = 'block';
        coin.style.display = 'block';
        addScore();
    }else if(el.textContent === 'Heads') {
        console.log('Heads');
        coinFlipper('Heads');
    }else if(el.textContent === 'Tails') {
        console.log('Tails');
        coinFlipper('Tails');
    }
}

function coinFlipper(val) {
    const ranValue = Math.floor(Math.random()*2);
    let result = '';
    if(ranValue === 1) {
        sideA.style.display = 'block';
        sideB.style.display = 'none';
        result = 'Heads';
    }else {
        sideB.style.display = 'block';
        sideA.style.display = 'none';
        result = 'Tails';
    }
    // add scoring
    if(result === val) {
        game.score++;
        game.streak++;
        message.textContent = `You Picked ${val} Correct, was ${result}`;
    }else{
        game.streak = 0;
        game.score--;
        message.textContent = `Wrong!!! was ${result}`;
    }
    addScore();
    message.style.display = 'block';
    return result;
}

function addScore() {
    scoring.innerHTML = `Score: ${game.score} Streak: (${game.streak})`;
}