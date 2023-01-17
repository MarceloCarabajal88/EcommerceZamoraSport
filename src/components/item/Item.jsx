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

      
        
       <img className='img-thumbnail' class="card-img-top" src={classImgProduct}   alt="Card image cap"></img>
      
     
<div className="card-body">
        <h5 ClassName="card-title tituloProduct">{title}</h5>
      
        
        <p>${price}</p>
       
        <Link to={`/detalle/${id}`}>
           <ButtonChild>ver detalles</ButtonChild>
           </Link>
        </div>

    </div>
    </div>





  )
}

export default Item