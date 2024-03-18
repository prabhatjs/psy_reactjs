import React, { useState } from 'react'

function CreateTodo() {
    const [title,setTitle]=useState("");
    const [description,setdescription]=useState('');

    function handletitle(event)
    {
        setTitle(event.target.value);
    }
    function handledescription(event){
        setdescription(event.target.value);
    }
    function addtodo(){
        fetch('http://localhost:8000/api/todo',{
            method:'POST',
            body:JSON.stringify({
                title:title,
                description:description
            }),
            headers:{
                "Content-type":"application/json"
            }
        }).then(async function(res){
            const data=await res.json();
            alert("Todo Added")
        })
    }

  return (
    <div>
        <input type='text' placeholder='title' onChange={handletitle}/><br/>
        <input type='text' placeholder='description' onChange={handledescription}/><br/>
        <button onClick={addtodo}>Add Todo</button>
    </div>
  )
}

export default CreateTodo