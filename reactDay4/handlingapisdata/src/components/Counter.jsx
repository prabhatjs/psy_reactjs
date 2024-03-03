import React, { useEffect, useState } from 'react'

function Counter() {
    const [counter,setCounter]=useState(0);
    useEffect(()=>{
        console.log("from USeEffect",counter);
    },[])
    function incrementFun(){
        console.log("form bitton Click",counter);
        setCounter(counter+1);
    }
  return (
    <div>
    <h1>{counter}</h1>
    <button onClick={incrementFun}>+</button>
    </div>
  )
}

export default Counter