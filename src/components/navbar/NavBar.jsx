import './navbar.css';
import CartWidget from './cartWidget/CartWidget';
import {Link } from 'react-router-dom';

function NavBar() {
  return (
    <div className="row navcolor">

    <div className="d-flex justify-content-start navcontenedor col-lg-2 col-2">
       <div className="navcontenedorLogo">
        <Link to='/'>
  <img  width="150px" src="/assets/img/logozamora.png" alt="imagen carrito"></img>
  </Link>

   </div>

    <nav className="navbar navbar-expand-lg">
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
 
  
  <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
 
    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
   
    <li className="nav-item active">
    <Link className="nav-link"  to='/'>
       Inicio 
        </Link>
      </li>
     
      <li className="nav-item">
        <Link className="nav-link" to="/category/Remera">Remeras </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/category/Short">Shorts</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/category/Bolsos">Mochilas/Bolsos</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/category/Accesorios">Accesorios</Link>
      </li>
     
    </ul>
  
  </div>
 
</nav>

<div className="navcontenedorCarrito col-lg-2">
   <CartWidget></CartWidget>
   </div>
</div>


</div>
  )
}

export default NavBar
