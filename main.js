import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from './create-store';
import { todos } from './reducers/todos';


const store = createStore(todos);
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


// store.subscribe(render);
render();
