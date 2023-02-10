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




 

 //console.log("estado del componente GRID -",GridComponent);
 const value={GridComponent,CarouselComponent,DesactivarGrid,ActivarGrid,DesactivarCarousel,ActivarCarousel};
 
    return (
    <componentsContext.Provider value={value}>{props.children}</componentsContext.Provider>
    );
}