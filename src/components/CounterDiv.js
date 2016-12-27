import React, { PropTypes } from 'react'

const CounterDiv = ({ counter, onIncrementClick, onDecrementClick, onMinusApiNumClick, onAddApiNumClick }) => {
  return (
    <div>
      <h1>Counter example</h1>
      <p>
        Clicked: { counter } times
        {" "}
        <button className="increment" onClick={ onIncrementClick }>+</button>
        {" "}
        <button className="decrement" onClick={ onDecrementClick }>-</button>
        {" "}
        <button className="minusNumFromAPI" onClick={ onMinusApiNumClick}>minus num from api</button>
        {" "}
        <button className="addNumFromAPI" onClick={ onAddApiNumClick }>add num from api</button>
      </p>
    </div>
  )
}

CounterDiv.propTypes = {
  counter: PropTypes.number.isRequired,
  onIncrementClick: PropTypes.func.isRequired,
  onDecrementClick: PropTypes.func.isRequired,
  onMinusApiNumClick: PropTypes.func.isRequired,
  onAddApiNumClick: PropTypes.func.isRequired
}

export default CounterDiv
