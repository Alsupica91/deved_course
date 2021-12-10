// this is the "old" way
// get element return an "html collection"
// const headers = document.getElementsByTagName('h2');
// const list = document.getElementsByClassName('item');
// const button = document.getElementById('submit'); //this only get first id with name submit

// you can also use query selector BUT it is slightly slower
const header = document.querySelector('h2'); // return THE FIRST h2 on the page
const headers = document.querySelectorAll('h2'); // return all as a NodeList
// const list = document.querySelector('.item'); //use . for class
const submit = document.querySelector('#submit'); //use # for id

//you can be more precise in what you want
const headerItem = document.querySelector('h2.item'); // will select first h2 with class of item
const list = document.querySelector('#list a'); // tag a in id list

// console.log(headers);
console.log(headers);
console.log(list);
console.log(submit);
