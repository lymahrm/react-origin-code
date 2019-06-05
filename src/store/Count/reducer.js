import * as TYPES from './actionTypes'
import initState from './initState'

export default (state = initState, action) => {
  const newState = JSON.parse(JSON.stringify(state))

  switch (action.type) {
    case TYPES.ADDCOUNT:
      newState.count += action.count
      break
    default:
      break
  }

  return newState
}
