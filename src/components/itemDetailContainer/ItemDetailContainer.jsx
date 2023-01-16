import React from 'react'
import { useEffect, useState } from 'react';
import Button, {ButtonChild} from '../button/Button';


import getItems , {getISingletem} from "../../services/mockAsyncService";
import ItemDetail from '../itemDetail/ItemDetail';
import { useParams } from 'react-router-dom';

const producto=[];

function ItemDetailContainer() {
 
function handleAddToCart(producto){
alert (`Agregaste el..${producto.title} al carrito`);
};



 const[producto,setProduct]=useState({});


 
 let { itemid } = useParams();
 useEffect(()=>{

 
 
  getISingletem(parseInt(itemid)).then((respuesta)=>{
   
    setProduct(respuesta);
  });
 });
    

console.log("este es el producto  "+producto.title);

 
    return (
      <div>
  <ItemDetail producto={producto} handleAddToCart={handleAddToCart}/>
</div>
 

  )
}

export default ItemDetailContainer