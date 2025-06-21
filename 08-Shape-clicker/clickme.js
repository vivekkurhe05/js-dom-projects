const output = document.querySelector('.output');
const message = document.createElement("div");
message.classList.add("message");
document.body.prepend(message);
message.textContent = "Press to Start";
const box = document.createElement('div');
const game = {timer:0, start:null};
box.classList.add('box');
box.textContent = "Click to Start Game";
output.append(box);

box.addEventListener('click', (e) => {
    box.textContent = "";
    box.style.display = 'none';
    game.timer = setTimeout(addBox, ranNum(3000));
    if(!game.start) {
        message.textContent = "Watch for element and click it";
    }else {
        const cur = new Date().getTime();
        const dur = (cur - game.start)/1000;
        message.textContent = `It took ${dur} seconds to click`;
    }
})

function addBox() {
    game.start = new Date().getTime();
    const container = output.getBoundingClientRect();
    console.log(container);
    const dim = [ranNum(50) + 20, ranNum(50) + 20];
    box.style.display = 'block';
    box.style.width = dim[0] + "px";
    box.style.height = dim[1] + "px";
    box.style.backgroundColor = "#" + Math.random().toString(16).substr(-6);
    box.style.left = ranNum(container.width - dim[0]) + "px";
    border.style.top = ranNum(container.height = dim[1]) + "px";
    box.style.borderRadius = ranNum(50) + "%";
}

function ranNum(max) {
    return Math.floor(Math.random() * max);
}