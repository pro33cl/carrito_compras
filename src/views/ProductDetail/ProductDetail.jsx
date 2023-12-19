import React, { useContext } from 'react'
import { Context_01 } from '../../contexts/Context_01/Context_01';
import PizzaDataSheet from '../../components/PizzaDataSheet/PizzaDataSheet';
import { useParams } from 'react-router-dom';
import '../ProductDetail/ProductDetail.css';

const ProductDetail = () => {

const {productsMatrix, valorTotal, onClickAddDelete, formatMoney}=useContext(Context_01);


const {id}=useParams();
const type_sheet="detail";

const productPizza = function(id){
  let index_product;
  productsMatrix.forEach((element,i) => {
    if(element.id==id){
      index_product=i;
    }
  });
  return productsMatrix[index_product];
}

const product_pizza=productPizza(id);

  return (
    <div className='productdetail'>
      <PizzaDataSheet product_pizza={product_pizza} type_sheet={type_sheet} onClickAddDelete={onClickAddDelete} formatMoney={formatMoney}></PizzaDataSheet>
    </div>
  )
}

export default ProductDetail;