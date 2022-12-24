import React from 'react'
import Button, {ButtonChild} from '../button/Button';


function Item({title,price,detail,imgurl}) {
 
  return (
    <div>
        <div>
        <img  width="180px" src={imgurl} alt="imagen"></img>
        </div>
        <h3>{title}</h3>
        <h4>${price}</h4>
        <p>{detail}</p>
        <ButtonChild>ver detalles</ButtonChild>
    </div>
  )
}

export default Item