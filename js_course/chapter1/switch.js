// // switch cases are used to trim if forests

// const text = `banana3`;

// // if (text === `banana`) {
// // 	// code
// // } else if (text === `apple`) {
// // 	// code
// // }

// // tout le code apres le bon case est exec, use break;
// switch (text) {
// 	case `banana1`:
// 		console.log('whatever');
// 	case `banana2`:
// 		console.log('whatever');
// 	case `banana3`:
// 		console.log('whatever');
// 	case `banana`:
// 		console.log('whatever');
// 		break;
// 	case `apple`:
// 		console.log(`whatever2`);
// 	default:
// 		console.log(`what fruit is dat ?`);
// }

let userInput = prompt(`Tell me a fruit`);
let convertedValue = userInput.toLowerCase();

switch (convertedValue) {
	case `kiwi`:
		console.log(`kiwi fun fact`);
		break;
	case `banana`:
		console.log(`banana fun fact`);
		break;
	case `apple`:
		alert(`apple fun fact`);
		break;
	default:
		console.log(`no fruit`);
}
