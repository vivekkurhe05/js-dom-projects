const output = document.querySelector('.output');
const message = document.createElement('div');
const gameArea = document.createElement('div');
const btn = document.createElement('button');
const game = {guesses:0, num:2};

output.append(message);
output.append(gameArea);
output.append(btn);
btn.classList.add('btn');
message.classList.add('message');

btn.textContent = 'Start Game';
outputMessage('Click button to start game');

btn.addEventListener('click', (e) => {
    if(btn.textContent === 'Start Game') {
        game.guesses=0;
        makeBoard();
        btn.textContent = 'Check Answer';
        outputMessage('Guess the combo adjust the dials');
    }else if(btn.textContent === 'Check Answer') {
        checkAnswer();
        game.guesses++;
    }
});

function checkAnswer() {
    const combos = document.querySelectorAll('.dial');
    let winners = 0;
    combos.forEach((el) => {
        console.log(el.correct);
        el.style.color = 'white';
        if(el.correct == Number(el.value)) {
            winners++;
            el.style.backgroundColor = 'green';
        }else if(el.correct > Number(el.value)) {
            el.style.backgroundColor = 'red';
        }else if(el.correct < Number(el.value)) {
            el.style.backgroundColor = 'blue';
        }
    });
    if(winners === combos.length) {
        outputMessage('Game Over');
        gameOver();
    }else{
        outputMessage(`You got ${winners} of ${combos.length} (${game.guesses})`);
    }
}

function gameOver() {
    outputMessage(`Game Over it took ${game.guesses} guesses`);
    btn.textContent = 'Start Game';
}

function makeBoard() {
    gameArea.innerHTML = "";
    for(let x=0;x<game.num;x++) {
        const el = document.createElement('input');
        el.setAttribute('type', 'number');
        el.max = 9;
        el.min = 0;
        el.correct = Math.floor(Math.random() * 10);
        el.value = 5;
        el.classList.add('dial');
        gameArea.append(el);
    }
}

function outputMessage(html) {
    message.innerHTML = html;
}