const button = document.querySelector('#submit');
const todoList = document.querySelector('#todo-list');
const todoNr = document.querySelector('.todo-nr b');
const items = todoList.children;
const mainTitle = document.querySelector('.main-title');

button.addEventListener('click', function() {
	const newItem = document.createElement('li');
	newItem.classList.add('item');
	newItem.innerText = `Item ${items.length + 1}`;
	todoList.appendChild(newItem);
	todoNr.innerText = items.length;
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
