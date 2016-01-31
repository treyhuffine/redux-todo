import React from 'react';

export class TodoApp extends React.Component {
  constructor(props) {
    super(props);
    this.nextTodoId = 0;
  }
  render() {
    return (
      <div>
        <button onClick={() => {
          this.props.store.dispatch({
            type: 'ADD_TODO',
            text: 'Test',
            id: this.nextTodoId++
          })
        }}>
          Add Todo
        </button>
        <ul>
          {this.props.todos.map(todo =>
            <li key={todo.id}>
              {todo.text}
            </li>
          )}
        </ul>
      </div>
    );
  }
}
