import React, { useState } from 'react'

function DropDownList() {

    const [color,setcolor]=useState("");
    function handleChange(event){
    console.log(event.target.value);
    setcolor(event.target.value);
    }

  return (
    <div>
        <select onChange={handleChange}>
        <option>Black</option>
        <option>Red</option>
        <option>Green</option>
        <option>Purple</option>
        <option>Orange</option>
        </select>
     
        <h1 style={{color:color}}>Hello Color changer</h1>
    </div>
  )
}

export default DropDownList