const main = document.querySelector('.main');
const message = document.createElement('div');
const output = document.createElement('div');
const coin = document.createElement('div');
const sideA = document.createElement('div');
const sideB = document.createElement('div');
const scoring = document.createElement('div');
const btn = document.createElement('button');
const btn1 = document.createElement('button');

const game = {score: 0, streak: 0};
message.classList.add('message');
message.textContent = "Press Button to Start Game";
main.append(message);

scoring.classList.add('score');
main.append(output);
output.append(scoring);



coin.classList.add('coin');
coin.style.display = 'none';
output.append(coin);

sideA.innerHTML = "&#9786;";
sideB.innerHTML = "&#9785;";
coin.append(sideA);
coin.append(sideB);


btn.classList.add('btn');
btn1.classList.add('btn');
btn.textContent = 'Start Game';
btn1.textContent = 'Heads';
btn1.style.display = 'none';
btn.style.backgroundColor = 'red';
btn1.style.backgroundColor = 'blue';
main.append(btn);
main.append(btn1);

btn.addEventListener('click', playGame);
btn1.addEventListener('click', playGame);

function playGame(e) {
    const el = e.target;

    if(el.textContent === "Start Game") {
        message.textContent = "Select either Heads or Tails";
        btn.textContent = "Heads";
        btn1.textContent = "Tails";
        btn1.style.display = 'block';
        coin.style.display = 'block';
        addScore();
    } else if(el.textContent === "Heads") {
        console.log("Heads");
        coinFlipper("Heads");
    } else if(el.textContent === "Tails") {
        console.log("Tails");
        coinFlipper("Tails");
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

    if(result === val) {
        game.score++;
        game.streak++;
        message.textContent = `You picked ${val}. Correct was ${result}`;
    }else {
        game.streak = 0;
        game.score--;
        message.textContent = `Wrong!!! was ${result}`;
    }
    addScore();
    message.style.display = 'block';
}

function addScore() {
    scoring.innerHTML = `Score: ${game.score} Streak: (${game.streak})`;
}