import '../styles/input.css'
import { useState } from "react"

export default function Todoinput(props) {

  const { handleAddTodos } = props  // here we destructure the props to use our add function

  const [todoValue, setToDoValue] = useState('');   // we have a dynamic variable associated with the input value

  return (
    <header>
      {/* The value of the input bar is assigned as todoValue, and this value is always equal what's in the input bar thanks to the onChange function catching the events. */}
      <input value={todoValue} onChange={(e) => {setToDoValue(e.target.value)}} className="press-start-2p-regular" placeholder="Enter todo..." />
      <button onClick={() => {
        handleAddTodos(todoValue);
        setToDoValue('');{/* We set todoValue back to an empty string once we retrieve the data that we want from it */}
      }} className="press-start-2p-regular">Add</button>
    </header>
  )
}