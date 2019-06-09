import compose from './compose'

export default (...middlewares) => createStore => (reduce, initstate) => {
  const store = createStore(reduce, initstate)

  let dispatch = store.dispatch
  const middlewareAPIs = middlewares.map(middleware =>
    middleware({
      getState: store.getState,
      dispatch: action => dispatch(action)
    })
  )
  dispatch = compose(...middlewareAPIs)(dispatch)

  return {
    ...store,
    dispatch
  }
}
