import React, { Component } from 'react';
import { FilterLink } from './FilterLink';
import { VisibleTodoList } from './VisibleTodoList';
import { AddTodo } from './AddTodo';
import { Footer } from './Footer';

export class TodoApp extends Component {
  render() {
    return (
      <div>
        <AddTodo
          store={this.props.store}
        />
        <VisibleTodoList
          store={this.props.store}
        />
        <Footer
          store={this.props.store}
        />
      </div>
    );
  }
}
