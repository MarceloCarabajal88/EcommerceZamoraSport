import React from 'react'
import { useEffect, useState } from 'react';

import getItems , {getISingletem} from "../../services/mockAsyncService";
import ItemDetail from '../itemDetail/ItemDetail';
import { useParams } from 'react-router-dom';

const producto=[];

function ItemDetailContainer() {
 

 const[producto,setProduct]=useState({});


 console.log("estoy en item detail contaimer2");
 let { userId } = useParams();
 useEffect(()=>{

  console.log("esto es el param "+parseInt(userId));
 
  getISingletem(parseInt(userId)).then((respuesta)=>{
    console.log("respuesta single item "+respuesta.title);
    setProduct(respuesta);
  });
 });
    

console.log("este es el producto  "+producto.title);

 
    return (
  <ItemDetail producto={producto}/>
  )
}

export default ItemDetailContainer