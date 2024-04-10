import React from 'react'
import Button from './Button'
import CountRenderer from './CountRenderer'

function Count({setcount}) {
  return (
    <div>
       <CountRenderer/>
       <Button setcount={setcount}/>
    </div>
  )
}

export default Count