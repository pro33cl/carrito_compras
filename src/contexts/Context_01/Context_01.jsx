import { createContext, useEffect, useState } from "react";
import React from 'react';

export const Context_01 = createContext();



const Context_01Provider = ({children}) => {


  const [productsMatrix, SetProductsMatrix]=useState([]);
  const [valorTotal, SetValorTotal]=useState(0);
  
  const handlerCart= function(matrix){
    let total = 0;
    let matrix_copy= JSON.parse(JSON.stringify(matrix));
    SetProductsMatrix(matrix_copy);
    matrix.forEach((element)=>{
      total+=element.count*element.price;
    });
    SetValorTotal(total);
  }

  const onClickAddDelete=function(product_pizza_id,string_operation){
    let product_pizza_index;
    let product_pizza_count;
    productsMatrix.forEach((element,i)=>{
      if(element.id==product_pizza_id){
        product_pizza_index=i;
      }
    });
    product_pizza_count=productsMatrix[product_pizza_index].count;
    
    switch (string_operation) {
      case "+":
        product_pizza_count+=1;
        break;
    
      case "-":
        if(product_pizza_count-1<=0){
          product_pizza_count=0;
        }
        else{
          product_pizza_count-=1;
        }
        break;
    }
    productsMatrix[product_pizza_index].count=product_pizza_count;
    handlerCart(productsMatrix);
  }

  const formatMoney=function(value_money,string_currency){
    return new Intl.NumberFormat('de-DE', { style: 'currency', currency: `${string_currency}` }).format(value_money,);
  }

  useEffect(()=>{
    apiPizza();
  },[]);

  const apiPizza= async function(){
    const data= await apiConsumer('../../../public/pizzas.json');
    let data_formated=data.map((element)=>{
      return {id:element.id, name:element.name, img: element.img, ingredients: element.ingredients, desc: element.desc, price: element.price, count:0 };
    });
    SetProductsMatrix(data_formated);
  }

  const apiConsumer= async function(url){
    const res= await fetch(url);
    const data = await res.json();
    return data;t
  }


  return (
    <Context_01.Provider value={{productsMatrix, valorTotal, onClickAddDelete, formatMoney}}>
        {children}
    </Context_01.Provider>
  )
}

export default Context_01Provider;