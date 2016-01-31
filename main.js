import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from './redux_functions/createStore';
// import { todos } from './reducers/todos';
import { todoApp } from './reducers/todoApp';

const store = createStore(todoApp);
console.log(store);
const render = () => {
  ReactDOM.render (
    <div>Hello world!</div>,
    document.getElementById('root')
  )
}
console.log(store.getState());
store.dispatch({
  type: 'ADD_TODO',
  text: 'Learn Redux!',
  id: 0
});
store.dispatch({
  type: 'ADD_TODO',
  text: 'Test toggle',
  id: 1
});
console.log(store.getState());
store.dispatch({
  type: 'TOGGLE_TODO',
  id: 1
});
console.log(store.getState());
store.dispatch({
  type: 'SET_VISIBILITY_FILTER',
  filter: 'SHOW_COMPLETED'
});
console.log(store.getState());


// store.subscribe(render);
render();
