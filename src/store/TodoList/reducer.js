import * as TYPES from './actionTypes'
import initState from './initState'

export default (state = initState, action) => {
  const newState = JSON.parse(JSON.stringify(state))

  switch (action.type) {
    case TYPES.UPDVAL:
      newState.value = action.val
      break
    case TYPES.ADDVAL:
      newState.list.push(action.val)
      newState.value = ''
      break
    case TYPES.DELVAL:
      newState.list.splice(action.index, 1)
      break
    default:
      break
  }

  return newState
}
