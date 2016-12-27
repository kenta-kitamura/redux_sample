import { connect } from 'react-redux'
import { increment, decrement, incrementIfOdd, incrementAsync } from '../actions'
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
    onIncrementIfOddClick: () => dispatch(incrementIfOdd()),
    onIncrementAsyncClick: () => dispatch(incrementAsync())
  }
}

const Counter = connect(
  mapStateToProps,
  mapDispatchToProps
)(CounterDiv)

export default Counter
