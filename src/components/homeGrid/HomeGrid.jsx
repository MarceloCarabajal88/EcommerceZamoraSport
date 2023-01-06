import React from 'react'
import './HomeGrid.css';

function HomeGrid() {
  return (
  <div className="homeGrid">
    <div className="containerGrid">
  <div className="foto1"><img src="/assets/img/camisetascat.jpg" alt="Foto Remeras"></img>
  <div className="div_btngrid">
    <button className='div_btngrid_btn'>Ver Camisetas</button>
  </div>
  </div>

  <div className="foto2"><img src="/assets/img/pelotacat.jpg" alt="Foto pelota"></img>
  <div className="div_btngrid">
    <button className='div_btngrid_btn'>Ver Balones</button>
  </div>
  </div>

  <div className="foto3"><img src="/assets/img/futbolaccesorios.jpg" alt="Foto Remeras"></img>
  <div className="div_btngrid">
    <button className='div_btngrid_btn'>Ver Accesorios</button>
  </div>
  </div>

  <div className="foto4"><img src="/assets/img/mochilacat.jpg" alt="Foto Remeras"></img>
  <div className="div_btngrid">
    <button className='div_btngrid_btn'>Ver Mochilas</button>
  </div>
  </div>
</div>

</div>
  )
}

export default HomeGrid