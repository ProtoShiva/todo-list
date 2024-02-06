import React from "react"
import { v4 as uuidv4 } from "uuid"
const List = ({ text, onDelete }) => {
  return (
    <div>
      <ul>
        {text.map((i, index) => (
          <li key={uuidv4()}>
            {i}
            <button
              className="del-btn"
              onClick={() => {
                onDelete(index)
              }}
            >
              Done
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default List

//Remember props are read only and i cannot modify them like i was doing with text.
