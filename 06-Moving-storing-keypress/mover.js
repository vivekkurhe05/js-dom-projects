const main = document.querySelector('.main');
const output = document.querySelector('.output');
const ele = document.createElement('div');
const game = {actions:[]};
main.append(ele);
ele.classList.add('ele');

document.addEventListener('keydown', (e) =>{
    e.preventDefault()
    console.log(e.key);
    if(e.key === "ArrowLeft") {
        addAction('left');
    }else if(e.key === "ArrowRight") {
        addAction('right');
    }else if(e.key === "ArrowDown") {
        addAction('down');
    }else if(e.key === "ArrowUp") {
        addAction('up');
    }else if(e.key === "Enter") {
        mover();
    }
});

function mover() {
    if(game.actions.length > 0) {
        const ele1 = game.actions.shift();
        const val = ele1.textContent;
        ele1.remove();
        const pos = [ele.offsetLeft, ele.offsetTop];
        if(val === 'up'){
            pos[1]-=50;
        }else if(val === 'down') {
            pos[1]+=50
        }else if(val === 'left') {
            pos[0]-=50
        }else if(val === 'right') {
            pos[0]+=50
        }
        ele.style.left = pos[0] + 'px';
        ele.style.top = pos[1] + 'px';
        setTimeout(mover, 300);
    }
    return;
}

function addAction(val) {
    const span = document.createElement('span');
    span.textContent = val;
    span.classList.add('box');
    span.classList.add(val);
    game.actions.push(span);
    output.append(span);
    console.log(game.actions)
}