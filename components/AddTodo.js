import React, { Component } from 'react';

export const AddTodo = ({onAddClick}) => {
  let input;

  return (
    <div>
      <input ref={node => {
        input = node
      }} />
      <br />
      <button onClick={() => {
          onAddClick(input.value);
          input.value = '';
        }} >
        Add Todo
      </button>
    </div>
  );
};
