import React, { useEffect, useState } from 'react'

function UseEffectHook() {
    const [product,setProduct]=useState([]);
    useEffect(()=>{
        fetch('https://dummyjson.com/products/')
        .then(async function(res){
 const data=await res.json();
 console.log(data);
 setProduct(data.products)
        })
    },[])
  return (
    <div>
        <ul>
        {product.map((element)=>
        <li key={element.id}>
            <p >{element.title}</p>
        </li>
        )}
        </ul>
    </div>
  )
}

export default UseEffectHook