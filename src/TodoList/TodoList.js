import React from 'react'
import TodoBox from './components/TodoBox'
import TodoItem from './components/TodoItem'

export default function TodoList(props) {
  const { value, list, addValHandle, delValHandle, updValHandle } = props

  return (
    <>
      {/*搜索框*/}
      <TodoBox
        value={value}
        addVal={() => addValHandle(value)}
        updataVal={value => updValHandle(value)}
      />

      {/*列表*/}
      <ul>
        {list.map((item, index) => (
          <TodoItem
            delVal={() => delValHandle(index)}
            content={item}
            key={index}
          />
        ))}
      </ul>
    </>
  )
}
