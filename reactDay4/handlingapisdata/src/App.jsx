import { useState } from 'react';
import './App.css'
import Fetchapi from './api/Fetchapi'
import Productapi from './api/Productapi';
import Transaction from './api/TransactionHistory';
import EffectHook from './components/EffectHook';

function App() {
  //create async function to handle api data,async function 
  const [product,setProduct]=useState([]);
  const [Transactions,setTransaction]=useState([]);
  const [highlighted,setHighlighted]=useState(false);
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
  const handleTransaction=async()=>{
    try {
      const {data,status}=await Transaction("http://transaction.com/api/transactions");
      if(status===200){
        setTransaction(data.Transaction);
      }
    } catch (error) {
      console.log(error);
    }
  }

  function highLightTansaction(){
    setHighlighted(true);
  }
  return (
    <>
      <button onClick={handleclick}>Get City Data</button>
      <button onClick={handleclickShowonPage}>Get Product Data</button>
      <button onClick={handleTransaction}>Transaction Data</button>
      <button onClick={highLightTansaction}>High Light Transactions</button>
      <div>
      <ul style={{listStyle:'none'}}>
        {Transactions.map(({Amount,Date,platform})=>{
          return(
            <li style={{color:Amount>5000?'red':'blue', border:highlighted && Amount>5000 ? '2px solid Yellow':'none'}}>
              <p>Amount:{Amount}</p>
              <p>Date:{Date}</p>
              <p>Application:{platform}</p>
            </li>
          )
        })}
      </ul>
      </div>
      <div>
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
      </div>
      <EffectHook/>
    </>
  )
}

export default App
