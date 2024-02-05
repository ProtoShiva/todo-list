import React, { useState } from "react"
import List from "./List"
const Input = () => {
  const [input, setInput] = useState("")
  const [todoItem, setTodoItem] = useState([])
  const handleChange = (e) => {
    const { value } = e.target
    setInput(value)
  }
  const handleClick = () => {
    setTodoItem((prev) => {
      return [...prev, input]
    })
    setInput("")
  }
  return (
    <>
      <div className="form">
        <input type="text" onChange={handleChange} value={input} />
        <button onClick={handleClick}>
          <span>Add</span>
        </button>
      </div>
      <List text={todoItem} />
    </>
  )
}

export default Input
