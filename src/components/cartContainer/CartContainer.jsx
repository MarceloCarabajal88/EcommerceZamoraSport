import React from 'react'
import { cartContext } from '../../storage/cartContext';
import { useContext } from "react";


function CartContainer() {

    const {cart} =useContext(cartContext);
    const {getTotalPrice} =useContext(cartContext);
console.log("cartcointainer "+ JSON.stringify(cart));

const preciototal=getTotalPrice();
  return (
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
<p>Cantidad : {data.cantidad}</p>
</div>

<div className='col-lg-3 col-md-4 col-sm-6'>
<p>Precio : {data.price}</p>
<button>QUitar</button>
</div>
</div>
            ))};
<p>Importe Total  : {preciototal}</p>
<button>Finalizar compra</button>

        </div>
    </div>
  )
}

export default CartContainer