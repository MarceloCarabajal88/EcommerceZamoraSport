import React from 'react'
import './HomeGrid.css';
import {Link } from 'react-router-dom';
import { StatesComponentsProvider } from '../../storage/statesComponents';
import { componentsContext } from '../../storage/statesComponents';
import { useContext } from 'react';
function HomeGrid() {

  let {GridComponent} =useContext(componentsContext);
  console.log("el consol en gridhome "+GridComponent);
if(GridComponent==true){

  return (
  <div className="homeGrid">
    <div className="containerGrid">
  <div className="foto1"><img src="/assets/img/camisetascat.jpg" alt="Foto Remeras"></img>
  <div className="div_btngrid">
    <Link to="/category/Remera"> 
    <button className='div_btngrid_btn'>Ver Camisetas</button>
    </Link>
  </div>
  </div>

  <div className="foto2"><img src="/assets/img/pelotacat.jpg" alt="Foto pelota"></img>
  <div className="div_btngrid">
  <Link to="/category/Accesorios">
    <button className='div_btngrid_btn'>Balones y Accesorios</button>
    </Link>
  </div>
  </div>

  <div className="foto3"><img src="/assets/img/futbolaccesorios.jpg" alt="Foto Remeras"></img>
  <div className="div_btngrid">
  <Link to="/category/Short"> 
    <button className='div_btngrid_btn'>Shorts</button>
    </Link>
  </div>
  </div>

  <div className="foto4"><img src="/assets/img/mochilacat.jpg" alt="Foto Remeras"></img>
  <div className="div_btngrid">
  <Link className="nav-link" to="/category/Bolsos">
    <button className='div_btngrid_btn'>Mochilas</button>
    </Link>
  </div>
  </div>
</div>

</div>
  )
}
else
return(
  <div></div>
)
}

export default HomeGrid