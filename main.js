import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import { createStore } from './redux_functions/createStore';
import { todoApp } from './reducers/todoApp';
import { TodoApp } from './components/TodoApp';

const store = createStore(todoApp);

ReactDOM.render (
  <Provider store={store}>
    <TodoApp />
  </Provider>,
  document.getElementById('root')
);

