import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import { componentsContext } from '../../storage/statesComponents';
import { useContext } from 'react';
import './CarouselHome.css';

function CarouselHome() {

  
  let {GridComponent} =useContext(componentsContext);
if(GridComponent==true){
  return (
    
<div className='contCarousel'>
<Carousel>
      <Carousel.Item interval={1500}>
        <img
          className="d-block w-100"
          src="/assets/img/carousel/pumaney.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img
          className="d-block w-100"
          src="/assets/img/carousel/ronaldo.jpg" 
          alt="Second slide"
        />
        <Carousel.Caption>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/assets/img/carousel/pumashoes.png"  
          alt="Third slide"
        />
        <Carousel.Caption>
         
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
  )
}
else return(
  <div></div>
)
}

export default CarouselHome