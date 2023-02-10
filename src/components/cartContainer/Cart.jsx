import React from 'react'
import { cartContext } from '../../storage/cartContext';
import { useContext } from "react";
import { componentsContext } from '../../storage/statesComponents';
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import './Cart.css';
function Cart() {

  const {DesactivarGrid,ActivarGrid,DesactivarCarousel,ActivarCarousel} =useContext(componentsContext);
  DesactivarGrid();
  DesactivarCarousel();

  const {cart} =useContext(cartContext);
  const {getTotalPrice} =useContext(cartContext);

const{removeItem}=useContext(cartContext);

console.log("este es cartcointainer "+ JSON.stringify(cart));

const preciototal=getTotalPrice();



   /*
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

*/

    
  return (


    <div className='carritobox'>

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
<p><strong>Importe Total  : {preciototal}</strong></p>

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