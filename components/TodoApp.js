import React, { Component } from 'react';

import { VisibleTodoList } from './VisibleTodoList';
import { AddTodo } from './AddTodo';
import { Footer } from './Footer';

export class TodoApp extends Component {
  render() {
    return (
      <div>
        <AddTodo />
        <VisibleTodoList />
        <Footer />
      </div>
    );
  }
}
