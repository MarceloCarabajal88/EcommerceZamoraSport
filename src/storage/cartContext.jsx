import { createContext } from "react";
import { useState} from "react";

export const cartContext=createContext();

export function CartContextProvider(props){
    let [cart,setCart]=useState([]);

    function addItem(item,count){
        //let newCart= cart.map(item=>item);
        //newCart.push(item);
        const isInCar=cart.some(iteminCart=>iteminCart.id===item.id);
        const isInCarTalle=cart.some(iteminCart2=>iteminCart2.id===item.id && iteminCart2.tallecompra===item.tallecompra);
        //const isInCarTalleDistinto=cart.some(iteminCart3=>iteminCart3.id===item.id && iteminCart3.tallecompra!==item.tallecompra);

        if(isInCar===true){
            cart.forEach((compra)=>{
                //SI NO TIENEN TALLE
           if(isInCarTalle){
            console.log("el vartalle es  "+isInCarTalle)

            if(compra.id===item.id && compra.tallecompra===item.tallecompra){
             
                 compra.cantidad=compra.cantidad+count;
              
               }

           }

           if(!isInCarTalle){
            setCart([...cart,item]);

           }


         

       

            if(compra.id===item.id && item.tallecompra===''){
      
                compra.cantidad=compra.cantidad+count-1;
            

            }

            });
              
               
        }
        else{
        setCart([...cart,item]);

       
    }
    }

     function removeItem(posicion){

console.log("entre al removeitem");
      
          const carritonuevo =  cart.filter((_, index) => index !== posicion)
       setCart(carritonuevo);
       console.log('EL CARRITO NUEVO '+carritonuevo)


    };

    function clearCart(){
        /* */
            };

 function getTotalItems(){
/* */
let total=0;
cart.forEach((item)=>(total+=item.cantidad));
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