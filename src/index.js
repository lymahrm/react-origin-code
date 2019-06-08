import React from 'react'
import { render } from 'react-dom'
import { Provider } from './react-redux'
import store from './store'
import App from './App'

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)

// import React from './react'
// import { render } from './react-dom'

// render(
//   <div>
//     123<span>456</span>
//   </div>,
//   document.getElementById('root')
// )
