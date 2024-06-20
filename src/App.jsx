import { useState } from 'react'
import Todoinput from './components/todoinput'
import Todolist from './components/todolist'

function App() {

  const [todos, setTodos] = useState([    // using a useState variable because we want to interact with the list of todos via user input
    'Go to work',
    'Kiss Zack good morning',
    'Go out to a house club'
  ])

  function handleAddTodos (addedTodo) {   // the syntax below allows us to have an array with the previous todos plus a new one, then we set the state of the todo list
    const newTodos = [...todos, addedTodo]
    setTodos(newTodos);
  }

  function handleDeleteTodo(index) {    // the filter function allows us to go through each todo to see if it can stay on the page, and it can stay if its index has not been selected as an argument
    const newTodos = todos.filter((todo, todoIndex) => {
      return todoIndex !== index
    })
    setTodos(newTodos);
  }

  return (
    <main>
      <Todoinput handleAddTodos={handleAddTodos}/>    {/* We want to pass the add function to the input component */}
      <Todolist handleDeleteTodo={handleDeleteTodo} todos={todos}/> { /* We want to pass our dynamic to do list to the list component to display on the page. */}
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


Here is an important bit. We have not added functionality to the edit button yet. The way that
I want this to play out is that we take the value (the text) of the todo item we want to edit and place the
text inside the input bar while deleting the todo off the screen. This is not possible currently because:
1. The list and card components do not have access to the value inside the input bar.
So, instead of declaring this input value inside of the todoinput component, we should declare in
in the overall parent function so that all components can grab it. This will be easy because we can
send this declared state variable to all components, and destructure them inside of each component.

There is a branch called actual-WIPs where the new code for putting the state variable for the input
bar in the App.jsx.
*/