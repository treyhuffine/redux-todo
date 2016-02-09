import React, { Component } from 'react';

export const Todo = ({onClick, completed, text}) => {
  return (
    <li
      onClick={onClick}
      style={{
        textDecoration:
          completed ? 'line-through' : 'none',
        cursor: 'pointer',
        WebkitUserSelect: 'none'
      }}>
      {text}
    </li>
  );
};
