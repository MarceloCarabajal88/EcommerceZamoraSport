import React from 'react'
import { useState } from 'react';

function InputForm(props){
    return(

<div class="form-group">
    <label>{props.label} </label>
    <input 
    type='text' 
    class="form-control"  
    name={props.name}
     placeholder={props.placeholder}
     onChange={props.onInputChange}
     />
   

  </div>

    );
}

export default function CartForm(props) {

const [userData,setUserData]=useState({
nombre:'',
email:'',
tel:'',
});

console.log('userdata', userData);

function onInputChange(evt){

    //imput que se modifica
    const campo= evt.target.name;
    const valor= evt.target.value;

const newState={...userData};
newState[campo]=valor;

setUserData(newState);
console.log(valor);
}

function limpiarDatos(){
    setUserData({
        nombre:'',
email:'',
tel:'',
    });
}

function onSubmit(evt){
    evt.preventDefault();
    props.onSubmit(userData);
    console.log('hice submit');
}


let arrayuserData=Object.keys(userData);

  return (
    <div className='col-lg-6'>
<form onSubmit={onSubmit}>
<h2>Ingresa tus Datos para completar la compra</h2>
 {
    arrayuserData.map(field=>(
        <InputForm name={field} value={userData[field]} onInputChange={onInputChange} label={field} placeholder={`Ingresa tu ${field} `}/>
    ))
 }
  <button type="submit" 
  disabled={
!(
userData.nombre !==''&&
userData.email !==''&&
userData.tel !==''
)

  }
  
  
  class="btn btn-primary mt-2">Finalizar compra</button>


    
    
</form>

    </div>
  )
}

