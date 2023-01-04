
import React, { useEffect, useState } from "react";

import getItems from "../../services/mockAsyncService";
import ItemList from "../itemList/ItemList";

function ItemListContainer(props) {



const [Productos, setProducts]=useState([]);

useEffect(()=>{
    getItems().then((respuesta)=>{
        console.log(respuesta);
        setProducts(respuesta);
    }
    
    
    );
});

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