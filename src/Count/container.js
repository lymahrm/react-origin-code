import { connect } from '../react-redux'
import Count from './Count'
import * as actions from '../store/Count/actionCreator'

const mapStateToProps = state => state.count

export default connect(
  mapStateToProps,
  actions
)(Count)
