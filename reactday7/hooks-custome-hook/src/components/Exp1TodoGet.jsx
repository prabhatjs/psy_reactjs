import React, { useEffect, useState } from 'react'
import axios from "axios"
function Exp1TodoGet({id}) {
    const [todo,settodo]=useState({})

    useEffect(()=>{
        axios.get('https://sum-server.100xdevs.com/todo?id='+id)
        .then(res=>{
            settodo(res.data.todo);
            console.log(res.data.todo);
        })
    },[])
  return (
    
    <div> 

    </div>
  )
}

export default Exp1TodoGet