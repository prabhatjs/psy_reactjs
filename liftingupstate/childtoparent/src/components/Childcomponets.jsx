import React from 'react'

function Childcomponets({changeword}) {
    
  return (
    <div>

        <button onClick={()=>changeword("Child")}>Change Heading</button>
    </div>
  )
}

export default Childcomponets