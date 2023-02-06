import React from 'react'
import CartContainer from '../cartContainer/CartContainer'
import CartForm from '../cartContainer/CartForm'
import { useState } from 'react';
import  {createBuyOrder,updateStock} from "../../services/firebase";
import { cartContext } from '../../storage/cartContext';
import { useNavigate } from "react-router-dom";
import { useContext } from 'react';

function Chekout() {
    const navigate = useNavigate();

    const {cart} =useContext(cartContext);

    async function  handlecheckout(userData){

        //1. modelo orden compra
      
        //recorro el carrito y armo el listado de items con campos q quiero
      const itemscart=cart.map((producto)=>({ 
        id:producto.id,
        title:producto.title,
        price:producto.price,
        cantidad:producto.cantidad
      
      }))
      
      console.log(itemscart);
      const order={
      buyer:userData,
      items:itemscart,
      date: new Date(),
      total:"1200"
      };
        //2 enviar a firebase
        let id = await createBuyOrder(order);
        let stock = await updateStock(itemscart);
      
        //hacer console log par ver que trae de stock id
      console.log("esta es la ide del prod "+id);
        navigate(`/thank-you/${id}`);
       
        // recibir respuesta id para confirmar al usuario
      }

    
  return (
    <div className='container'>
        <div className='row'>
<div className='col-lg-6 col-sm-12'>
 
    <CartForm onSubmit={handlecheckout}/>
</div>
<div className='col-lg-6 col-sm-12'>
  <CartContainer/>
</div>
</div>
    </div>
  )
}

export default Chekout