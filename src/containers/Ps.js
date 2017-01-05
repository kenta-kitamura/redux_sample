import { connect } from 'react-redux'
import { clickActionCI, clickActionT, clickActionS, clickActionCR } from '../actions'
import Hello from '../components/Hello'

const mapStateToProps = (state) => {
  return {
    moji: state
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    clickTriangle: () => dispatch(clickActionT()),
    clickSquare: () => dispatch(clickActionS()),
    clickCircle: () => dispatch(clickActionCI()),
    clickCross: () => dispatch(clickActionCR())
  }
}

const Ps = connect(
  mapStateToProps,
  mapDispatchToProps
)(Hello)

export default Ps
