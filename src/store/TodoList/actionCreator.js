import * as TYPES from './actionTypes'

export const initTodoListHandle = data => {
  return {
    type: TYPES.INIT_DATA,
    data: data.TodoList
  }
}

export const addValHandle = val => {
  return {
    type: TYPES.ADD_VAL,
    val
  }
}

export const delValHandle = index => {
  return {
    type: TYPES.DEL_VAL,
    index
  }
}

export const updValHandle = val => {
  return {
    type: TYPES.UPD_VAL,
    val
  }
}
