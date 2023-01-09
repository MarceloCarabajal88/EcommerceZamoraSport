import React from 'react'
import Productos from '../../data/Productos'

function ItemDetail({producto}) {
  return (
    <div>
    <h1>{producto.title}</h1>
    <h2>Descripcion del articulo</h2>
<p>{producto.detail}</p>
<img className='img-thumbnail'  src={producto.imgurl}   alt="Card image cap" width="250px;"></img>
<p>${producto.price}</p>
    </div>
  )
}

export default ItemDetail