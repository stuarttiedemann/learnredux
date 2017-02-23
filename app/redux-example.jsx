var redux = require('redux');

console.log('Starting redux');

var actions = require('./actions/index');
var store = require('./store/configureStore').configure();

// Subscribe to changes
var unsubscribe = store.subscribe(() => {
  var state = store.getState();

  console.log('name is', state.name);
  
  if (state.map.isFetching) {
    document.getElementById('app').innerHTML = 'Loading...';
  } else if (state.map.url) {
    document.getElementById('app').innerHTML = '<a href="' + state.map.url + '"target="_blank">View Your Location</a>'
  }

  console.log('new state', store.getState());
});
// unsubscribe();

var currentState = store.getState();
console.log('currentState', currentState);

store.dispatch(actions.fetchLocation());

store.dispatch(actions.changeName('Stuart'));

store.dispatch(actions.addHobby('Running'));

store.dispatch(actions.addHobby('Walking'));

store.dispatch(actions.removeHobby(2));

store.dispatch(actions.addMovie('The Big Short', 'Documentary'));

store.dispatch(actions.changeName('Liz'));

store.dispatch(actions.addMovie('X-Men', 'Action'));

store.dispatch(actions.removeMovie(1));



