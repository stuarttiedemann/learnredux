var redux = require('redux');

console.log('Starting redux');

var stateDefault = {
  searchText: '',
  showCompleted: false,
  todos: []
};

var reducer = (state = stateDefault, action) => {
  switch (action.type) {
    case 'CHANGE_SEARCH_TEXT':
      return {
        ...state,
        searchText: action.searchText
      };
    default:
      return state;
  }
};

var store = redux.createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());


// Subscribe to changes
store.subscribe( () => {
  var state = store.getState();

  console.log('searchText is ', state.searchText);
  document.getElementById('app').innerHTML = state.searchText;
});

console.log('currentState', store.getState());

store.dispatch({
  type:'CHANGE_SEARCH_TEXT',
  searchText: 'It has rained all day today'
});

store.dispatch({
  type:'CHANGE_SEARCH_TEXT',
  searchText: 'Learning React is not the easiest thing I have done'
});

store.dispatch({
  type:'CHANGE_SEARCH_TEXT',
  searchText: 'March 30 is our anniversary'
});



