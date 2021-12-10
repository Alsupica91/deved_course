//generate a random nb DONE
//give user ability to guess
//if wrong: ask again (hint)
//if win: say so

// THIS IS A BIG DIFFERENCE FROM C !
// if you declare let guess inside do's bracket, it stays only in that scope and
// it then cannot be used by while, so you get an error
// so declare variable at start of function

function guessGame() {
	const randomNr = Math.floor(Math.random() * 11);
	console.log(randomNr);
	let guess;

	do {
		guess = prompt('Guess a number between 0 and 10');
		console.log(guess, randomNr);
		if (randomNr > guess) {
			console.log('You guessed too low');
		} else if (randomNr < guess) {
			console.log(`You guessed too high`);
		}
	} while (guess != randomNr);
	console.log(`YOU WON !`);
}

guessGame();
