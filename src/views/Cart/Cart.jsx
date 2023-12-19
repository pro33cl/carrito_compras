import React from 'react'
import { useContext } from 'react';
import { Context_01 } from '../../contexts/Context_01/Context_01';
import CartTable from '../../components/CartTable/CartTable.jsx';
import '../Cart/Cart.css';


const Cart = () => {

    const {productsMatrix, valorTotal, onClickAddDelete, formatMoney}=useContext(Context_01);

  return (
    <div className='cart'>
      <CartTable productsMatrix={productsMatrix} valorTotal={valorTotal} onClickAddDelete={onClickAddDelete} formatMoney={formatMoney}></CartTable>
    </div>
  )
}

export default Cart;