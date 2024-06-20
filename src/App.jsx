import Todoinput from './components/todoinput'
import Todolist from './components/todolist'

function App() {

  return (
    <main>
      <Todoinput />
      <Todolist />
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
*/