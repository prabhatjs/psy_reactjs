import React from 'react'

function Children2({changecolor}) {
  return (
    <div>
        <button onClick={()=>changecolor("Blue")}>Change color</button>
    </div>
  )
}

export default Children2