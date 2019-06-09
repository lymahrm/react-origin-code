import { createStore, applyMiddleware, compose } from '../redux'
import reducers from './reducers'
import thunk from 'redux-thunk'
import promise from 'redux-promise'
import logger from 'redux-logger'
import createSagaMiddleware from 'redux-saga'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const saga = createSagaMiddleware()

const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(thunk, promise, logger, saga))
)

export default store
