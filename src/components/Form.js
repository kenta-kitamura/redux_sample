import React, { PropTypes } from 'react'

const Form = ({ onAddClick }) => {
  let input

  return (
    <div>
      <form onSubmit={e => {
        e.preventDefault()
        if (!input.value.trim()) {
          return
        }
        onAddClick(input.value)
        input.value = ''
      }}>
        <input ref={node => {
          input = node
        }} />
        <button type="submit">
          Add Todo
        </button>
      </form>
    </div>
  )
}

Form.propTypes = {
  onAddClick: PropTypes.func.isRequired
}

export default Form
