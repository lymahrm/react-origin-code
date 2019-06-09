export default function bindActionCreator(actions, dispatch) {
  if (typeof actions !== 'object') {
    throw new Error('actions不是一个对象')
  }
  if (typeof dispatch !== 'function') {
    throw new Error('actions不是一个函数')
  }

  let res = {}
  if (actions !== null) {
    Object.keys(actions).forEach(key => {
      res[key] = function(...args) {
        const action = actions[key]
        dispatch(action(...args))
      }
    })
  }
  return res
}
