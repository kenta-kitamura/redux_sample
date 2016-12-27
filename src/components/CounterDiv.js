import React, { PropTypes } from 'react'

const CounterDiv = ({ counter, onIncrementClick, onDecrementClick, onIncrementIfOddClick, onIncrementAsyncClick }) => {
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
        <button className="incrementIfOdd" onClick={ onIncrementIfOddClick}>Increment if odd</button>
        {" "}
        <button className="incrementAsync" onClick={ onIncrementAsyncClick }>Increment async</button>
      </p>
    </div>
  )
}

CounterDiv.propTypes = {
  counter: PropTypes.number.isRequired,
  onIncrementClick: PropTypes.func.isRequired,
  onDecrementClick: PropTypes.func.isRequired,
  onIncrementIfOddClick: PropTypes.func.isRequired,
  onIncrementAsyncClick: PropTypes.func.isRequired
}

export default CounterDiv
