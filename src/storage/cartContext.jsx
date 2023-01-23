import { createContext } from "react";
import { useState} from "react";

export const cartContext=createContext();

export function CartContextProvider(props){
    let [cart,setCart]=useState([]);

    function addItem(item){
        //let newCart= cart.map(item=>item);
        //newCart.push(item);
        const isInCar=cart.some(iteminCart=>iteminCart.id===item.id)
        setCart([...cart,item]);
        alert("entre en la func addITEM");
        alert(cart);
        
    }

    function removeItem(){
/* */
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
 const value={cart,addItem,getTotalItems,getTotalPrice};
 
    return (
    <cartContext.Provider value={value}>{props.children}</cartContext.Provider>
    );
}