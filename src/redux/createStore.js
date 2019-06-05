const initAction = {
  type: '@@redux/INIT'
}

function createStore(reducer, initState, enhancer) {
  if (typeof reducer !== 'function') {
    throw new Error('reducer必须是函数')
  }

  if (typeof initState === 'function' && enhancer === 'undefined') {
    enhancer = initState
    initState = undefined
  }

  if (typeof enhancer === 'function') {
    return enhancer(createStore)(reducer, initState)
  }

  let state
  let listener = []
  let flag = false

  function getState() {
    return state
  }

  function dispatch(action) {
    if (typeof action !== 'object') {
      throw new Error('action必须是对象')
    }

    if (typeof action.type === 'undefined') {
      throw new Error('action的type属性不能为undefined')
    }

    if (flag) {
      throw new Error('不能在reducer里调用dispatch')
    }

    try {
      flag = true
      state = reducer(state, action)
      listener.forEach(callback => callback())
    } finally {
      flag = false
    }
  }

  function subscribe(callback) {
    listener.push(callback)
    return function() {
      listener = listener.filter(fn => fn !== callback)
    }
  }

  dispatch(initAction)

  return { getState, dispatch, subscribe }
}

export default createStore
