import { handleActions } from 'redux-actions'

const visibilityFilter = handleActions({
  SET_VISIBILITY_FILTER: (state, action) => {
    return action.payload.filter
  },
}, 'SHOW_ALL')

export default visibilityFilter
