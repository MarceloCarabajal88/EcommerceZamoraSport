import Productos from "../data/Productos";



function getItems (){
    return new Promise((resolve)=>{
        console.log("aca carga productos");
        setTimeout(()=>{
          
            resolve(Productos);},2000);
        
    });
    
/*
    function getISingletem (){
        return new Promise((resolve)=>{
            console.log("aca carga productos");
            setTimeout(()=>{
              
                resolve(Productos);},2000);
            
        });

*/

   /* getItem.then(()=>{
    console.log("resuelta");
    }).catch((errormsg)=>console.log(errormsg));*/
}

export default getItems;