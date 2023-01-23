import React from 'react'

function CartWidget(props) {
  return (
    <div className="carrito">
     <img  width="25px" src="/assets/img/tote-bag.png" alt="imagen carrito"></img>
     <span className="badge">{props.children} </span>
     </div>
  )
}

export default CartWidget