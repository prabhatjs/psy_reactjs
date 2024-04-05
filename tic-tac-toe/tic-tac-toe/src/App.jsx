import { useState } from "react";
import GridBoard from "./components/GridBoard";
import Player from "./components/Player";
// we need to share information of which player is currently active this info we share with the both componets ,we need lifting up state:

function App() {
  const [active,setActive]=useState('X');

  function handleselectSqure(){
    setActive((currentActivePlayer)=>currentActivePlayer==='X'?'O':'X')
  }
  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
        {/* Pops dril */}
         <Player name="Player 1" sign="X" isActive={active==='X'}/>
         <Player name="Player 2" sign="O" isActive={active==='O'}/>
        </ol>
        <GridBoard OnChnangeSquere={handleselectSqure} activeplayerSymbol={active}></GridBoard>
      </div>
    </main>
  );
}

export default App;
