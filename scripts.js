
let title = document.getElementById('title');
let paragraph = document.getElementById('paragraph');
let list = document.getElementById('list');

const titleButton = document.getElementById('titleButton');
const listButton = document.getElementById('listButton');

titleButton.addEventListener('click', () => {
    title.textContent = 'Hello, JavaScript!';
    paragraph.textContent = 'The title has been changed.'
});


let itemNumber = 4;

listButton.addEventListener('click', () => {
    const listItem = document.createElement('li');
    listItem.textContent = 'Item ' + itemNumber;
    document.getElementById('list').appendChild(listItem);
    itemNumber++;
});