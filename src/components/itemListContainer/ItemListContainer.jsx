import React from 'react'
import FlexWrapper from '../flexWrapper/FlexWrapper';
import Item from '../item/Item';

function ItemListContainer(props) {

    
    const Productos=[{
        title:"Remera PSG",
        price:1200,
        detail:"PARIS SAINT GERMAIN",
        imgurl:"/assets/img/paris-nino.png",
        imgurl2:"/assets/img/paris2.png",
        },
        
        {title:"Remera Real Madrid",
        price:900,
        detail:"Real Madrid",
        imgurl:"/assets/img/realmadrid.jpg",
        imgurl2:"/assets/img/realmadrid2.jpg",
        },
        
        {title:"Remera Barcelona",
        price:1000,
        detail:"FC Barcelona",
        imgurl:"/assets/img/barcelonanino.jpg",
        imgurl2:"/assets/img/barcelona2.png",
        },
        
        {title:"Remera Liverpool",
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

{Productos.map((data, idx) => (
     <Item 
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