import { connect } from '../react-redux'
import * as actions from '../store/TodoList/actionCreator'
import TodoList from './TodoList'

const mapStateToProps = state => state.todoList
export default connect(
  mapStateToProps,
  actions
)(TodoList)
