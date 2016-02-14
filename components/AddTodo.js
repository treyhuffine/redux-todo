import React, { Component } from 'react';

export class AddTodo extends Component {
  constructor(props) {
    super(props);
    this.nextTodoId = 0;
  }

  render() {
    let input;
    const store = this.props.store;

    return (
      <div>
        <input ref={node => {
          input = node
        }} />
        <br />
        <button onClick={() => {
            store.dispatch({
              type: 'ADD_TODO',
              text: input.value,
              id: this.nextTodoId++
            })
            input.value = '';
        }} >
          Add Todo
        </button>
      </div>
      )
  };
};
