const button = document.querySelector('#submit');
const todoList = document.querySelector('#todo-list');
const todoNr = document.querySelector('.todo-nr b');
const items = todoList.children;
const mainTitle = document.querySelector('.main-title');

//ATTACH AN EVENT LESTENER
//quand on utilise funtion() juste en dessous. on dit 'Anonymous' funtion, c'est juste
//pour dire qu'elle est defini en dessous. Ca sert si on utilise qu'une fois la
//fonction directement et pas de multiple fois ailleur dans le code
// button.addEventListener('click', addItem); // si on met des () a addItem, elle run automatiquement, sans devoir cliquer

// button.addEventListener('click', function() {
// 	const newItem = document.createElement('li');
// 	newItem.classList.add('item');
// 	newItem.innerText = `Item ${items.length + 1}`;
// 	console.log(newItem.classList);
// 	todoList.appendChild(newItem);
// 	todoNr.innerText = items.length;
// });

// function addItem() {
// 	console.log('added a new item');
// } 	USE FOR EXEMPLE ABOVE

//With this you can acces individual style and change it based on event
// button.addEventListener('click', function() {
// 	mainTitle.style.color = 'red';
// 	mainTitle.style.fontSize = '50px';
// });

//You can also add a class that you would have styled with css !
// on peut ajouter event dans funciton() pour choper des infos sur l'event choisis
// button.addEventListener('click', function(event) {
// 	console.log(event);
// mainTitle.classList.add('color'); this is to perma add
// mainTitle.classList.toggle('color'); // this add or remove
// });

//same but with keyboard input
button.addEventListener('keydown', function(event) {
	console.log(event);
	if (event.keyCode === 32) {
		mainTitle.classList.toggle('color');
	}
});
