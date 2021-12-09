// basically the same than in C exept
// you can asign a default value to an argument of a function in case you don't recieve enough arguments
function greet(name) {
	console.log(`Welcome to our website ` + name);
}
function signUp() {
	let name = prompt(`What is your name ?`);
	greet(name);
}
console.log(`rest of the code`);

signUp();
