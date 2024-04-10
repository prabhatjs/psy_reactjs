import React from 'react'
import { useContext } from 'react'
import { CountContexrt } from './Context'
function Button({setcount}) {
    const count=useContext(CountContexrt)
  return (
    <div>
        <button onClick={()=>{
            setcount(count+1)
        }} >+</button>
        <button onClick={()=>{
            setcount(count-1)
        }}>-</button>
    </div>
  )
}

export default Button