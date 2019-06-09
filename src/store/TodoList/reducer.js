import * as TYPES from './actionTypes'
import initState from './initState'

export default (state = initState, action) => {
  const newState = JSON.parse(JSON.stringify(state))

  switch (action.type) {
    case TYPES.INIT_DATA:
      Object.assign(newState, action.data)
      break
    case TYPES.ADD_VAL:
      newState.list.push(action.val)
      newState.value = ''
      break
    case TYPES.DEL_VAL:
      newState.list.splice(action.index, 1)
      break
    case TYPES.UPD_VAL:
      newState.value = action.val
      break
    default:
      break
  }

  return newState
}
