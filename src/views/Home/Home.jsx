import React from 'react'
import { useContext } from 'react';
import { Context_01 } from '../../contexts/Context_01/Context_01';
import '../Home/Home.css';
import { useNavigate } from 'react-router-dom';
import PizzaDataSheet from '../../components/PizzaDataSheet/PizzaDataSheet';

const Home = () => {

    const {productsMatrix, valorTotal, onClickAddDelete, formatMoney}=useContext(Context_01);
    const navigate= useNavigate();


  return (
    <div className='home'>
      <div className='home-header'>
        <div className='home-header-box'>
          <h1 className='h1-home-header'>¡Pizzería Mamma Mía!</h1>
          <p className='p-home-header'>¡Tenemos las mejores pizzas que podrás encontrar!</p>
        </div>  
      </div>
      <div className='home-body'>
        <div className='home-body-grid'>
          {productsMatrix.map((element, i)=>{
            return(
              <PizzaDataSheet key={element.id} product_pizza={element}  type_sheet={"gallery"} onClickAddDelete={onClickAddDelete} formatMoney={formatMoney}></PizzaDataSheet>
            );
          })}
        </div>
      </div>
    </div>
  )
}

export default Home;

