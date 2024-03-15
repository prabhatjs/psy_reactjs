/***
 * usecallback  is a hook in reatc a paopuler javascript library for building user interface it is used to memoize functions which can help in optimizing the performance of 
 * your application , especially in case involving child components that rely on reference equality to prevent unnecessary renders.
 * 
 */

import React from 'react'
import UsecallbackTodo from './UsecallbackTodo'
import { useState ,useCallback} from 'react'
function UseCallBackHook() {
 const [increment,setincrement]=useState(0);
 function incrementfun(){
    setincrement(increment+1);
 }
 const AddTodo=useCallback(()=>{
  console.log("render not very time")
 },[])
  return (
    <div>
        <UsecallbackTodo AddTodo={AddTodo}/>
        <h1>{increment}</h1>
        <button onClick={incrementfun}>+</button>
    </div>
  )
}

export default UseCallBackHook
//agr ab ham Usecallbacktodo me function pass kre to vo fir se rerender hone lagega ,usecallback ek dependency array leta hai