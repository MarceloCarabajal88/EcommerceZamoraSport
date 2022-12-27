import './navbar.css';
import CartWidget from './CartWidget';
function NavBar() {
  return (
    <div className="d-flex justify-content-start navcontenedor">
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
        <a className="nav-link" href="#">Cat1 </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Cat2</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Cat3</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Cat4</a>
      </li>
        <li className="nav-item">
        <a className="nav-link" href="#">Cat4</a>
      </li>
    </ul>
  
  </div>
  <div className="navcontenedorCarrito">
   <CartWidget></CartWidget>
   </div>
</nav>
</div>
  )
}

export default NavBar
