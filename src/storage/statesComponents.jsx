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

function DesactivarGrid(){
    setGridComponent(false);
}

function ActivarGrid(){
    setGridComponent(true);
}


 

 console.log("estado del componente GRID -",GridComponent);
 const value={GridComponent,DesactivarGrid,ActivarGrid};
 
    return (
    <componentsContext.Provider value={value}>{props.children}</componentsContext.Provider>
    );
}