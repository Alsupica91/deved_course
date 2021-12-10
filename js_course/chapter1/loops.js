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

const names = [ `Krow`, `Libish`, `Love`, `Neko`, `Richou`, `Doomsi` ];

// for (let name of names) {
// 	// console.log(name); this will input all  the names
// 	console.log(names.indexOf(name)); // this will input name value
// }

//SPECIFICALY FOR ARRAYS
//forEach is 20% SLOWER than for, use only when REQUIRED
// because you're inside a funciton you can't use break
// also exit keyword seem to not work
names.forEach(function(name, index) {
	if (name === `Neko`) {
		console.log(`badabim badaboum`);
		// stop;
	}
	console.log(name, index);
});
