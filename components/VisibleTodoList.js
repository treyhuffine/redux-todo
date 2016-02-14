import React, { Component } from 'react';
import { connect } from 'react-redux';

import { TodoList } from './TodoList';
import { toggleTodo } from '../actions/actions';

const getVisibleTodos = (todos, filter) => {
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
};

const mapStateToProps = (state) => {
  return {
    todos: getVisibleTodos (
      state.todos, state.visibilityFilter
    )
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onTodoClick: (id) => {
      dispatch(toggleTodo(id))
    }
  };
};

const VisibleTodoList = connect (
  mapStateToProps,
  mapDispatchToProps
)(TodoList);

export { VisibleTodoList };

