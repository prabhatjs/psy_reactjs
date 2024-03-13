import React, { useEffect, useState } from 'react'

function ExUseEffectHook() {
    const [serch,setserch]=useState("");
    function handlechnage(event){
            setserch(event.target.value);

    }
    useEffect(()=>{
        fetch(`https://dummyjson.com/products/${serch}`)
        .then(async function(res){
            const data=await res.json();
            console.log(data.title);
        })
    });


  return (
    <div>
    <input placeholder='Enter Product id here' type='number' onChange={handlechnage} />
    </div>
  )
}

export default ExUseEffectHook