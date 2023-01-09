import Productos from "../data/Productos";



export default function getItems (){
    return new Promise((resolve)=>{
        console.log("aca carga productos");
        setTimeout(()=>{
          
            resolve(Productos);},2000);
        
    });
}

    export function getISingletem (id){
        return new Promise((resolve)=>{
            
            setTimeout(()=>{
              
                resolve(Productos.find((producto)=>producto.id===id));
                console.log("estoy en mockAsyncservice + ");
            },1000);
            
        });
      
    }


