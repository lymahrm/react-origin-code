import React from 'react'

export default props => {
  const { value, updataVal, addVal } = props

  return (
    <div>
      <label htmlFor="TodoIn">输入：</label>
      <input
        id="TodoIn"
        value={value}
        onChange={e => updataVal(e.target.value)}
      />
      <button onClick={addVal}>添加</button>
    </div>
  )
}
