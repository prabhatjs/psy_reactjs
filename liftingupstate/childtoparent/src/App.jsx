import { useState } from 'react'
import './App.css'
import Childcomponets from './components/Childcomponets'
function App() {
  const [heading,setHeading]=useState('Parent')

  return (
    <>
    <h1>{heading}</h1>
    <Childcomponets changeword={heading=>setHeading(heading)} />
    </>
  )
}

export default App
