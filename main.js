import React from 'react';
import ReactDOM from 'react-dom';

import { createStore } from './redux_functions/createStore';
import { todoApp } from './reducers/todoApp';
import { TodoApp } from './components/TodoApp';

const store = createStore(todoApp);

const render = () => {
  console.log(store.getState());
  ReactDOM.render (
    <TodoApp todos={store.getState().todos} store={store} />,
    document.getElementById('root')
  );
};

store.subscribe(render);
render();
