import React, { useEffect, useState } from 'react'

function AbortController1() {
   
        const [id,setID]=useState('');
        const [suggestions,setSuggestions]=useState([]);

        useEffect(()=>{
            if(!id) return setSuggestions([]);
            const Controller=new AbortController();
            const {signal}=Controller;
            fetch(`https://dummyjson.com/products/search?q=${id}`,{signal})
            .then(res=>{
                res.json()
                console.log(res);
            })
            .then(data=>{setSuggestions(data)
            console.log(data);
            })
    
            .catch(error=>{
                if(error.name!=='AbortError'){
                    console.log('Fetch Error',error);
                }
            });
            return ()=>Controller.abort();
        },[id])
    

  return (
    <div>
        <input type='text' value={id} onChange={e=>setID(e.target.value)} placeholder='Search...' />
        <ul>
            {suggestions.map((ele)=>
            <li>
                <p>{ele}</p>
            </li>
            )}
        </ul>
    </div>
  )
}

export default AbortController1