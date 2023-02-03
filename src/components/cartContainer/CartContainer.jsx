import React from 'react'
import { cartContext } from '../../storage/cartContext';
import { useContext } from "react";
import  {createBuyOrder} from "../../services/firebase";
import { useState } from 'react';
import { componentsContext } from '../../storage/statesComponents';

import { useNavigate } from "react-router-dom";
import CartForm from './CartForm';

function CartContainer() {

  const {DesactivarGrid,ActivarGrid,DesactivarCarousel,ActivarCarousel} =useContext(componentsContext);
  DesactivarGrid();
  DesactivarCarousel();

  const navigate = useNavigate();
  const {cart} =useContext(cartContext);
  const {getTotalPrice} =useContext(cartContext);

const{removeItem}=useContext(cartContext);

console.log("este es cartcointainer "+ JSON.stringify(cart));

const preciototal=getTotalPrice();



   
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
console.log("esta es la ide del prod "+id);
  navigate(`/thank-you/${id}`);
 
  // recibir respuesta id para confirmar al usuario
}



    
  return (


    <div className='row'>

    <div className='d-flex justify-content-center mt-4'>
       
        
            <div className="col-lg-6 col-md-8 col-sm-12 text-center card">
           
            <h3>Mi Compra</h3>

            {cart.map((data) => (
            <div className='row mt-3'>
         
<div className='col-lg-4 col-md-4 col-sm-6'>
<img className='img-thumbnail'  src={data.imgurl}   alt="Card image cap" width="100px;"></img>
</div>

<div className='col-lg-3 col-md-4 col-sm-6'>
<p>Detalle: {data.detail}</p>
<p>talle:{data.tallecompra}  Cantidad : {data.cantidad}</p>
</div>

<div className='col-lg-3 col-md-4 col-sm-6'>
<p>Precio : {data.price}</p>
<button onClick={()=>removeItem(data.id)}>Eliminar</button>
</div>
</div>
            ))};
<p>Importe Total  : {preciototal}</p>
<button onClick={handlecheckout}>Finalizar compra</button>

        </div>
        </div>





<div className='row'>
<div className='col-lg-12'>
<div className='d-flex justify-content-center mt-4'>

<CartForm onSubmit={handlecheckout}/>
</div>
</div>
</div>

       
    </div>

   
  )
}

export default CartContainer