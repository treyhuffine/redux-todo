import React, { Component } from 'react';
import { connect } from 'react-redux';

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
          dispatch({
            type: 'ADD_TODO',
            text: input.value,
            id: nextTodoId++
          })
          input.value = '';
      }} >
        Add Todo
      </button>
    </div>
  )
};

AddTodo = connect()(AddTodo);

export { AddTodo };
