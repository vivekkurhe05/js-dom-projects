const output = document.querySelector('.output');
const inputEl = document.createElement('div');
const message = document.createElement('div');
const btn = document.createElement('button');
const game = {guesses:0, num:2};

outputMessage('Click button to start game');
btn.textContent = 'Start Game';

message.classList.add('message');
btn.classList.add('btn');

output.append(message);
output.append(inputEl);
output.append(btn);

btn.addEventListener('click', (e) => {

    if(e.target.textContent === 'Start Game') {
        e.target.textContent = 'Check Answer';
        makeBoard();
        outputMessage('Guess the combo adjust the dials');
    }else if(e.target.textContent === 'Check Answer') {
        checkAnswer();
        game.guesses++;
    }
});

function checkAnswer() {
    const combos = document.querySelectorAll('.dial'); // returns NodeList
    
    let winner = 0;
    combos.forEach((input) => {
        let visible_val = input.value;
        if(Number(visible_val) === input.correct) {
            input.style.backgroundColor = 'green';
            winner++;
        }else if(Number(visible_val) < input.correct) {
            input.style.backgroundColor = 'red';
        }else if(Number(visible_val) > input.correct) {
            input.style.backgroundColor = 'blue';
        }
    
    })
    
    if(winner === combos.length) {
        message.textContent = "Game Over";
        gameOver();
    }else{
        outputMessage(`You got ${winner} of ${combos.length} (${game.guesses})`);
    }
}

function gameOver() {
    outputMessage(`Game over it took ${game.guesses} guesses`);
    btn.textContent = 'Start Game';
}

function makeBoard() {
    inputEl.textContent = "";
    console.log("Create 2 input nodes and display");
    for(let i=0; i<game.num; i++) {
        const el = document.createElement('input');
        el.setAttribute('type', 'number');
        el.setAttribute('min', '0');
        el.setAttribute('max', '9');
        el.setAttribute('value', '5');
        el.correct = Math.floor(Math.random() * 10);
        el.classList.add('dial');
        inputEl.append(el);
    }
}

function outputMessage(msg) {
    message.textContent = msg;
}