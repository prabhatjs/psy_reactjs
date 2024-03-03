import React, { useState } from 'react'
import FlipkartProd from '../api/FlipkartProd';
function GetDataAndFilter() {
    const [data,setData]=useState([]);
    const getData=async()=>{
        const {data,status}=await FlipkartProd('https://example.com/api/Products');
        if(status===200){
            //console.log(data.Products);
            setData(data.Products);
        }
    }
    function filterData(){
        const filterData=data.filter((item)=>item.Price>3000);
        setData(filterData);
    }
  return (
    <div>
        <button onClick={getData}>Get Data</button>
        <button onClick={filterData}>Filter Data Price grt 3000</button>
        <ul>
            {data.map((item)=>{
                return (
                    <li>
                        <p>{item.name}</p>
                        <p>{item.Price}</p>
                    </li>
                )
            })}
        </ul>

    </div>
  )
}

export default GetDataAndFilter