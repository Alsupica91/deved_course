//LOCAL STORAGE
//deleted when exithing seesion
// localStorage.setItem("todo", "feed the cat");
// localStorage.setItem("pouet", "je fais du chocolat");
// localStorage.setItem("user", "Krow");
// localStorage.setItem("todo", "feed the wife");
// localStorage.setItem("poueti", "skalaponk");

//SESSION STORAGE
//stay on the machine
// sessionStorage.setItem("testi", "test");
// localStorage.clear(); use to clear local file

//GETTING STUFF BACK as a string
// const user = localStorage.getItem("user");
// console.log(user);
// console.log(typeof user);

const todoList = ["feed ta mere", "wash", "listen to Hardcore music"];
// localStorage.setItem("todo", todoList); that will only take the words and put it in one string
// const retrieved = localStorage.getItem("todo"); that will retrieve the string

localStorage.setItem("todo", JSON.stringify(todoList)); // where this also turns it into a single string BUT it keeps the [] and ""
const retrieved = JSON.parse(localStorage.getItem("todo")); // parse the string to put it into array or object

console.log(typeof retrieved);
