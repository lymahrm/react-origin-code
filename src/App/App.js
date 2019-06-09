import React, { Component } from 'react'
import TodoList from '../TodoList'
import Count from '../Count'

export default class componentName extends Component {
  componentDidMount() {
    this.props.initDataHandle()
  }

  render() {
    return (
      <>
        <TodoList />
        <Count />
      </>
    )
  }
}
