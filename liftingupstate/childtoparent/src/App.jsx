import { useState } from 'react'
import './App.css'
import Childcomponets from './components/Childcomponets'
import Children2 from './components/Children2'
function App() {
  const [heading,setHeading]=useState('Parent')
  const [color,setcolor]=useState('Red');

  return (
    <>
    <h1 style={{color}}>{heading}</h1>
    <Childcomponets changeword={heading=>setHeading(heading)} />
    <Children2 changecolor={chnagec=>setcolor(chnagec)}/>
    </>
  )
}

export default App
