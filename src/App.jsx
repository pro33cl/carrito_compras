import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar.jsx'
import Home from './views/Home/Home.jsx';
import ProductDetail from './views/ProductDetail/ProductDetail.jsx';
import Cart from './views/Cart/Cart.jsx';
import { useContext } from 'react';
import { Context_01 } from './contexts/Context_01/Context_01.jsx';


function App() {

  const {productsMatrix, valorTotal, onClickAddDelete, formatMoney}=useContext(Context_01);

  return (
    <>
      <Navbar valorTotal={valorTotal}></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/productdetail/:id" element={<ProductDetail></ProductDetail>}></Route>
        <Route path="/cart" element={<Cart></Cart>}></Route>
      </Routes>
    </>
  )
}

export default App
