import React from 'react'
import { useState } from 'react'

function Player({name,sign,isActive}) {
    const [playername,setplayername]=useState(name)
    const [Edit,setEdit]=useState(false);

    function HandleEdit(){
        setEdit((editing)=>!editing);
        console.log(Edit);
    }
    function changeplayernamehandler(event){
        setplayername(event.target.value);
    }

    let playerName=<span className="player-name">{playername}</span>
    let btn="Edit"
    if(Edit){
        playerName=<input type='text' required value={playername} onChange={changeplayernamehandler} />
        btn="Save"
    }

  return (
    <li className={isActive?'active':undefined}>
    <span className="player-info">
        {  playerName }
    <span className="player-symbol">{sign}</span>
    </span>
    <button onClick={HandleEdit}>{btn}</button>
  </li>
  )
}

export default Player