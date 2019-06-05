export default function(actions, dispatch) {
  let res = {}
  Object.keys(actions).forEach(key => {
    res[key] = function(...args) {
      const action = actions[key]
      dispatch(action(...args))
    }
  })
  return res
}
