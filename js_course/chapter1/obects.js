//Object are basically structure

const user = {
	name: 'krow',
	age: 28,
	greet: function() {
		console.log('Hello There');
	}
};

// Methods == functions that are inside an object -.-

// Arrays in js
const listUsers = [ `Krow`, `Johny`, `Salamander`, `You` ]; // this is an object too so it has basic mwthods by default

// JS adds basic function to object automaticaly
listUsers.shift(); //remove first elem
listUsers.unshift('NEW'); // insert new elem at start of list
listUsers.pop(); // remove and return last elem
listUsers.push('NEW'); // add new elem at the end then return new length of array
listUsers.indexOf(`Krow`); // return pos in array
