import React, { Component } from 'react';
import { TodoList } from './TodoList';

export class VisibleTodoList extends Component  {
  componentDidMount() {
    this.unsubscribe = this.props.store.subscribe(() =>
      this.forceUpdate()
    )
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  getVisibleTodos(todos, filter) {
    switch (filter) {
      case 'SHOW_ALL':
        return todos;
      case 'SHOW_COMPLETED':
        return todos.filter(
          t => t.completed
        );
      case 'SHOW_ACTIVE':
        return todos.filter(
          t => !t.completed
        );
    }
  }

  render() {
    const props = this.props;
    const state = props.store.getState();

    return (
      <TodoList
        todos={
          this.getVisibleTodos(
            state.todos, state.visibilityFilter
          )
        }
        onTodoClick={id =>
          props.store.dispatch({
            type: 'TOGGLE_TODO',
            id
          })
        }
      />
    )
  }
};
