const button = document.querySelector('#submit');
const todoList = document.querySelector('#todo-list');
const todoNr = document.querySelector('.todo-nr b');
const items = todoList.children;
const mainTitle = document.querySelector('.main-title');
const nameInput = document.querySelector('.name-input');

button.addEventListener('click', function(e) {
	e.preventDefault();
	//Create element
	const newItem = document.createElement('li');
	//Adding class
	newItem.classList.add('item');
	//adding the text
	newItem.innerText = nameInput.value;
	todoList.appendChild(newItem);
	todoNr.innerText = items.length;
	//Delete input from value
	nameInput.value = "";
	//Create the element and attaching the listener
	newItem.addEventListener('click', deleteItem);
});

// for (item of items) {
// 	item.addEventListener('click', deleteItem);
// }

// when you run an event, the first argument of the function will be reserved to the event
//so you could use deleteItem(whatever) where "whatever" would store the event info
// here, you can use e.target to specificaly select what you clicked on
function deleteItem(e) {
	// console.log(e.target);
	e.stopPropagation(); // this is how you stop event bubbling up
	e.target.remove();
}

todoList.addEventListener('click', function() {
	todoList.classList.toggle('fade');
});
