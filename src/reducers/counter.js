import { handleActions } from 'redux-actions'

const counter = handleActions({
  ADD_API_NUM: (state, action) => {
    return state + action.payload.num
  },

  INCREMENT: (state, action) => {
    return state + 1
  },

  INCREMENT_IF_ODD: (state, action) => {
    return (state % 2 !== 0) ? state + 1 : state
  },

  DECREMENT: (state, action) => {
    return state - 1
  }
}, 0)

export default counter
