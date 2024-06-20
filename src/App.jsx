import { useState, useEffect } from 'react'
import Todoinput from './components/todoinput'
import Todolist from './components/todolist'

function App() {

  const [todos, setTodos] = useState([]);   // using a useState variable because we want to interact with the list of todos via user input

  const [todoValue, setToDoValue] = useState('');   // we have a dynamic variable associated with the input value

  function persistData(newList) { // Here we take any new changes done to the list and put in it storage. The argument is meant to take the last availabe version of the list, so this function will be run after the add, delete, and edit functions.
    localStorage.setItem('todos', JSON.stringify({ todos: newList })) // This storage is different from the actual value of todos because this is in storage.
  }

  function handleAddTodos (addedTodo) {   // the syntax below allows us to have an array with the previous todos plus a new one, then we set the state of the todo list
    const newTodos = [...todos, addedTodo]
    persistData(newTodos);
    setTodos(newTodos);
  }

  function handleDeleteTodo(index) {    // the filter function allows us to go through each todo to see if it can stay on the page, and it can stay if its index has not been selected as an argument
    const newTodos = todos.filter((todo, todoIndex) => {
      return todoIndex !== index
    })
    persistData(newTodos);
    setTodos(newTodos);
  }

  function handleEditTodo(index) { // we already have access to the todo list, so we only need the index to grab it. This would be the ideal solution instead of passing todoValue and setToDoValue to the todolist, then todocard component.
    const valueToBeEdited = todos[index]
    setToDoValue(valueToBeEdited);
    handleDeleteTodo(index);
  }

  {/* The arrow funciton runs when a variable changes in the second argument array in useEffect. If there is nothing, the function runs when the page is loaded/refreshed. */}
  useEffect(() => {
    if(!localStorage) { // if local Storage doesn't exist, then show the blank page.
      return
    }

    let localTodos = localStorage.getItem('todos'); // grabbing the todo array from storage
    if(!localTodos) {       // if the todo array from storage does not exist, we return a blank page
      return
    }

    localTodos = JSON.parse(localTodos).todos   // we get to this point in the code if localTodos exists, so we JSON parse it.
    setTodos(localTodos);   // we set the initial value of the todos to the local storage value.
  }, [])

  return (
    <main>
      <Todoinput todoValue={todoValue} setToDoValue={setToDoValue} handleAddTodos={handleAddTodos}/>    {/* We want to pass the add function to the input component */}
      <Todolist handleEditTodo={handleEditTodo} todoValue={todoValue} setToDoValue={setToDoValue} handleDeleteTodo={handleDeleteTodo} todos={todos}/> { /* We want to pass our dynamic to do list to the list component to display on the page. */}
    </main>
  )
}

export default App


/*
Inserting cool icons into the app is done like this:
1. go to fontawesome cdn 6.0, click the top result, and copy the code in the first row and paste inside index.html head tag
2. go to fontawesome.com and look up something.


Also, starting the app...
1. first type npm i at beginning only once
2. npm run dev, then copy link into browser


timestamp: 21:10, 6/20 12:29pm

List and card both want access to the to-do list, so we define the list in the parent function relative
to both of them in App.jsx.


This is the final version of the app! This should be merged with the main branch from final-branch-3.
*/