
let title = document.getElementById('title');
let paragraph = document.getElementById('paragraph');
let list = document.getElementById('list');

const titleButton = document.getElementById('titleButton');
const listButton = document.getElementById('listButton');

titleButton.addEventListener('click', () => {
    title.textContent = 'Hello, JavaScript!';
    paragraph.textContent = 'The title has been changed.'
});



titleButton.addEventListener('click', () => {
    const node = list.createElement('li');
    node.textContent = 'Item 4'
    list.getElementById('myList').appendChild(node);
});