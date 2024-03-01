import imgefile from '../assets/react-core-concepts.png';
import './Header.css'
const description=['Fundamental','Crucial','Core'];
function rendomnumber(max){
  return Math.floor(Math.random()*(max+1))
}
export default function Header() {
  const Dynamicdescription=description[rendomnumber(2)];
  return (
    <header>
      <img src={imgefile} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {Dynamicdescription} React concepts you will need for almost any app you are
        going to build!
      </p>
    </header>

  );
}