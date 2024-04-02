import React from 'react'
import { useState } from 'react'

function Player({name,sign}) {

    const [Edit,setEdit]=useState(false);

    function HandleEdit(){
        setEdit((editing)=>!editing);
        console.log(Edit);
    }

    let playerName=<span className="player-name">{name}</span>
    let btn="Edit"
    if(Edit){
        playerName=<input type='text' required value={name}/>
        btn="Save"
    }

  return (
    <li>
    <span className="player-info">
  
        {
             playerName
        }
      
      <span className="player-symbol">{sign}</span>
    </span>
    <button onClick={HandleEdit}>{btn}</button>
  </li>
  )
}

export default Player