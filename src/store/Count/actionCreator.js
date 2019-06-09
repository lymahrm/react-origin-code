import * as TYPES from './actionTypes'

export const initCountHandle = data => {
  return {
    type: TYPES.INIT_DATA,
    data: data.Count
  }
}

export const addCountHandle = count => {
  return {
    type: TYPES.ADD_COUNT,
    count
  }
}
