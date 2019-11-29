export function bindActionCreator(action, dispatch) {
  if (typeof action !== 'function') {
    throw new Error('action不是一个函数')
  }
  if (typeof dispatch !== 'function') {
    throw new Error('dispatch不是一个函数')
  }

  return  (...args) => dispatch(action(...args))
}

export function bindActionCreators(actions, dispatch) {
  if (typeof actions !== 'object' && typeof actions !== 'function') {
    throw new Error('actions需要是对象或者函数')
  }
  if (typeof dispatch !== 'function') {
    throw new Error('dispatch不是一个函数')
  }

  let res = {}
  if (actions !== null) {
    if (typeof actions === 'object') {
      Object.keys(actions).forEach(key => {
        res[key] = bindActionCreator(actions[key], dispatch)
      })
    } else {
      res = actions(dispatch)
    }
  }
  return res
}
