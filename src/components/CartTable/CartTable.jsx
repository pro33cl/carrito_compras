import React from 'react';
import Button from '../Button/Button.jsx';
import '../CartTable/CartTable.css';

const CartTable = (props) => {

    const {productsMatrix, valorTotal, onClickAddDelete, formatMoney}=props;

  return (
    <div>
        <div className='card-table-header'>
            <h3 className='card-table-header-h3'>Detalles del Pedido:</h3>
        </div>
        <div className='card-table-body'>
            {productsMatrix.filter(element=>element.count>0).map((element)=>{
                return (
                    <div className='card-table-row' key={element.id}>
                        <div className='card-table-row-name'>
                            <div className='card-table-row-img' style={{backgroundImage:`url(${element.img})`}}></div>
                            <p className='card-table-row-p'>{element.name}</p>
                        </div>
                        <div className='card-table-row-numbers'>
                            <p className='card-table-row-p2'>${formatMoney(element.price*element.count,"CLP")}</p>
                            <Button background={"red"} width={"1.5rem"} height={"1.5rem"} text={"-"} onclick={()=>{onClickAddDelete(element.id,"-")}}/>
                            <p className='card-table-row-p3'>{element.count}</p>
                            <Button background={"green"} width={"1.5rem"} height={"1.5rem"} text={"+"} onclick={()=>{onClickAddDelete(element.id,"+")}}/>
                        </div>
                    </div>
                )
            })}
        </div>
        <div className='card-table-footer'>
            <h2 className='card-table-footer-h2'>Total: ${formatMoney(valorTotal,"CLP")}</h2>
            <Button background={"green"} width={"10rem"} height={"1.5rem"} text={"Ir a pagar"} onclick={()=>{console.log(productsMatrix)}}/>
        </div>
    </div>
  )
}

export default CartTable;