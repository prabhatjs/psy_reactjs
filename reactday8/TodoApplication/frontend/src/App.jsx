
import { useState } from 'react'
import './App.css'
import CreateTodo from './components/CreateTodo'
import Todos from './components/Todos'
function App() {
const [todos,settodo]=useState([]);

  fetch("http://localhost:8000/api/todo")
  .then(async function(res){
    const data=await res.json();
    console.log(data);
    settodo(data.todos);
  })
  return (
    <>
      <CreateTodo></CreateTodo>
      <Todos todos={todos}></Todos>
    </>
  )
}

export default App
