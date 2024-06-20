import React from 'react'
import '../styles/list.css'
import Todocard from './todocard'

export default function Todolist(props) {

  const { todos } = props;  // here we destructure the props a.k.a our dynamic todo list

  return (
    <ul className="inter">
      {/* We use the map function in coordination with a card component to take each todo piece from the list and pass it as a prop to a card component such that 
      no matter how many items are in the list, we make a special card for each.
      */}
      {todos.map((todo, todoIndex) => {
        return (
          <Todocard {...props} key={todoIndex} index={todoIndex}> {/* It is good practice to have a key for something that you make multiple of, such as this component inside a map function. */}
            <p>{todo}</p>
          </Todocard>
        )
      })}
    </ul>
  ) 
}

// We can use {...props} to pass down everything given to a component into a subcomponent. This way,
// we dont have to include { handleDeleteTodo } inside of the destructuring.