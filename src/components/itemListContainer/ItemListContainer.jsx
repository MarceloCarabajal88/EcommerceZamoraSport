import React from 'react'
import FlexWrapper from '../flexWrapper/FlexWrapper';
import Item from '../item/Item';

function ItemListContainer(props) {

    
    const Productos=[{
        id:1,
        categoria:"Remera",
        stock:20,
        title:"Remera PSG",
        price:1200,
        detail:"PARIS SAINT GERMAIN",
        imgurl:"/assets/img/paris-nino.png",
        imgurl2:"/assets/img/paris2.png",
        },
        
        {id:2,
        categoria:"Remera",
        stock:20,
        title:"Remera Real Madrid",
        price:900,
        detail:"Real Madrid",
        imgurl:"/assets/img/realmadrid.jpg",
        imgurl2:"/assets/img/realmadrid2.jpg",
        },
        
        {id:3,
        categoria:"Remera",
        stock:20,
        title:"Remera Barcelona",
        price:1000,
        detail:"FC Barcelona",
        imgurl:"/assets/img/barcelonanino.jpg",
        imgurl2:"/assets/img/barcelona2.png",
        },
        
        {id:4,
        categoria:"Remera",
        stock:10,
        title:"Remera Liverpool",
        price:1300,
        detail:"Liverpool FC",
        imgurl:"/assets/img/liverpool.jpg",
        imgurl2:"/assets/img/liverpool2.jpg",
        },
        ];

      

  return (
    <>
    <div className="d-flex justify-content-center mt-3 mb-4">
        <h2>{props.greeting}</h2>
        </div>
    <FlexWrapper>

{Productos.map((data) => (
     <Item 
     key={data.id}
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
        </>
  )
}

export default ItemListContainer