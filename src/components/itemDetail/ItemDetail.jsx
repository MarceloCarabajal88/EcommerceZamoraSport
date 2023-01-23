import React from 'react';
import './ItemDetail.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';

function ItemDetail({producto}) {

 let talles="";
 const [talle,setTalle]=useState();





 const handleClick=(value)=>{
console.log("el value es "+value);
  console.log("antes de setear el talle es "+talle)
setTalle(value);
talles=(value);
console.log("Talles"+talles);
console.log("este es el talle despues del set"+talle);
console.log(value);
  };


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
{
  producto.talle &&
<div className='divtalles'>
<p>Seleccione un talle</p>
<ul>
{producto.talle.map((data)=>(
  
    <li key={data.num} style={{backgroundColor: talle === data.num ? "#96e6cb" : ""}} onClick={() => handleClick(data.num)}>{data.num}</li>
))}
</ul>
  

 



</div>


}

</div>
<Link to='/cartContainer'>
<button>ir al carr</button>
</Link>
</div>
    </div>
  )
}

export default ItemDetail