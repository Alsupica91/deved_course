// const collectionItems = document.getElementsByClassName('item');
// const nodeItems = document.querySelectorAll('.item');

// for (item of nodeItems) {
// 	console.log(item);
// }

const collectionItems = document.getElementsByClassName('item');
const todoList = document.getElementById('todo-list');
const hello = document.getElementsByClassName('hello')[0];

const newItem = document.createElement('li'); // this creates a new elem
newItem.classList.add('item'); // this give class item to new elem
newItem.innerText = 'Item 6';

todoList.appendChild(newItem); // adds new item to html code

hello.innerText = collectionItems.length; // this CHANGES text in h2 to nb of items
