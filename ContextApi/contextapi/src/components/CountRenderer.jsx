import React from 'react'
import { useContext } from 'react'
import { CountContexrt } from './Context'

function CountRenderer() {
    const count=useContext(CountContexrt)
  return (
    <div>
        {count}
    </div>
  )
}

export default CountRenderer