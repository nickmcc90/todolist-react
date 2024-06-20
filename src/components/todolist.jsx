import React from 'react'
import '../styles/list.css'

export default function Todolist() {

  let todos = [
    'Go to work',
    'Kiss Zack good morning',
    'Go out to a house club'
  ]

  return (
    <ul className="inter">
      {todos.map((todo, todoIndex) => {
        return (
          <li className="list-style" key={todoIndex}>
            {todo}
            <i class="fa-solid fa-pen-to-square margin-styling"></i>
          </li>
        )
      })}
    </ul>
  ) 
}
