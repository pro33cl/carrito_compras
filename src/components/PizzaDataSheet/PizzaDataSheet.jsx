import React from 'react'
import Button from '../Button/Button';
import '../PizzaDataSheet/PizzaDataSheet.css';
import { useNavigate } from 'react-router-dom';

const PizzaDataSheet = (props) => {

    const {product_pizza,type_sheet, onClickAddDelete, formatMoney}=props;
    const format={t1:"gallery",t2:"detail"};
    const navigate= useNavigate();

    const add=function(){
        onClickAddDelete(product_pizza.id,"+");
        navigate(`/cart`);
    }


  return (
    <div className={type_sheet==format.t1?'sheet-gallery':'sheet-detail'}>
        <div className={type_sheet==format.t1?'sheet-image-gallery':'sheet-image-detail'} style={{backgroundImage:`url(${product_pizza.img})`}} ></div>
        <div className='sheet-data'>
            <div className='sheet-header'>
                <h2 className='sheet-header-h2'>{product_pizza.name}</h2>
            </div>
            <div className='sheet-body'>
                <div className={type_sheet==format.t1?'hidden':'showed'}>
                    <p className='paragraph'>{product_pizza.desc}</p>
                </div>
                <div className='sheet-body-ingredients'>
                    {product_pizza.ingredients.map((element,i)=>{
                        return (
                            <p key={product_pizza.id+i} className='sheet-body-ingr-p'>&#127829; {element}</p>
                        );
                    }
                    )}
                </div>
            </div>
            <div className='sheet-footer'>
                <p className='sheet-footer-price'>${formatMoney(product_pizza.price,"CLP")}</p>
                <div className='sheet-footer-buttons'>
                    <div className={type_sheet==format.t1?'showed ml-1':'hidden'}>
                        <Button background={"green"} width={"4rem"} height={"1.5rem"} text={"Ver Más"} onclick={()=>{navigate(`/productdetail/${product_pizza.id}`)}}/>
                    </div>
                    <div className='showed ml-1'>
                        <Button background={"red"} width={"4rem"} height={"1.5rem"} text={"Añadir"} onclick={add}/>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
  )
}

export default PizzaDataSheet;