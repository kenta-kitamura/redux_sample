import React from 'react'
import Footer from './Footer'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'
import Counter from '../containers/Counter'

const App = () => (
  <div>
    <h1>Todo List example</h1>
    <AddTodo />
    <VisibleTodoList />
    <Footer />
    <br /><hr /><br />
    <Counter />
  </div>
)

export default App
