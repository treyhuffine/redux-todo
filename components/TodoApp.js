import React, { Component } from 'react';
import { FilterLink } from './FilterLink';
import { TodoList } from './TodoList';
import { AddTodo } from './AddTodo';
import { Footer } from './Footer';

export class TodoApp extends Component {
  constructor(props) {
    super(props);
    this.nextTodoId = 0;
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
    const currentTodosList = this.props.store.getState().todos;
    const visibilityFilter = this.props.store.getState().visibilityFilter;
    console.log(currentTodosList, visibilityFilter);
    const visibleTodos = this.getVisibleTodos(currentTodosList, visibilityFilter);
    console.log(visibleTodos);
    return (
      <div>
        <AddTodo
          onAddClick={text =>
            this.props.store.dispatch({
              type: 'ADD_TODO',
              id: this.nextTodoId++,
              text
            })
          }
        />
        <TodoList
          todos={visibleTodos}
          onTodoClick={id =>
            this.props.store.dispatch({
              type: 'TOGGLE_TODO',
              id
            })
          }
        />
        <Footer
          visibilityFilter={visibilityFilter}
          onFilterClick={filter =>
            this.props.store.dispatch({
              type: 'SET_VISIBILITY_FILTER',
              filter
            })
          }
        />
      </div>
    );
  }
}
