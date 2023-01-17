
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import getItems, { getItembyCategory} from "../../services/mockAsyncService";
import ItemList from "../itemList/ItemList";

function ItemListContainer(props) {



const [Productos, setProducts]=useState([]);

const {idcategory}=useParams();

useEffect(()=>{

if(idcategory){
  getItembyCategory(idcategory).then((respuesta)=>{
    console.log(respuesta);
    setProducts(respuesta);
    window.scrollTo(0, 0);
});
  


}else{
    getItems().then((respuesta)=>{
        console.log(respuesta);
        setProducts(respuesta);
        
    });
  }

},[idcategory]);

  return (
    <>
    <div className="d-flex justify-content-center mt-3 mb-4">
        <h2>{props.greeting}</h2>
        </div>
<ItemList Productos={Productos}/>
        </>
  )
}

export default ItemListContainer