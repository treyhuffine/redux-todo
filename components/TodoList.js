import React, { Component } from 'react';
import { Todo } from './Todo';

export const TodoList = ({todos, onTodoClick}) => {
  return (
    <ul>
      {todos.map(todo =>
        <Todo key={todo.id}
          {...todo}
          onClick={() => onTodoClick(todo.id)}
        />
      )}
    </ul>
  );
};
