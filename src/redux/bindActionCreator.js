export default function bindActionCreator(actions, dispatch) {
  if (typeof actions !== 'object' && typeof actions !== 'function') {
    throw new Error('actions需要是对象或者函数')
  }
  if (typeof dispatch !== 'function') {
    throw new Error('actions不是一个函数')
  }

  let res = {}
  if (actions !== null) {
    if (typeof actions === 'object') {
      Object.keys(actions).forEach(key => {
        res[key] = function(...args) {
          const action = actions[key]
          dispatch(action(...args))
        }
      })
    } else {
      res = actions(dispatch)
    }
  }
  return res
}
