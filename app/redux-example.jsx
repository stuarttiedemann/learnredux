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

var stateDefault = {
  name: 'Anonymous',
  hobbies: [],
  movies: []
};

var nextHobbyId = 1;
var nextMovieId = 1;

// var oldReducer = (state = stateDefault, action) => {
//     // state = state || {name: 'Anonymous'};

//     switch (action.type) {
//       case 'CHANGE_NAME': 
//         return {
//           ...state,
//           name: action.name
//         };
//       case 'ADD_HOBBY':
//         return {
//           ...state,
//           hobbies: [
//             ...state.hobbies,
//             {
//               id: nextHobbyId++,
//               hobby: action.hobby
//             }
//           ]
//         };
//       case 'REMOVE_HOBBY':
//         return {
//           ...state,
//           hobbies: state.hobbies.filter((hobby) => hobby.id !== action.id)
//         };
//       case 'ADD_MOVIE':
//         return {
//           ...state,
//           movies: [ 
//             ...state.movies,
//             {
//               id:nextMovieId++,
//               title: action.title,
//               genre: action.genre
//             }
//           ]
//         };
//       case 'REMOVE_MOVIE':
//         return {
//           ...state,
//           movies: state.movies.filter((movie) => movie.id !== action.id)
//         };
//       default:
//         return state;
//     }
// };

var nameReducer = (state = 'Anonymous', action) => {
  switch (action.type) {
    case 'CHANGE_NAME':
      return action.name
    default:
      return state;
  };
};

var hobbiesReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_HOBBY':
      return [
        ...state,
        {
          id: nextHobbyId++,
          hobby:action.hobby
        }
      ];
    case 'REMOVE_HOBBY':
      return state.filter((hobby) => hobby.id !== action.id);
    default:
      return state;
  }
};

var moviesReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_MOVIE':
      return [
        ...state,
        {
          id: nextMovieId++,
          movie:action.movie
        }
      ];
    case 'REMOVE_MOVIE':
      return state.filter((movie) => movie.id !== action.id);
    default:
      return state;
  }
}

var reducer = redux.combineReducers({
  name: nameReducer,
  hobbies: hobbiesReducer,
  movies: moviesReducer
});

var store = redux.createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

// Subscribe to changes
var unsubscribe = store.subscribe(() => {
  var state = store.getState();

  console.log('name is', state.name);
  document.getElementById('app').innerHTML = state.name;

  console.log('new state', store.getState());
});
// unsubscribe();

var currentState = store.getState();
console.log('currentState', currentState);

store.dispatch({
  type: 'CHANGE_NAME',
  name: 'Stuart'
});

store.dispatch({
  type: 'ADD_HOBBY',
  hobby: 'Running'
});

store.dispatch({
  type: 'ADD_HOBBY',
  hobby: 'Walking'
});

store.dispatch({
  type: 'REMOVE_HOBBY',
  id: 2
});

store.dispatch({
  type: 'ADD_MOVIE',
  title: 'The Big Short',
  genre: 'Documentary'
});

store.dispatch({
  type: 'CHANGE_NAME',
  name: 'Liz'
});

store.dispatch({
  type: 'ADD_MOVIE',
  title: 'X-Men',
  genre: 'Action'
});

store.dispatch({
  type: 'REMOVE_MOVIE',
  id: 1
});


