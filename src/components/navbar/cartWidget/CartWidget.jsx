import React from 'react'
import { Link } from 'react-router-dom'
import { componentsContext } from '../../../storage/statesComponents';
import { useContext } from 'react';

function CartWidget(props) {

  const {ActivarCanvasCart} =useContext(componentsContext);//Activar CARTCANVAS


  const handleLinkClick = event => {
    console.log('Link clicked');
 ActivarCanvasCart();
    // 👇️ refers to the link element
    //console.log(event.currentTarget);
  };
  
const contador= props.children;


  return (
    <Link  onClick={handleLinkClick}>
    <div className="carrito">
     <img  width="25px" src="/assets/img/tote-bag.png" alt="imagen carrito"></img>
     {contador>0 &&
     <span className="badge">{contador} </span>

    }
     </div>
     </Link>
  )
}

export default CartWidget