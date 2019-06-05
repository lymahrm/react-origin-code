import * as TYPES from './actionTypes'

export const addCountHandle = count => {
  return {
    type: TYPES.ADDCOUNT,
    count
  }
}
