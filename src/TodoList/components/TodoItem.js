import React from 'react'

export default props => {
  let { content, delVal } = props
  return <li onClick={delVal}>{content}</li>
}
