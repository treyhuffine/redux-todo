import React, { Component } from 'react';
import { FilterLink } from './FilterLink';

export const Footer = ({visibilityFilter, store}) => {
  return (
    <p>
      Show: {' '}
      <FilterLink
        filter='SHOW_ALL'
        store={store}
        currentFilter={visibilityFilter}
      >
        All
      </FilterLink>{' '}
      <FilterLink
        filter='SHOW_ACTIVE'
        store={store}
        currentFilter={visibilityFilter}
      >
        Active
      </FilterLink>{' '}
      <FilterLink
        filter='SHOW_COMPLETED'
        store={store}
        currentFilter={visibilityFilter}
      >
        Completed
      </FilterLink>{' '}
    </p>
  );
};
