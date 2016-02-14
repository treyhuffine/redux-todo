import React, { Component } from 'react';
import { connect } from 'react-redux';

import { addTodo } from '../actions/actions';

let nextTodoId = 0;
let AddTodo = ({ dispatch }) => {
  let input;

  return (
    <div>
      <input ref={node => {
        input = node
      }} />
      <br />
      <button onClick={() => {
          dispatch(addTodo(input.value))
          input.value = '';
      }} >
        Add Todo
      </button>
    </div>
  )
};

AddTodo = connect()(AddTodo);

export { AddTodo };
