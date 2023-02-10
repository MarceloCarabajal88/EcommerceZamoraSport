import React from 'react'
import { useState } from 'react';
import './Cart.css';
function InputForm(props){
    return(
<div className='container'>
<div class="form-group divformulario">
    <label>{props.label} </label>
    <input 
    type='text' 
    class="form-control"  
    name={props.name}
     placeholder={props.placeholder}
     onChange={props.onInputChange}
     />
   

  </div>
  </div>
    );
}

export default function CartForm(props) {

const [userData,setUserData]=useState({
Nombre:'',
Email:'',
Tel:'',
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
    <div>
<form onSubmit={onSubmit}>
  <div className='cartformtitle'>
<h5>Ingresa tus Datos para completar la compra</h5>

</div>


 {
    arrayuserData.map(field=>(
        <InputForm key={field} name={field} value={userData[field]} onInputChange={onInputChange} label={field} placeholder={`Ingresa tu ${field} `}/>
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

