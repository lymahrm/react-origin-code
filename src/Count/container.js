import { connect } from '../react-redux'
import * as actions from '../store/Count/actionCreator'
import Count from './Count'

const mapStateToProps = state => state.count

export default connect(mapStateToProps, actions)(Count)
