import React from 'react'
import { useState } from 'react'

import './Counter.css'
function Counter({handleAddToCart}) {

    const[count,setCount]=useState(1);


// ARREGLAR COUNT PARA QUE CUENTE BIEN

    function handleAdd(){

        setCount(count+1);
    }

    function handleSubstract(){
        if(count>1){
        setCount(count-1);
    }
    }

    const handleChange = event => {
    
        console.log(event.target.value);
      };

  return (
    <div className='text-center'>
       
<div className='col-lg 6 col-md-6 col-sm-12 d-flex justify-content-center mt-3'> <p>Cantidad</p></div>

    <div className='col-lg 6 col-md-6 col-sm-12 d-flex justify-content-center mb-3 divbotones'>
   
             <div>       
                 <button onClick={handleSubstract}>-</button>
            </div>

            <div>
          
                 <input type="text"  onChange={e => setCount(e.target.value)} value={count}></input>
            </div>

            <div>
                 <button onClick={handleAdd}>+</button>
             </div>

    </div>
    <button className='btncomparar' onClick={()=>handleAddToCart(count)}>COMPRAR</button>
    </div>
  )
}

export default Counter