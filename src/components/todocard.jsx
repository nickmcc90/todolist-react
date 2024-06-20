import React from 'react'

export default function Todocard( props ) {

  const { children, handleDeleteTodo, handleEditTodo, index } = props; // Here, we destructure our props a.k.a a specific todo piece

  return (
    <li className="list-style">
      {children} {/* We deploy our piece here */}
      <div className="actions-container">
        <button onClick={() => {
          handleEditTodo(index)
        }}>
          <i class="fa-solid fa-pen-to-square margin-styling"></i>
        </button>
        <button onClick={() => {
          handleDeleteTodo(index)
        }}>
          <i class="fa-solid fa-trash-can"></i>
        </button>
      </div>
    </li>
  )
}
