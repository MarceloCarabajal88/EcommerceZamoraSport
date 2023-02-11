
import Cart from './Cart';
import  './Cart.css';

import React, { useEffect, useState } from "react";
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Link } from 'react-router-dom';
import { componentsContext } from '../../storage/statesComponents';
import { useContext } from 'react';


function CartContainer() {

  let {cartOffCanvas,DesactivarCanvasCart} =useContext(componentsContext);//DESACTIVAR GRIDHOME





  const [show, setShow] = useState(true);

  //const handleClose = () => ;

  const handleClose = event => {
    setShow(false)
    console.log('Link clicked');
    DesactivarCanvasCart();
   
    // 👇️ refers to the link element
    //console.log(event.currentTarget);
  };

 

  const handleSubmit = event => {
    event.preventDefault(); // 👈️ prevent page refresh
    console.log('handleSubmit ran');

  }


  



  if(cartOffCanvas==true){
    

  return (

<>
<div className='canvasDiv'>
<Offcanvas show={cartOffCanvas} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Mi Compra</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          Detalles de tu compra

          <div>
<Cart/>

<Link to='/checkout'>
          <button className='btn btn-primary' onClick={handleClose}>
            FINALIZAR COMPRA
          </button>
          </Link>
    </div>


        </Offcanvas.Body>
      </Offcanvas>

     
       
    </div>
  

    
   

    </>
  
  )
  }
}

export default CartContainer