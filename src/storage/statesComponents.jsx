import { createContext } from "react";
import { useState} from "react";

export const componentsContext=createContext();
/*
const [isHover, setIsHover]=useState(false);
const handleMouseEnter=()=>{
setIsHover(true);
};

const handleMouseLeave=()=>{
  setIsHover(false);
  };
*/

export function StatesComponentsProvider(props){


//VARIABLE PARA COMPONENTE DEL GRID ACTIVAR O DESACTIVAR
   
let [GridComponent,setGridComponent]=useState(true);  
let [CarouselComponent,setCarouselComponent]=useState(true);

let [cartOffCanvas,setCartOffCanvas]=useState(false);

//COMPONENTE GRID HOME
function DesactivarGrid(){
    setGridComponent(false);
}

function ActivarGrid(){
    setGridComponent(true);
}


//COMPONENTE SLIDER CAROUSEL
function DesactivarCarousel(){
    setCarouselComponent(false);
}

function ActivarCarousel(){
    setCarouselComponent(true);
}

//ACTIVAR CARTOFFCANVAS

function ActivarCanvasCart(){
    console.log('entre a activar canvas');
    setCartOffCanvas(true);
}

function DesactivarCanvasCart(){
    console.log('entre a activar canvas');
    setCartOffCanvas(false);
}
 

 //console.log("estado del componente GRID -",GridComponent);
 const value={GridComponent,CarouselComponent,cartOffCanvas,DesactivarGrid,ActivarGrid,DesactivarCarousel,ActivarCarousel,ActivarCanvasCart,DesactivarCanvasCart};
 
    return (
    <componentsContext.Provider value={value}>{props.children}</componentsContext.Provider>
    );
}