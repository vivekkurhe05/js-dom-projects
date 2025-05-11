const main = document.querySelector('.main');
const typeArea = document.querySelector('.typer');
const btn = document.querySelector('.btn');
const wording = ["Do you like JavaScript", "Have fun with code"];
const game = {start:0, end:0, user:"", arrText:"", time:""};
typeArea.disabled = true;

btn.addEventListener('click', (e) => {
    if(btn.textContent.toLowerCase() === 'start') {
        typeArea.disabled = false;
        startGame();
        typeArea.value = "";
        btn.textContent = 'Done';
    } else if(btn.textContent.toLowerCase() === 'done') {
        typeArea.disabled = true;
        endGame();
    }
});

function startGame() {
    let ranTextIndex = Math.floor(Math.random() * wording.length);
    main.textContent = wording[ranTextIndex];
    game.arrText = main.textContent;
    const date = new Date();
    game.start = date.getTime();
}

function endGame() {
    game.user = typeArea.value;
    const date = new Date();
    game.end = date.getTime();
    const totalTime = ((game.end - game.start)/1000);
    let result = checkResult();
    main.textContent = `Time:${totalTime} Score:${result.score} out of ${result.total}`;
    btn.textContent = 'Start';
}

function checkResult() {
    const val1 = game.user.split(" ");
    const val2 = game.arrText.split(" ");
    let score = 0;
    val1.forEach((word, i) => {
        if(word === val2[i]) {
            score++;
        }
    });

    return {score:score, total:val2.length};
}