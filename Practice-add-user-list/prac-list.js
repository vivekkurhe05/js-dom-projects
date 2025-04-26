const curList = [];
const output = document.querySelector('.output');
const myInput = createMyElement(output, 'input', 'myInput');
myInput.setAttribute('type', 'text');
const myBtn = createMyElement(output, 'button', 'btn');
myBtn.textContent = 'Add New User';
let getData = localStorage.getItem('curList');

window.addEventListener('DOMContentLoaded', (e) => {
    if(getData) {
        const users = JSON.parse(getData);
        users.forEach(user => {
            addNewUser(user);
        })
    }
})

myBtn.addEventListener('click', (e) => {
    let userName = myInput.value;
    if(userName.length > 0) {
        addNewUser(userName);
        myInput.value = "";
    }
});

function updater() {
    const myListItems = document.querySelectorAll('.info');
    curList.length = 0;
    myListItems.forEach(user => {
        curList.push(user.textContent);
    })
    localStorage.setItem('curList', JSON.stringify(curList));
}

function addNewUser(username) {
    curList.push(username);
    const ul = createMyElement(output, 'ul', 'myList');
    const li = createMyElement(ul, 'li', 'myList');
    const div = createMyElement(li, 'div', 'container');
    const span1 = createMyElement(div, 'span', 'info');
    span1.textContent = username;
    const span2 = createMyElement(div, 'span', 'editer');
    span2.textContent = 'Edit';
    const span3 = createMyElement(div, 'span', 'del');
    span3.textContent = 'Delete';

    span2.addEventListener('click', (e) => {
        if(e.target.textContent === 'Edit') {
            span1.style.backgroundColor = 'yellow';
            span1.setAttribute('contenteditable', true);
            e.target.textContent = 'Save';
        }else {
            span1.style.backgroundColor = 'white';
            span1.setAttribute('contenteditable', false);
            e.target.textContent = 'Edit';
            updater()
        }
    });

    span3.addEventListener('click', (e) => {
        li.remove();
        updater();
    });
    updater();
}

function createMyElement(parent, elType, classname) {
    let ele = document.createElement(elType);
    ele.classList.add(classname);
    parent.append(ele);
    return ele;
}