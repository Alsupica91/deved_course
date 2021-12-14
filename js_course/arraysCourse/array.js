let bank = 250;
let newBank = bank;
newBank = 500;

//OBJECTS AND ARRAYS REFERENCE TYPES
//array
const names = ["Ed", "Me", "You"];

if (1) {
  const newNames = names;
  newNames.push("Mom");
}
// console.log(newNames);
console.log(names);

//object
let tweet = {
  name: "Krow",
  tweets: 20,
  age: 28,
};

let newTweet = tweet;
newTweet.tweets++;

tweet = newTweet;

console.log(tweet);
