import { connect } from '../react-redux'
import * as actions from '../store/App/actionCreator'
import App from './App'

export default connect(null,actions)(App)
