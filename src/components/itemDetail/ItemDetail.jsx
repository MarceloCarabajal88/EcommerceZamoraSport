import React from 'react';
import Counter from '../counter/Counter';
import './ItemDetail.css';



function ItemDetail({producto, handleAddToCart}) {
console.log(producto.talle)
  const titulop=producto.title;
  return (
    <div className='row detailcontainer'>
      <div className='col-lg-6 col-md-6 col-xs-12 text-center'>
      <img className='img-thumbnail'  src={producto.imgurl}   alt="Card image cap" width="400px;"></img>
      </div>
      <div className='col-lg-6 col-md-6 col-xs-12 text-left'>
        <div className='pricecontainer'>
    <h1>{producto.title}</h1>
    <h2>Descripcion del articulo</h2>
<p>{producto.detail}</p>
<p>${producto.price}</p>
<hr></hr>

<div className='divtalles'>
<p>Seleccione un talle</p>

<ul>
  <li>6</li>
  <li>8</li>
  <li>10</li>
  <li>12</li>
</ul>
<Counter/>
<button className='btncomparar' onClick={()=>handleAddToCart(producto)}>COMPRAR</button>
</div>
</div>
</div>
    </div>
  )
}

export default ItemDetail