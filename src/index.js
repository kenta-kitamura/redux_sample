import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { applyMiddleware, createStore } from 'redux'
import createLogger from 'redux-logger'
import createSagaMiddleware from 'redux-saga'
import todoApp from './reducers'
import App from './components/App'
import rootSaga from "./sagas"

let logger = createLogger()
let sagaMiddleware = createSagaMiddleware()
let store = createStore(todoApp, applyMiddleware(logger, sagaMiddleware))

sagaMiddleware.run(rootSaga);

document.addEventListener('DOMContentLoaded', () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('root')
  )
})
