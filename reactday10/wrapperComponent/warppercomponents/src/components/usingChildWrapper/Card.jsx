import React from 'react'

function Card({children}) {
  return (
    <div style={{border:"2px solid black"}}>
        {children}
    </div>
  )
}

export default Card