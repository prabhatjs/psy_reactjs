import React, { useRef } from 'react'

function FormHandling() {
    const name=useRef(null);
    const age=useRef(null);
    //value get on the time of form submit
    function handleSubmit(event){
        //this handle to refresh web page evry time
        event.preventDefault();
        console.log(name.current.value,age.current.value);
    }
  return (
    <form onSubmit={handleSubmit}>
        <input ref={name} type="text" placeholder='Name '></input>
        <input ref={age}  type='number' placeholder='Age '></input>
        <input type='submit'  ></input>
    </form>
  )
}

export default FormHandling; 

//every time we fill the form and submit then webpage is render of refresh every time we need to prevent this thing to and handle 
//page rerendering --three method merjor used 1-useRef,2-controled component,3-React hook form
/*
useRef -ki hepl se ham input to select kr lete hen or uski value tab niklange jab form submit hoga--
useRf kisi bhi html input ko select kar sakte ho
*/