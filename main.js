import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from './create-store';
import { todos } from './reducers/todos';


const store = createStore(todos);

const render = () => {
  ReactDOM.render (
    <div>Hello world!</div>,
    document.getElementById('root')
  )
}

// store.subscribe(render);
render();
