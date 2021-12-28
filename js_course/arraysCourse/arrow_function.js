const games = [
  { title: "Mass Effect", rating: 5 },
  { title: "Dark Soul", rating: 10 },
  { title: "Hollow knight", rating: 9.5 },
  { title: "Doom Eternal", rating: 9 },
];

//how we use to do map
// const newList = games.map(function (game) {
//   return game.rating > 8.9 ? game : "nope";
// });

// New way of doing it : arrow function
const arrowVideos = games.map((game) => {
  return game.rating > 8.9 ? game : "nope";
});

//but we can also do it like this
const arrowVideos2 = games.map((game) => (game.rating > 8 ? game : "niet"));

// console.log(newList);
console.log(arrowVideos2);
