import React from 'react'
import Connect from './Connect'
import { Consumer } from './context'

export default (mapStateToProps, mapDispatchToProps) => Component => props => {
  if (typeof mapStateToProps !== 'function' && mapStateToProps !== null) {
    throw new Error('mapStateToProps必须是函数或者null')
  }
  if (
    typeof mapDispatchToProps !== 'function' &&
    typeof mapDispatchToProps !== 'object'
  ) {
    throw new Error('mapDispatchToProps必须是函数或者对象或者null')
  }

  return (
    <Consumer>
      {store => (
        <Connect
          store={store}
          Component={Component}
          mapStateToProps={mapStateToProps}
          mapDispatchToProps={mapDispatchToProps || {}}
          props={props}
        />
      )}
    </Consumer>
  )
}
