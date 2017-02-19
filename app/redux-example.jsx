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

var reducer = (state = {name: 'Anonymous'}, action) => {
    // state = state || {name: 'Anonymous'};

    switch (action.type) {
      case 'CHANGE_NAME': 
        return {
          ...state,
          name: action.name
        };
      default:
        return state;
    }
};

var store = redux.createStore(reducer);

var currentState = store.getState();
console.log('currentState', currentState);

store.dispatch({
  type: 'CHANGE_NAME',
  name: 'Stuart'
});

console.log('Name should be Stuart', store.getState());


