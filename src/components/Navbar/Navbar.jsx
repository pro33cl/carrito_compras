import React from 'react';
import '../Navbar/Navbar.css';
import { useNavigate } from 'react-router-dom';

const Navbar = (props) => {

    const {valorTotal}=props;
    const navigate=useNavigate();

  return (
    <div className='navbar'>
        <div>
          <h2 className='h2-navbar'onClick={()=>{navigate(`/`)}}>&#127829; Pizzería Mamma Mía!</h2>
        </div>
        <div>
          <h2 className='h2-navbar'><span className='h2-navbar' onClick={()=>{navigate(`/cart`)}}>&#128722;</span> ${new Intl.NumberFormat('es-ES', { style: 'currency', currency: 'CLP'}).format(valorTotal,)}</h2>
        </div>
    </div>
  )
}

export default Navbar