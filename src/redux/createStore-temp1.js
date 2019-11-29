const initAction = {
  type: '@@redux/INIT'
}

export default function createStore(reducer, initState) {
  if (typeof reducer !== 'function') {
    throw new Error('reducer必须是函数')
  }

  let state = initState
  let listener = []
  let flag = false

  const getState = () => state

  const dispatch = action => {
    if (typeof action !== 'object') {
      throw new Error('action必须是对象')
    }

    if (action.type === undefined) {
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

  const subscribe = callback => {
    listener.push(callback)

    return () =>  listener = listener.filter(fn => fn !== callback)
  }

  dispatch(initAction)

  return { 
    getState, 
    dispatch, 
    subscribe,
  }
}
