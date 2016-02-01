import React, { Component } from 'react';
import { FilterLink } from './FilterLink';

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
    const visbleTodos = this.getVisibleTodos(currentTodosList, visibilityFilter);
    console.log(visbleTodos);
    return (
      <div>
        <input ref={node => {
          this.input = node;
        }} />
        <br />
        <button onClick={() => {
          this.props.store.dispatch({
            type: 'ADD_TODO',
            text: this.input.value,
            id: this.nextTodoId++
          });
          this.input.value = '';
        }}>
          Add Todo
        </button>
        <ul>
          {visbleTodos.map(todo =>
            <li key={todo.id}
              onClick={() => {
                this.props.store.dispatch({
                  type: 'TOGGLE_TODO',
                  id: todo.id
                });
              }}
              style={{
                textDecoration:
                  todo.completed ? 'line-through' : 'none',
                cursor: 'pointer',
                WebkitUserSelect: 'none'
              }}>
              {todo.text}
            </li>
          )}
        </ul>
        <p>
          Show: {' '}
          <FilterLink
            filter='SHOW_ALL' store={this.props.store} currentFilter={visibilityFilter}
          >
            All
          </FilterLink>{' '}
          <FilterLink
            filter='SHOW_ACTIVE' store={this.props.store} currentFilter={visibilityFilter}
          >
            Active
          </FilterLink>{' '}
          <FilterLink
            filter='SHOW_COMPLETED' store={this.props.store} currentFilter={visibilityFilter}
          >
            Completed
          </FilterLink>{' '}
        </p>
      </div>
    );
  }
}
