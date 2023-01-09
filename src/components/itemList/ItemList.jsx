import React from 'react'
import FlexWrapper from '../flexWrapper/FlexWrapper';
import Item from '../item/Item';
import { Link } from 'react-router-dom';
function ItemList(props) {
  return (
    
    <FlexWrapper>
{props.Productos.map((data) => (
     <Item 
     key={data.id}
     id={data.id}
     categoria={data.categoria}
     stock={data.stock}
     title={data.name}
     price={data.price}
     detail={data.detail}
     imgurl={data.imgurl}
     imgurl2={data.imgurl2}
      />
    
    
))}
        </FlexWrapper>
  )
}

export default ItemList