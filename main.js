import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from './create-store';

const todos = (state = {}, action) => {
  switch (action.type) {
    case '':

    default:
      return state
  }
}

// const createStore = (reducer) => {
//   let state;
//   let listeners = [];
//
//   const getState = () => state;
//
//   const dispatch = (action) => {
//     state = reducer(state, action);
//     listeners.forEach(listener => listener());
//   }
//
//   const subscribe = (listener) => {
//     listeners.push(listener);
//     return () => {
//       listeners = listeners.filter(l => l !== listener);
//     }
//   }
//
//   dispatch({});
//
//   return { getState, dispatch, subscribe };
// }

const store = createStore(todos);

const render = () => {
  ReactDOM.render (
    <div>Hello world!</div>,
    document.getElementById('root')
  )
}

// store.subscribe(render);
render();