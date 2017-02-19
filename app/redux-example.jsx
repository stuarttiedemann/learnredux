var redux = require('redux');

console.log('Starting redux');

//Pure function
// function add (a, b) {
//   return a + b;
// }

// function changeProp(obj) {
//   return {
//     ...obj,
//     name: 'Stuart'
//   };
// }

// var startingValue = {
//   name:'Andrew',
//   age: 25
// };

// var res = changeProp(startingValue);
// console.log(startingValue);
// console.log(res);

var store = redux.createStore();