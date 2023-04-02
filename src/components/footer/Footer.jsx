import React from 'react'
import './footer.css';

function Footer() {
  return (
    <div className="footerclass d-flex justify-content-around footerdir">

<div className="col-lg-4 col-md-4 col-xs-12">
<div className="columnsfooter">
<img  width="150px" src="/assets/img/logozamora.png" alt="imagen carrito"></img>
<span>Escribinos a nuestro Whatsapp</span>
<div className="d-flex align-items-center">
<img  width="35px" src="/assets/img/whatsapp_icon.png" alt="imagen whatsap"></img>
<span><strong>092495026</strong></span>
</div>
<p><strong>zamorasport@gmail.com</strong></p>
</div>
</div>


<div className="col-lg-4 col-md-4 col-xs-12">
<div className="menufooter">
<h5 className="">EMPRESA</h5>
<ul className='ulfooter'>
  <li>Quienes somos</li>
<li>Locales</li>
<li>Contacto</li>
<li>Noticias</li>
</ul>
</div>
</div>

<div className="col-lg-4 col-md-4 col-xs-12">
<div className="menufooter">
<h5>PRODUCTOS</h5>
<ul className='ulfooter'>
<li>Remeras</li>
<li>Shorts</li>
<li>Mochilas</li>
<li>Accesorios</li>
</ul>
</div>
</div>


    </div>
  )
}

export default Footer