import React, { useState } from 'react'

const fruits=[
    {id:1,catgory:"Mobile",name:"samsung gelexy"},
    {id:2,catgory:"Mobile",name:"Nokia 3011"},
    {id:3,catgory:"Mobile",name:"POCO 11"},
    {id:4,catgory:"Neck Band",name:"One Plus Rokerz"},
    {id:5,catgory:"Neck Band",name:"Boat Neckband"},
    {id:6,catgory:"Laptop",name:"Asus Tuff"},
    {id:7,catgory:"Laptop",name:"Acer Nitro"},
    {id:8,catgory:"Laptop",name:"Lenovo ideapad"},
    {id:9,catgory:"Monitor",name:"LG 24inch Monitor"},
    {id:10,catgory:"Monitor",name:"ViewSonic"},
    {id:11,catgory:"Monitor",name:"MSI"},
    {id:12,catgory:"Smart Watch",name:"Titan"},
    {id:1,catgory:"Smart Watch",name:"Bolt"}
]
function DropDownFilter() {
  const [data,setdata]=useState(fruits);
    function hanldeoption(event)
    {
            console.log(event.target.value);
            event.target.value=="All"?
            setdata(fruits):
            setdata(fruits.filter(({catgory})=>catgory===event.target.value));
    }
  return (
    <>
    <div>
        <select onChange={hanldeoption}>
            <option value="All">All</option>
            <option value="Mobile">Mobile</option>
            <option value="Neck Band">Neck Band</option>
            <option value="Laptop">Laptop</option>
            <option value="Monitor">Monitor</option>
            <option value="Smart Watch">Smart Watch</option>
        </select>
    </div>
    <ul>
   {data.map(({id,name})=>(
    <li key={id}>{name}</li>
   ))}
    </ul>
    </>
  )
}


export default DropDownFilter