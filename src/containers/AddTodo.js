import { connect } from 'react-redux'
import Form from '../components/Form'
import { addTodo } from '../actions'

const mapStateToProps = (state) => {
  return { state: state }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onAddClick: (value) => {
      dispatch(addTodo(value))
    }
  }
}

const AddTodo = connect(
  mapStateToProps,
  mapDispatchToProps
)(Form)

export default AddTodo
