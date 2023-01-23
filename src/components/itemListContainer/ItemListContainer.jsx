
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import getItems, { getItembyCategory} from "../../services/mockAsyncService";
import ItemList from "../itemList/ItemList";
import { componentsContext } from '../../storage/statesComponents';
import { useContext } from "react";
import Loader from "../loader/Loader";

function ItemListContainer(props) {

  const {DesactivarGrid,ActivarGrid} =useContext(componentsContext);


 
  
  


const [Productos, setProducts]=useState([]);
const [isLoading, setIsLoading]=useState(true);
const {idcategory}=useParams();

useEffect(()=>{

if(idcategory){
  getItembyCategory(idcategory).then((respuesta)=>{
    console.log(respuesta);
    setProducts(respuesta);
    DesactivarGrid();
    window.scrollTo(0, 0);
});
  


}else{
    getItems().then((respuesta)=>{
        console.log(respuesta);
        setProducts(respuesta);
       
      
    })
    .catch((err) => {
      console.error(err);
    })
    .finally(() => {
      setIsLoading(false);
      ActivarGrid();
    });
    
  }

},[idcategory]);


if(isLoading)
return <Loader/>;

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