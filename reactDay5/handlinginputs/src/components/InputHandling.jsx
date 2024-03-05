import React, { useState } from 'react'

function InputHandling() {
    const [input,setInput]=useState("");
    const[lastname,setlastname]=useState("")
    function handleInputs(event){
        setInput(event.target.value);              
    }
    function handleLastname(event){
        setlastname(event.target.value);
    }
  return (
    <div>

        <input onChange={handleInputs}></input>
        <input onChange={handleLastname}></input>
        <p><b>{input} {lastname}</b></p>
    
    </div>
  )
}

export default InputHandling