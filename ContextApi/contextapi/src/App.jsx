import { useState } from 'react'
import './App.css'
import Count from './components/Count';
import { CountContexrt } from './components/Context';

function App() {
 const [count,setcount]=useState(0);

  return (
    <>
   <CountContexrt.Provider value={count}>
        <Count count={count} setcount={setcount}/>
    </CountContexrt.Provider>
    </>
  )
}

export default App
