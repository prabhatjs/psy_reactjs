import { useState } from 'react';
import './App.css'
import Fetchapi from './api/Fetchapi'
import Productapi from './api/Productapi';

function App() {
  //create async function to handle api data,async function 
  const [product,setProduct]=useState([]);
  //print on console
  const handleclick =async()=>{
    try {
      const response=await Fetchapi("https://example.com/api/citys");//this function return promise thats we use await 
      if(response.status===200){
        console.log(response.data.citys)
      }
    } catch (error) {
      console.log(error);
    }
  }
      //print on page
  const handleclickShowonPage =async()=>{
    try {
      const {data,status}=await Productapi("https:productapi.com/api/products")
      if(status===200){
       console.log( {data:data.products});
       setProduct(data.products)
      }
    } catch (error) {
      console.log(error);
    }
  }
  //print on page and conditon render 
  return (
    <>
    <h1>City Data</h1>
      <button onClick={handleclick}>Get City Data</button>
      <button onClick={handleclickShowonPage}>Get Product Data</button>
      <ul style={{listStyle:'none'}}>
        {product.map((item)=>{
         return (
          <li key={item.id}>
          <h3>{item.name}</h3>
          <p>{item.price}</p>
          </li>
         )
        })}
      </ul>
    </>
  )
}

export default App
