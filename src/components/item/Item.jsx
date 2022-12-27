import './item.css';

import Button, {ButtonChild} from '../button/Button';

import React, { useEffect, useState } from "react";

function Item({title,price,detail,imgurl}) {
 const [textoBtn, setTextoBtn]=useState("No me clikeaste");
const handleClick=()=>{
setTextoBtn("Ahora si me clikeaste");
};


  return (


   <div className="contenedorTarjeta">
    <div className="card text-center">
       {/* Un comentario JSX */}

       <button onClick={handleClick}>{textoBtn}</button>
        
       <img className='img-thumbnail' class="card-img-top" src={imgurl}   alt="Card image cap"></img>
      
      
<div className="card-body">
        <h3 class="card-title">{title}</h3>
        
        <p>{detail}</p>
        <p>${price}</p>
        <ButtonChild>ver detalles</ButtonChild>
        </div>

    </div>
    </div>





  )
}

export default Item