import React, { useState } from 'react'

function ControlledComponentsHandlingForms() {
    const [object,setobject]=useState({name:"",email:""})//pass name object as blank
    function handleSubmit(event){
        event.preventDefault();
        console.log(object);
    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
        {/* set VAlue on real time previous one is when we submit button click then its run */}
            <input onChange={(event)=>setobject({...object,name:event.target.value})} placeholder='name'></input>
            <input onChange={(event)=>setobject({...object,email:event.target.value})} placeholder='email'></input>
            <input type='submit'></input>
        </form>
    </div>
  )
}

export default ControlledComponentsHandlingForms