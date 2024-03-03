import React from 'react'
import { useEffect } from 'react'
function EffectHook() {
    useEffect(()=>{
        console.log("From UseEffect Hook")
    },[]);
    console.log("Before Effect ");
  return (
    <div>EffectHook</div>
  )
}

export default EffectHook