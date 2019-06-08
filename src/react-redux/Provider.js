import React from 'react'
import { Provider } from './context'

export default props => {
  return <Provider value={props.store}>{props.children}</Provider>
}
