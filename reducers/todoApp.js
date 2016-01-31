import { todos } from './todos';
import { visibilityFilter } from './visibilityFilter';
import { combineReducers } from '../redux_functions/combineReducers';

export const todoApp = combineReducers({
  todos,
  visibilityFilter
});

// export const todoApp = (state = {}, action) => {
//   return {
//     todos: todos(
//       state.todos,
//       action
//     ),
//     visibilityFilter: visibilityFilter(
//       state.visibilityFilter,
//       action
//     )
//   }
// }
