import React from 'react'
import { Link } from 'react-router-dom'

function CartWidget(props) {

const contador= props.children;


  return (
    <Link to={"/cartContainer"}>
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