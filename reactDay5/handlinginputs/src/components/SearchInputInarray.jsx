import React, { useState } from 'react'

 const fruits=[
    {
      "name" : "Apple",
      "image" : "https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Red_Apple.jpg/265px-Red_Apple.jpg",
      "price" : 35
    },
    {
      "name" : "Banana",
      "image" : "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Bananas_white_background_DS.jpg/320px-Bananas_white_background_DS.jpg",
      "price" : 12
    },
    {
      "name" : "Grapes",
      "image" : "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Table_grapes_on_white.jpg/320px-Table_grapes_on_white.jpg",
      "weight": 0.1,
      "price" : 45
    },
    {
      "name" : "Pineapple",
      "image" : "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Pineapple_and_cross_section.jpg/286px-Pineapple_and_cross_section.jpg",
      "price" : 200
    }
  ];
 function SearchInputInarray() {

    const [input,setinput]=useState();
    const [fruit,setfruits]=useState();
    //input box value set 
    function searchFruithandler(event){
        setinput(event.target.value);
    }
    //check when button click inputbox value is matchs the fruits name  if find then set fruit state and this show on page
    function searchbtn()
    {
            const fruitfind=fruits.find((fruit)=>fruit.name==input);
            setfruits(fruitfind);
          
    }
  return (
    <div>
    <input onChange={searchFruithandler}></input>
    <button onClick={searchbtn}>Search</button>
    {/* agr fruit m data hai to dekhega nhi to not found aayega */}
      {fruit ? (
        <div>
       <p> {fruit.name} </p>
       <p> {fruit.price} </p>
        </div>):
        (<p>"Not Found"</p>)
      }
    </div>
  )
}

export default SearchInputInarray;