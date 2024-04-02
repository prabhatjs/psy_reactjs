import Player from "./components/Player";

function App() {
  return (
    <main>
      <div id="game-container">
        <ol id="players">
        {/* Pops dril */}
         <Player name="Player 1" sign="X"/>
         <Player name="Player 2" sign="O"/>
        </ol>
      </div>
    </main>
  );
}

export default App;
