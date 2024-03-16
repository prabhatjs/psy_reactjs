import React from "react";
import { useState } from "react";

const fruits=[
    {id:1,name:'Mango',price:500},
    {id:2,name:'Watermalen',price:100},
    {id:3,name:'Tamato',price:200},
    {id:4,name:'Apple',price:400},
    {id:5,name:'Pear',price:600},
    {id:6,name:'Guava',price:800},
    {id:7,name:'Grapse',price:300},
];


function ConditonRender() {
    const [highlighted,setHighlighted]=useState(false);

    function highlight(){
       //if we click on button we change the state to true
       setHighlighted(true);
    }
    function RestHighlighted(){
        setHighlighted(false);
    }
  return (
    <div>
    {/* if highlighted is true and price greater then 300 then return color red */}
        {fruits.map(({name,price})=>(
            <li style={{color: highlighted && price >300 ? "Red":"black"}}>{name}:{price}</li>
        ))}
        <button onClick={highlight}>HighLight</button>
        <button onClick={RestHighlighted}>Rest</button>
    </div>
  )
}

export default ConditonRender