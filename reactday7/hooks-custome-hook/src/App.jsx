import { useState } from 'react'

import './App.css'
import UseEffectHook from './components/UseEffectHook'
import ExUseEffectHook from './components/ExUseEffectHook'
import Exp1TodoGet from './components/Exp1TodoGet'

function App() {

  return (
   <>
   {/* <UseEffectHook></UseEffectHook> */}
   {/* <ExUseEffectHook></ExUseEffectHook> */}
   <Exp1TodoGet id={3}></Exp1TodoGet>
    </>
  )
}

export default App
