import { handleActions } from 'redux-actions'

const counter = handleActions({
  ADD_API_NUM: (state, action) => {
    return state + action.payload.num
  },

  INCREMENT: (state, action) => {
    return state + 1
  },

  MINUS_API_NUM: (state, action) => {
    return state - action.payload.num
  },

  DECREMENT: (state, action) => {
    return state - 1
  }
}, 0)

export default counter
