import * as TYPES from './actionTypes'

export const addValHandle = val => {
  return {
    type: TYPES.ADDVAL,
    val
  }
}

export const delValHandle = index => {
  return {
    type: TYPES.DELVAL,
    index
  }
}

export const updValHandle = val => {
  return {
    type: TYPES.UPDVAL,
    val
  }
}
