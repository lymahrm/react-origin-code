import React from 'react'
import { render } from 'react-dom'
import { Provider } from './react-redux'
import store from './store'
import App from './App'
import axios from 'axios'

axios.interceptors.response.use(res => {
  const data = res.data

  if (data.code === 0) {
    return data.data
  } else {
    return Promise.reject(res)
  }
})

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
