import './navbar.css';
import CartWidget from './cartWidget/CartWidget';

function NavBar() {
  return (
    <div className="row navcolor">

    <div className="d-flex justify-content-start navcontenedor col-lg-2 col-2">
       <div className="navcontenedorLogo">
  <img  width="150px" src="/assets/img/logozamora.png" alt="imagen carrito"></img>
   </div>

    <nav className="navbar navbar-expand-lg">
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
 
  
  <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
 
    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
      <li className="nav-item active">
        <a className="nav-link" href="#">Camisetas </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Shorts</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Mochilas/Bolsos</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Accesorios</a>
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
