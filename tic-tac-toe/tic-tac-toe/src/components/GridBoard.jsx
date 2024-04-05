import React, { useState } from 'react'

const initialBoard=[
    [null,null,null],
    [null,null,null],
    [null,null,null]
]
 /* {map inside map how to show value dynamically in */
function GridBoard({OnChnangeSquere,activeplayerSymbol}) {
    const [gameBoard,setGameBoard]=useState(initialBoard);
//this function take which fild was clicked 
    function handleSelectionSquare(rowIndex,colIndex){
        setGameBoard((prev)=>{
            //kis row ke kis column ki values set krni hai
            const updateBoard=[...prev.map(innerArry=>[...innerArry])]
            updateBoard[rowIndex][colIndex] =activeplayerSymbol ;
                 return updateBoard;
               
        })
        OnChnangeSquere();
    }
  return (
    <ol id='game-board'>
       {
        gameBoard.map((row,rowindex)=><li key={rowindex}>
                    <ol>
                        {row.map((col,colindex)=><li key={colindex}>
                            <button onClick={()=>handleSelectionSquare(rowindex,colindex)}>{col}</button>
                        </li>)}
                    </ol>
            </li>)
        }      
    </ol>
  )
}

export default GridBoard