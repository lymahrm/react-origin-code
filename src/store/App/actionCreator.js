import { initCountHandle } from '../Count/actionCreator'
import { initTodoListHandle } from '../TodoList/actionCreator'

import axios from 'axios'
const actions = [initCountHandle, initTodoListHandle]

export const initDataHandle = data => {
  return dispatch => {
    axios
      .get('./initState.json')
      .then(data => actions.forEach(action => dispatch(action(data))))
  }
}
