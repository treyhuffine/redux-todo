import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Link } from './Link';
const mapStateToProps = (state, props) => {
  return {
    active: state.visibilityFilter === props.filter
  };
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    onClick: () => {
      dispatch({
        type: 'SET_VISIBILITY_FILTER',
        filter: props.filter
      })
    }
  };
};

const FilterLink = connect (
  mapStateToProps,
  mapDispatchToProps
)(Link);

export { FilterLink };