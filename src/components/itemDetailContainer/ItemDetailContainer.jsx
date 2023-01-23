import { useEffect, useState } from 'react';
import Button, {ButtonChild} from '../button/Button';


import getItems , {getISingletem} from "../../services/mockAsyncService";
import ItemDetail from '../itemDetail/ItemDetail';
import { useParams } from 'react-router-dom';
import { cartContext } from '../../storage/cartContext';
import { useContext } from "react";
import Counter from '../counter/Counter';
import './ItemDetailContainer.css';
import Loader from '../loader/Loader';
import { componentsContext } from '../../storage/statesComponents';


const producto=[];



function ItemDetailContainer() {

  

  const {DesactivarGrid,ActivarGrid} =useContext(componentsContext);//DESACTIVAR GRIDHOME

//DESACTIVO EL GRIDHOME
DesactivarGrid();


  const[producto,setProduct]=useState({});
  const [isLoading, setIsLoading]=useState(true);

const {addItem} =useContext(cartContext);


 let { itemid } = useParams();

 function handleAddToCart(count){
producto.cantidad=count;
  addItem(producto);
alert (`Agregaste el..${producto.title} al carrito cantidad del prod: ${count}`);

};






 useEffect(()=>{

 
 
  getISingletem(parseInt(itemid)).then((respuesta)=>{
   
    setProduct(respuesta);



  }).catch((error)=>alert(`ERROR:${error}`)).finally(()=>{
setIsLoading(false);
  });
 });
    

console.log("este es el producto  "+producto.title);

if(isLoading)
return <Loader/>;

    return (
      <div>
  <ItemDetail producto={producto} />
<div className='row'>
  <div className='col-lg-6 col-md-5 col-xs-12 text-center ms-auto'>
<div className='countcontainer'>
  <Counter handleAddToCart={handleAddToCart}/>
  </div>
  </div>
  </div>
</div>
 

  )
}

export default ItemDetailContainer