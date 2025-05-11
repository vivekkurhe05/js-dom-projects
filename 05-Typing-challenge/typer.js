const main = document.querySelector('.main');
const typeArea = document.querySelector('.typer');
const btn = document.querySelector('.btn');

const wording = ["Do you like JavaScript", "Have fun with Code"];
const game = {start:0, end:0,user:"",arrText:""};
typeArea.disabled = true;

btn.addEventListener('click', (e) => {
    if(btn.textContent === 'Start') {
        playGame();
        typeArea.disabled = false;
        typeArea.value = "";
    }else if(btn.textContent === 'Done') {
        typeArea.disabled = true;
        main.style.borderColor = 'white';
        endGame();
    }
})

function playGame() {
    let ranText = Math.floor(Math.random() * wording.length);
    main.textContent = wording[ranText];
    game.arrText = wording[ranText];
    console.log(game);
    main.style.borderColor = 'red';
    btn.textContent = 'Done';
    const date = new Date();
    game.start = date.getTime();
}

function endGame() {
    const date = new Date();
    game.end = date.getTime();
    const totalTime = ((game.end - game.start)/1000);
    game.user = typeArea.value;
    const correct = checkResult();
    console.log(correct);
    main.style.borderColor = 'white';
    main.innerHTML = `Time:${totalTime} Score:${correct.score} out of ${correct.total}`;
    btn.textContent = 'Start';
}

function checkResult() {
    let val1 = game.arrText.split(" ");
    let val2 = game.user.split(" ");
    let score = 0;
    val1.forEach((word,i) => {
        if(word === val2[i]){
            score++;
        }
    });

    return {score:score, total:val1.length};
}