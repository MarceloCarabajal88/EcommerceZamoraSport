import './navbar.css';
import CartWidget from './cartWidget/CartWidget';
import {Link } from 'react-router-dom';
import { useContext, useState } from 'react';
import { cartContext } from '../../storage/cartContext';
import { useEffect } from 'react';
import { Nav, Navbar} from 'react-bootstrap';

import Container from 'react-bootstrap/Container';







function NavBar() {

  const {getTotalItems}=useContext(cartContext);
  const[contad,setContad]=useState();
  
  useEffect(()=>{
setContad(getTotalItems());
   
   },[getTotalItems]);




  return (
    <div className="navcolor">
<div className="d-flex justify-content-center col-lg-12">

<div className="navcontenedorLogo">
        <Link to='/'>
  <img  width="150px" src="/assets/img/logozamora.png" alt="imagen carrito"></img>
  </Link>

   </div>
</div>
    <div className="d-flex justify-content-start navcontenedor col-lg-2 col-2">
      
    <Navbar collapseOnSelect expand="lg">
      <Container className='divcontainer'>
      
        <Navbar.Toggle aria-controls="responsive-navbar-nav" className="navbar" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto stroke">
            <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
             
            <li><Link className="nav-link"  to='/'>Inicio  </Link></li>
            <li>   <Link className="nav-link" to="/category/Remera">Remeras   </Link></li>
            <li>    <Link className="nav-link"  to="/category/Short">Shorts  </Link></li>
            <li>   <Link className="nav-link"  to="/category/Bolsos">Mochilas/Bolsos </Link></li>
            </ul>
          </Nav>
         
        </Navbar.Collapse>
      </Container>
    </Navbar>
    

<div className="navcontenedorCarrito col-lg-2">
   <CartWidget>{contad}</CartWidget>
   
   </div>
</div>


</div>
  )
}

export default NavBar
