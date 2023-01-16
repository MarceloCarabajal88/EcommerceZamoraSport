import React, { useEffect } from 'react'
import { useState } from 'react';


function EscudosBanner() {

//CONECTO CON API PARA TRAER ESCUDOS E INFO

const  [EnglandList, setEnglandList]=useState([]);




async function TraerPremierLeague() {

    const url = "https://futdb.app/api/clubs";

    let respuesta= await fetch(url, {
        method: "GET",
        withCredentials: true,
        headers: {
          "X-Auth-Token": "e4378942-5e19-4d5a-89e5-bd07abcd0af8",
          "Content-Type": "application/json"
        }
      });
    let equipos= await respuesta.json();
    console.log()
    setEnglandList(equipos.items);
console.log(JSON.stringify(equipos.items));


}


    useEffect(
         ()=>{TraerPremierLeague()},
        
    [] );
  
 
 
    
  




  return (
    <div>

       
    
 






   </div>

   
  )
}

export default EscudosBanner