//declare random array
const list = ["qw", "as", "zx", "ty", "gh"];

//	FOR EACH HIGHER ORDER FUNCTION
// list.forEach(function (item) {
//   console.log(item);
// });

//MAP
const newList = list.map(function (item) {
  return item.toUpperCase();
});

console.log(newList);
console.log(list);
