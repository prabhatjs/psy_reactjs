import React from 'react'
import axios from 'axios'
function UsingFakeStore() {
    const getApiProd=()=>{
        const api="https://fakestoreapi.com/products";
        axios.get(api).then(prod=>{
            console.log(prod);
        }).catch(error=>{
            console.log(error);
        })
    }
  return (
    <div>
        <button onClick={getApiProd}>get From Fake Api</button>
    </div>
  )
}

export default UsingFakeStore