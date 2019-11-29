import React, { Component } from 'react'
import { bindActionCreators } from '../redux'

export default class Connect extends Component {
  componentDidMount() {
    this.unSub = this.props.store.subscribe(() => this.setState({}))
  }

  componentWillUnmount() {
    this.unSub()
  }

  render() {
    const {
      store,
      mapStateToProps,
      mapDispatchToProps,
      Component,
      props
    } = this.props

    const state =
      typeof mapStateToProps === 'function' ? 
      mapStateToProps(store.getState()) : 
      {}

    const dispatchMethods =
      typeof mapDispatchToProps === 'function' ? 
        mapDispatchToProps(store.dispatch) : 
        bindActionCreators(mapDispatchToProps, store.dispatch)

    return <Component {...state} {...dispatchMethods} {...props} />
  }
}
