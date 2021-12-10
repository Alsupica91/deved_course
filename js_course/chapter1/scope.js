//NOTES : /!\ don't forget to call the funciton dummy
// big difference from C. BLOCKS have their own scope for variables
// in fact depends of declaration, when using "var" it's like in C
// if variable is not "replace" or re declared, you can use it like in C
// if redeclared with let, values are not lost on the above scope
// you CAN'T redeclare a variable using let on the same scope

//GLOBAL SCOPE
let food = `apple`;
let fruits = 5;
let x = 10;

function store() {
	// let food = `pouet`;
	console.log(food);
	if (food) {
		let food = `chlak`;
		var pouet = 'pouet';
		console.log(`test`);
	}
	console.log(food, pouet);
}

store();
// console.log(pouet); this shows that var pouet works like in C

// function store() {
// 	//	FUNCTION SCOPE
// 	let food = 'banana';
// 	let fruits = 50;
// }

//BLOCK SCOPE
// for (let fruits = 0; fruits < 10; fruits++) {
// 	console.log(fruits);
// 	let x = 20;
// }

// if (true) {
// 	console.log(food, x);
// }

// console.log(food, fruits);
