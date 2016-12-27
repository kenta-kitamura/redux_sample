import { connect } from 'react-redux'
import { increment, decrement, apiAsyncMinus, apiAsync } from '../actions'
import CounterDiv from '../components/CounterDiv'

const mapStateToProps = (state) => {
  return {
    counter: state.counter
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onIncrementClick: () => dispatch(increment()),
    onDecrementClick: () => dispatch(decrement()),
    onMinusApiNumClick: () => dispatch(apiAsyncMinus()),
    onAddApiNumClick: () => dispatch(apiAsync())
  }
}

const Counter = connect(
  mapStateToProps,
  mapDispatchToProps
)(CounterDiv)

export default Counter
