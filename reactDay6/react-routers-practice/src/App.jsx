import { Routes,Route } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Cart from './pages/Cart'
import ProductDetail from './pages/ProductDetail'
import WishList from './pages/WishList'
function App() {
  return (
    <>
     <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/cart" element={<Cart/>}/>
      <Route path="/productDetail" element={<ProductDetail/>}/>
      <Route path="/wishlist" element={<WishList/>}/>
     </Routes>
    </>
  )
}

export default App
