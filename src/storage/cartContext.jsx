import { createContext } from "react";
import { useState } from "react";
import { json } from "react-router-dom";

export const cartContext = createContext();

export function CartContextProvider(props) {
    let [cart, setCart] = useState([]);
    let [totalcarrito, setTotalcarrito] = useState(0);

   
    function addItem(item) {
        const isInCar = cart.some(iteminCart => iteminCart.id === item.id);
        
        let newCart = [];
        if (isInCar) {
            let index=0;
            cart.forEach(compra => {
                if (compra.id === item.id && compra.tallecompra === item.tallecompra) {
                    console.log('Entre al el por que encontre el item y talle el push')
                    newCart.push({...compra, cantidad: compra.cantidad + item.cantidad}); 
     


                } else {
                    console.log('Entre al el para hacer el push CUANDO TALLE DIFERENTE OK')
                // newCart.push({...cart,item});
               newCart=[...cart];
               newCart.push(item);
                    console.log('este es el newCart '+ JSON.stringify(newCart))
                }

                index ++;
            });
            setCart(newCart);
            console.log('este es el CARTORIGINAL '+ JSON.stringify(cart))
        } else {
            console.log('Entre al el para hacer el push SI NO COINCIDE ID')
            setCart([...cart, item]);
        }
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