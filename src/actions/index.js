import { createAction } from "redux-actions";

let nextTodoId = 0

export const addTodo = createAction('ADD_TODO',
  (text) => {
    return { id: nextTodoId++, text }
  }
)

export const setVisibilityFilter = createAction('SET_VISIBILITY_FILTER',
  (filter) => {
    return { filter }
  }
)

export const toggleTodo = createAction('TOGGLE_TODO',
  (id) => {
    return { id }
  }
)

export const increment = createAction('INCREMENT')
export const decrement = createAction('DECREMENT')
export const incrementAsync = createAction('INCREMENT_ASYNC')
export const incrementIfOdd = createAction('INCREMENT_IF_ODD')
