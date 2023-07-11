import { createContext } from "react";
import { useState } from "react";
import { json } from "react-router-dom";

export const cartContext = createContext();

export function CartContextProvider(props) {
    let [cart, setCart] = useState([]);
    let [totalcarrito, setTotalcarrito] = useState(0);

   //Elimine el console log
    function addItem(item) {

      
        let isInCar = cart.some(iteminCart => iteminCart.id === item.id);
        let isInCarTalle = cart.some(iteminCart => iteminCart.id === item.id && iteminCart.tallecompra==item.tallecompra && iteminCart.hasOwnProperty('tallecompra')===true );
        let newCart = [];
        if (isInCar) {
            let pos=0;

            console.log('carritoTT' +JSON.stringify(cart));
            console.log('si esta talle e id' + isInCarTalle);
            cart.forEach(compra => {

                //CUANDO TIENE EL MISMO TALLE E ID
                if (isInCarTalle) {
                    console.log('Entre al el por que encontre el item y talle igual ')
                    newCart=[...cart];
                    newCart.push({...compra, cantidad: compra.cantidad + item.cantidad}); 
                    newCart.splice(pos, 1);
                } 
                
                // CUANDO YA ESTA EL ITEM PERO NO TIENE TALLE
if (compra.id === item.id && compra.hasOwnProperty('tallecompra')===false ) {
    console.log('Mismo item Id pero no tiene talle la pos es '+pos);

    // Borro el carro
    newCart=[...cart];
    

    newCart.push({...compra, cantidad: compra.cantidad + item.cantidad}); 

    newCart.splice(pos, 1);

    //newCart.filter((_, index) => index !== pos)
}
                
                
    if (compra.id === item.id && compra.tallecompra!==item.tallecompra ) {
    console.log('Entre al el para hacer el push CUANDO TALLE DIFERENTE OK')
                // newCart.push({...cart,item});
               newCart=[...cart];
               newCart.push(item);
                    console.log('este es el newCart '+ JSON.stringify(newCart))
                }

                pos ++;
            });




            setCart(newCart);
            console.log('este es el CARTORIGINAL '+ JSON.stringify(cart))
            console.log('este es el NewCart '+ JSON.stringify(newCart))

        } 
        

       
        
        else {
            console.log('Entre al el para hacer el push SI NO COINCIDE ID')
        
            
            setCart([...cart, item]);
            
            console.log('este es el else cart casi final '+ JSON.stringify(cart))
        }

        console.log('este es el Final '+ JSON.stringify(cart))

    }

    function removeItem(posicion) {

        console.log("entre al removeitem");

        const carritonuevo = cart.filter((_, index) => index !== posicion)
        setCart(carritonuevo);

        console.log('EL CARRITO NUEVO ' + carritonuevo)
        const total = getTotalItems();
        console.log(total)
    };

    function clearCart() {
        console.log("entre al clearCart");
        setCart([]);
        setTotalcarrito(0);
    };

    function getTotalItems() {
        /* */
        //console.log("estoy en el get total items y este es el carrito " + JSON.stringify(cart))
const cartex=[...cart];

        let total = 0;
        cartex.forEach((item) => {
            total = total + item.cantidad;
            //console.log('cantidad del item :'+ item.cantidad)
        });
        setTotalcarrito(total);
        // console.log("este es el total de los items del cart "+total);
        return total;
    };


    function getTotalPrice() {
        let total = 0;
        cart.forEach((item) => (
            total += item.price * item.cantidad

        ));
        return total;
    };

    //console.log("mi carrito -",cart);
    const value = { cart, totalcarrito, addItem, getTotalItems, getTotalPrice, removeItem, clearCart };

    return (
        <cartContext.Provider value={value}>{props.children}</cartContext.Provider>
    );
}