import React from 'react'

export default function Count(props) {
  const { count, addCountHandle } = props

  return (
    <div>
      <span>{count}</span>
      <button onClick={() => addCountHandle(3)}>加</button>
    </div>
  )
}
