import { combineReducers } from '../redux'
// import { combineReducers } from 'redux'

import count from './Count'
import todoList from './TodoList'

const Reducers = combineReducers({
  count,
  todoList
})

export default Reducers
