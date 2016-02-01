import React from 'react';

export class TodoApp extends React.Component {
  constructor(props) {
    super(props);
    this.nextTodoId = 0;
  }
  render() {
    var currentTodosList = this.props.store.getState().todos;
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
          {currentTodosList.map(todo =>
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
      </div>
    );
  }
}
