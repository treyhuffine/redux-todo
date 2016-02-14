import React from 'react';
import ReactDOM from 'react-dom';

import { createStore } from './redux_functions/createStore';
import { todoApp } from './reducers/todoApp';
import { TodoApp } from './components/TodoApp';

const store = createStore(todoApp);

ReactDOM.render (
  <TodoApp store={store} />,
  document.getElementById('root')
);

