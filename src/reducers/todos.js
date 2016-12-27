import { handleActions } from 'redux-actions'

const todo = handleActions({
  ADD_TODO: (state, action) => {
    return {
      id: action.payload.id,
      text: action.payload.text,
      completed: false
    }
  },
  TOGGLE_TODO: (state, action) => {
    if (state.id !== action.payload.id) {
      return state
    }

    return Object.assign({}, state, {
      completed: !state.completed
    })
  }
}, {});

const todos = handleActions({
  ADD_TODO: (state, action) => {
    return [
      ...state,
      todo(undefined, action)
    ]
  },
  TOGGLE_TODO: (state, action) => {
    return state.map(t =>
      todo(t, action)
    )
  }
}, []);

export default todos
