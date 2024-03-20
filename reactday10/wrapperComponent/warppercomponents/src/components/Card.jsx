import React from 'react'

function Card({innerComponent}) {
  return (
    <div style={{border:"2px solid black"}}>
             {innerComponent}
    </div>
  )
}

export default Card