// LOOPS in JS
// for (let i = 0; i < 100; i++) {
// 	//RUN SOME CODE
// 	if (i === 20) {
// 		console.log(`HEY YOU HIT 20!`);
// 		continue;
// 	}
// 	console.log(i);
// }

// const texts = [ `text1`, `text2`, `text3`, `text4`, `text5` ];

// // length gives number of elem in list or nb of char in string
// for (let i = 0; i < texts.length; i++) {
// 	console.log(texts[i]);
// }

//NEWWER VERSION OF FOR LOOPS

// const names = [ `Krow`, `Libish`, `Love`, `Neko`, `Richou`, `Doomsi` ];

// for (let name of names) {
// 	// console.log(name); this will input all  the names
// 	console.log(names.indexOf(name)); // this will input name value
// }

//SPECIFICALY FOR ARRAYS
//forEach is 20% SLOWER than for, use only when REQUIRED
// because you're inside a funciton you can't use break
// also exit keyword seem to not work
// names.forEach(function(name, index) {
// 	if (name === `Neko`) {
// 		console.log(`badabim badaboum`);
// 		// stop;
// 	}
// 	console.log(name, index);
// });

// ____________________ FOR IN AND WHILE LOOPS __________________
// for of is used in arrays, for in is used in objects
// const user = {
// 	name: `Krow`,
// 	age: 25,
// 	sub: 200,
// 	money: `lolno`
// }; // QUICK REMINDER : in objects, the thing on the left is called "key"
// and the thing on the right is called "value"
// and the whole thing is a "property"

// for (let x in user) {
// 	console.log(x); // this will show the key;
// 	console.log(user[x]); // this will return value;
// }

//WHILE, DO WHILE
//while is the same than C
//do while is almost the same but will run at least once even if
//statement is false

let i = 0;

do {
	console.log(i);
	i++;
} while (i > 10);
