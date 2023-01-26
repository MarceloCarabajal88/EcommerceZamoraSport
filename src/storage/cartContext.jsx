import { createContext } from "react";
import { useState} from "react";

export const cartContext=createContext();

export function CartContextProvider(props){
    let [cart,setCart]=useState([]);

    function addItem(item,count){
        //let newCart= cart.map(item=>item);
        //newCart.push(item);
        const isInCar=cart.some(iteminCart=>iteminCart.id===item.id);
       
        if(isInCar===true){
            cart.forEach((compra)=>{
                //SI NO TIENEN TALLE
                if(item.tallecompra){
              if(compra.id===item.id &&  compra.tallecompra===item.tallecompra){
                console.log("es repetido el prod y taalle se agrega la cantidad "+count);
             
                 compra.cantidad=compra.cantidad+count-1;
              
               }
            }

            if(compra.id===item.id ){
                console.log("es repetido solo el id se agrega la cantidad "+count);
                compra.cantidad=compra.cantidad+count-1;


            }

            });
              
               
        }
        else{
        setCart([...cart,item]);
        alert("entre en la func addITEM");
    }
    }

     function removeItem(idItem){

console.log("entre al removeitem");
        const carritonuevo = cart.filter((item) => item.id !== idItem);
       setCart(carritonuevo);
       console.log(carritonuevo)


    };

    function clearCart(){
        /* */
            };

 function getTotalItems(){
/* */
let total=0;
cart.forEach((item)=>(total+=1));
return total;
 };


 function getTotalPrice(){
    let total=0;
cart.forEach((item)=>(
total+=item.price*item.cantidad

));
return total;
 };

 console.log("mi carrito -",cart);
 const value={cart,addItem,getTotalItems,getTotalPrice,removeItem};
 
    return (
    <cartContext.Provider value={value}>{props.children}</cartContext.Provider>
    );
}