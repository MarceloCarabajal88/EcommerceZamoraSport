import './item.css';

import Button, {ButtonChild} from '../button/Button';

import React, { useEffect, useState } from "react";
import { useRef } from 'react';
import { Link } from 'react-router-dom';

function Item({id,title,price,detail,imgurl,imgurl2}) {

 const [isHover, setIsHover]=useState(false);
const handleMouseEnter=()=>{
setIsHover(true);
};

const handleMouseLeave=()=>{
  setIsHover(false);
  };
  

let classImgProduct =(isHover)?imgurl2:imgurl;




  return (


   <div className="contenedorTarjeta" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
    <div className="card text-center">
       {/* Un comentario JSX */}

      
        
       <img className='img-thumbnail card-img-top' src={classImgProduct}   alt="Card image cap"></img>
      
     
<div className="card-body tituloProduct">
        <h2>{title}</h2>
      
        
        <p className="h4"><strong>$ UYU {price}</strong></p>
      
        <Link to={`/detalle/${id}`}>
           <ButtonChild>ver detalles</ButtonChild>
           </Link>
        </div>

    </div>
    </div>





  )
}

export default Item