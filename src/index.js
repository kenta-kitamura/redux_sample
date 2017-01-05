import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { applyMiddleware, createStore } from 'redux'
import createLogger from 'redux-logger'
import Ps from './containers/Ps'
import bar from './reducers/bar'

let store = createStore(bar, applyMiddleware(createLogger()))

render(
  <Provider store={store}>
    <Ps />
  </Provider>,
  document.getElementById('root')
)
