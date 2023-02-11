import React from 'react'
import { cartContext } from '../../storage/cartContext';
import { useContext } from "react";
import { componentsContext } from '../../storage/statesComponents';
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import { useEffect,useState } from 'react';
import './Cart.css';


function Cart() {

  const {DesactivarGrid,ActivarGrid,DesactivarCarousel,ActivarCarousel} =useContext(componentsContext);
  DesactivarGrid();
  DesactivarCarousel();

  const {cart} =useContext(cartContext);
  const{removeItem}=useContext(cartContext);
  const {getTotalPrice} =useContext(cartContext);

  
  const[precioTotal,setPrecioTotal]=useState();


  useEffect(()=>{
    setPrecioTotal(getTotalPrice());
   
       },[getTotalPrice]);
    
        
  
       if(cart.length < 1){
  return (
<div>
  <p>Aún no has agregado artículos a tu compra.</p>
</div>
 ) }
  else
  

return(
 
    <div className='carritobox'>
       {cart.length < 1 &&
        <p>
          Aún no has agregado artículos a tu compra..
        </p>
      }


    <div className='d-flex justify-content-center mt-4'>
       
        
            <div className="col-lg-12 col-md-12 col-sm-12 text-center card">
           <div className='tituloheader'>
            <h5>DETALLE DEL PEDIDO</h5>
            </div>
     
     
            {cart.map((data,index) => (
            <div className='container mt-3 d-flex justify-content-center'>
         <div className='row bordered'>
<div className='col-lg-4 col-md-4 col-sm-6 py-4'>
<img className='img-thumbnail'  src={data.imgurl}   alt="Card image cap" width="100px;"></img>
</div>

<div className='col-lg-3 col-md-4 col-sm-6'>
<p><strong>{data.title}</strong></p>
{ data.tallecompra &&
<p>talle: {data.tallecompra} </p>
}
<p> Cantidad : {data.cantidad}</p>
</div>

<div className='col-lg-5 col-md-4 col-sm-6'>
<p>$UYU {data.price*data.cantidad}</p>

<div>
<button className='btn_eliminar' onClick={()=>removeItem(index)}>Eliminar 
<img  width="25px" src="/assets/img/basura.png" alt="papelera"></img>
</button>
</div>
</div>
</div>
</div>
            ))};
<p><strong>Importe Total  : {precioTotal}</strong></p>

        </div>
        </div>





<div className='row'>
<div className='col-lg-12'>
<div className='d-flex justify-content-center mt-4'>


</div>
</div>
</div>

       
    </div>

   
  )
}

export default Cart