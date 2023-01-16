import React from 'react'
import { useState } from 'react'
import './Counter.css'
function Counter() {

    const[count,setCount]=useState(0);




    function handleAdd(){
        setCount(count+1);
    }

    function handleSubstract(){
        setCount(count-1);
    }


  return (
    <div>
        <p>Cantidad</p>
    <div className='col-lg 6 col-md-6 col-sm-12 d-flex justify-content-around mt-3 mb-3'>
        <span>{count}</span>
        <button onClick={handleAdd}>+</button>
        <button onClick={handleSubstract}>-</button>
    
    </div>
    </div>
  )
}

export default Counter