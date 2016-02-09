import React, { Component } from 'react';
import { FilterLink } from './FilterLink';

export const Footer = ({visibilityFilter, onFilterClick}) => {
  return (
    <p>
      Show: {' '}
      <FilterLink
        filter='SHOW_ALL'
        onClick={onFilterClick}
        currentFilter={visibilityFilter}
      >
        All
      </FilterLink>{' '}
      <FilterLink
        filter='SHOW_ACTIVE'
        onClick={onFilterClick}
        currentFilter={visibilityFilter}
      >
        Active
      </FilterLink>{' '}
      <FilterLink
        filter='SHOW_COMPLETED'
        onClick={onFilterClick}
        currentFilter={visibilityFilter}
      >
        Completed
      </FilterLink>{' '}
    </p>
  );
};
