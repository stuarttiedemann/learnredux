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

var store = redux.createStore(reducer);

console.log('currentState', store.getState());

store.dispatch({
  type:'CHANGE_SEARCH_TEXT',
  searchText: 'sometext'
});

console.log('searchText should be sometext', store.getState());

