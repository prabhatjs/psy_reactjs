import Cards from './components/Cards'
import MultipleButton from './components/MultipleButton'

function App() {
  function handleMultplebutton(selecItem){
    console.log(selecItem);
  }
  return (
    <div>
      {
      /*Movie Card Example with condition rendering 
      <Cards/>
      <Cards/> 
      next Example is handle multiple Button and check which button is clicked
      */}
      <MultipleButton onSelect={()=>handleMultplebutton('Dil To Pagal Hain')}>Dil To Pagal Hain</MultipleButton>
      <MultipleButton onSelect={()=>handleMultplebutton('Awara Pagal Diwana')}>Awara Pagal Diwana</MultipleButton>
      <MultipleButton onSelect={()=>handleMultplebutton('Pagalpanti')}>Pagalpanti</MultipleButton>
      <MultipleButton onSelect={()=>handleMultplebutton('Bahubali')}>Bahubali</MultipleButton>
      <MultipleButton onSelect={()=>handleMultplebutton('Dhol')}>Dhol</MultipleButton>
      <MultipleButton onSelect={()=>handleMultplebutton('Dhamal')}>Dhamal</MultipleButton>
    </div>
  )
}

export default App
