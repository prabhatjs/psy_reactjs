import React from 'react'
import {ProductCard} from '../App'

function Products({productItem,children}) {
  return (
    <div>
   <h1>{children}</h1> 
<ul>
        {
          productItem.map(({name,price,id})=>(
          <ProductCard id={id} name={name} price={price}/>
          ))
        }
        </ul>
    </div>
  );
}

export default Products