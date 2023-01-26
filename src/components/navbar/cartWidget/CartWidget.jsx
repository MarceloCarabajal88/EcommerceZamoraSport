import React from 'react'
import { Link } from 'react-router-dom'

function CartWidget(props) {
  return (
    <Link to={"/cartContainer"}>
    <div className="carrito">
     <img  width="25px" src="/assets/img/tote-bag.png" alt="imagen carrito"></img>
     <span className="badge">{props.children} </span>
     </div>
     </Link>
  )
}

export default CartWidget