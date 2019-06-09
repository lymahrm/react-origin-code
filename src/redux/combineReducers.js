export default function combineReducers(reducers) {
  return function(states = {}, action) {
    let res = {}
    Object.keys(reducers).forEach(key => {
      const reducer = reducers[key]
      const state = states[key]
      res[key] = reducer(state, action)
    })
    return res
  }
}
