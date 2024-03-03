import Transaction from '../api/TransactionHistory'
import React, { useEffect, useState } from 'react'

function DataOnPageLoad() {
    const [transaction,setTransaction]=useState([]);
  const getTransactionData =async()=>{
        try {
            const {data,status}=await Transaction("http://transaction.com/api/transactions");
            if(status===200){
              setTransaction(data.Transaction);
            }
          } catch (error) {
            console.log(error);
          }
        
    }
    useEffect(()=>{
        getTransactionData();
    },[]);
  return (
    <div>
        <ul>
            {transaction.map(({Amount,Date,platform})=>{
                return(
                    <li>
                        <p>{Amount}</p>
                        <p>{Date}</p>
                        <p>{platform}</p>
                    </li>
                )
            })}
        </ul>
    </div>
  )
}

export default DataOnPageLoad