import './App.css'
import ConditonRender from './components/ConditonRender';
import Employee from './components/Employee';
import Products from './components/Products'

const fruits=[
  {id:1,name:"Apple",price:80},
  {id:2,name:"Mango",price:40},
  {id:3,name:"Grapes",price:100},
  {id:4,name:"Pinapple",price:80},
  {id:5,name:"Papaya",price:40}
]

const Mobiles=[
  {id:1,name:"Apple",price:80000},
  {id:2,name:"Samsung",price:60000},
  {id:3,name:"Nokia",price:10000},
  {id:4,name:"Pixel",price:8000},
  {id:5,name:"MotoRola",price:4000}
]

function isRed(price){
  if(price>50){
    return "red";
  }else{
    return "black";
  }
}
export function ProductCard({name,price,id})
{
  return (
   <li key={id} style={{listStyle:"none",border:"solid 1px black", margin:"4px", padding:"4px", width:'400px', color:isRed(price)}}>
    <p>{name}</p>
    <p>{price}</p>
   </li>
  );
}

const employees=[
  {id:1,name:"Prabhat",workExperience:4},
  {id:2,name:"Prabhat",workExperience:5},
  {id:3,name:"Prabhat",workExperience:6},
  {id:4,name:"Prabhat",workExperience:7}
]

function App() {

  return (
    <>
    {/* reuse of comopnents  */}
     {/* <Products productItem={Mobiles}>Mobiles</Products>
     <Products productItem={fruits}>fruits</Products> */}
     <Products productItem={fruits}>fruits</Products>
     <Employee employelist={employees}></Employee>
     <ConditonRender></ConditonRender>
    </>
  )
}

export default App
