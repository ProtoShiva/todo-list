import React from "react"
import { v4 as uuidv4 } from "uuid"
const List = ({ text }) => {
  return (
    <div>
      <ul>
        {text.map((i) => (
          <li key={uuidv4()}>
            {i}
            <button className="del-btn">Done</button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default List
