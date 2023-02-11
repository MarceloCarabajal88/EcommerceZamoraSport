import React from 'react';
import './ItemDetail.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { cartContext } from '../../storage/cartContext';
import { useContext } from 'react';
import { useEffect } from 'react';
import { componentsContext } from '../../storage/statesComponents';

function ItemDetail({getTalle,producto}) {

  const {ActivarCanvasCart} =useContext(componentsContext);//Activar CARTCANVAS


  const handleLinkClick = event => {
    console.log('Link clicked');
 ActivarCanvasCart();
    // 👇️ refers to the link element
    //console.log(event.currentTarget);
  };
  const {getTotalItems}=useContext(cartContext);
  const[totalitems,SetTotalItems]=useState();

  useEffect(()=>{
    SetTotalItems(getTotalItems());
       
       },[getTotalItems]);




  
console.log('este es el total de items'+totalitems)


 let talles="";
 const [talle,setTalle]=useState();





 const handleClick=(value)=>{

setTalle(value);
talles=(value);
console.log(talles);
getTalle(value);
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
  producto.talles &&
<div className='divtalles'>
<p>Seleccione un talle</p>
<ul>
{producto.talles.map((data)=>(
  
    <li key={data} style={{backgroundColor: talle === data ? "#000000" : "", color: talle === data ? "#f8f9fa" : "#212529"}} onClick={() => handleClick(data)}>{data}</li>
))}
</ul>
  

 


</div>


}

</div>
{ totalitems>0 &&
<Link  onClick={handleLinkClick}>
<button className='btn_goToCart'>ir al carrito</button>
</Link>
}
</div>


    </div>
  )
}

export default ItemDetail