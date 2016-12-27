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
export const apiAsync = createAction('API_ASYNC')
export const apiAsyncMinus = createAction('API_ASYNC_MINUS')

export const addApiNum = createAction('ADD_API_NUM',
  (num) => {
    return { num }
  }
)
export const minusApiNum = createAction('MINUS_API_NUM',
  (num) => {
    return { num }
  }
)
