import React from 'react'
import FlexWrapper from '../flexWrapper/FlexWrapper';
import Item from '../item/Item';

function ItemListContainer() {

    const Productos=[{
        title:"Remera PSG",
        price:1200,
        detail:"Remera del equipo frances PARIS SAINT GERMAIN",
        imgurl:"https://f.fcdn.app/imgs/2b55b2/www.lacancha.uy/lcanuy/345c/original/catalogo/DJ7865_411_1/2000-2000/camiseta-de-futbol-nike-psg-dri-fit-home-camiseta-de-futbol-nike-psg-dri-fit-home.jpg",
        },
        
        {title:"Remera Real Madrid",
        price:900,
        detail:"Remera del equipo Español Real Madrid",
        imgurl:"/assets/img/realmadrid.jpg",
        },
        
        {title:"Remera Barcelona",
        price:1000,
        detail:"Remera del equipo español Barcelona",
        imgurl:"https://store.fcbarcelona.com/medias/348x526-221100M-1.jpg?context=bWFzdGVyfGltYWdlc3wxMTI4NzN8aW1hZ2UvanBlZ3xoOTUvaGY2Lzg4OTQ0NDIxNzY1NDIvMzQ4eDUyNi8yMjExMDBNXzEuanBnfGVmNTQ5ZjEyNzJlMzZjYjYwMDRiNGMzM2RlNzNjMzNmNzMwYWIwZDQ3NTEwNDBiOTJjNjBjNTM0YTJiMDQ2NTA",
        },
        
        {title:"Remera Liverpool",
        price:1300,
        detail:"Remera del equipo Ingles Liverpool",
        imgurl:"/assets/img/liverpool.jpg",
        },
        ];



  return (
    <FlexWrapper>

{Productos.map((data, idx) => (
     <Item 
     title={data.name}
     price={data.price}
     detail={data.detail}
     imgurl={data.imgurl}
     />
))}

       
        </FlexWrapper>
  )
}

export default ItemListContainer