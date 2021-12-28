//SORT
const items = ["Banana", "Oragne", "Apple", "Mango"];
const ratings = [92, 56, 4, 2, 22, 45.6, 10, 80];

items.sort(); // will sort alphabeticly
console.log(items);

// ratings.sort(function (a, b) {
//   return a - b;
// });

// How or why it works not explained on tutorial.
// behavior (with the funtcion and two args as parameters) seem to be exclusiv to sort
ratings.sort((a, b) => a - b);

// To create a copy of an array you do :
const descRatings = [...ratings];

descRatings.sort((a, b) => b - a);
console.log(descRatings);

// With this you can create new arrays and concat them without changing
// the originals
const names = ["ed", "you"];
const otherNames = ["John", "Bon", "Jovi"];

const allNames = [...names, ...otherNames];
console.log(allNames);
