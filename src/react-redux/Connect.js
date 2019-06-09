import React, { Component } from 'react'
import bindActionCreator from '../redux/bindActionCreator'

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
      typeof mapStateToProps === 'function'
        ? mapStateToProps(store.getState())
        : {}

    const dispatchMethods =
      typeof mapDispatchToProps === 'function'
        ? mapDispatchToProps(store.dispatch)
        : bindActionCreator(mapDispatchToProps, store.dispatch)

    return <Component {...state} {...dispatchMethods} {...props} />
  }
}
