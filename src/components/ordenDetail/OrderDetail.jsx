import React from 'react'
import { Link, useParams } from 'react-router-dom';
import './OrderDetail.css';


function OrderDetail() {
  let {itemid} = useParams();


  return (
    <div className='container d-flex justify-content-center orderconfirmed'>
      <div className='col-lg-12 col-md-12 col-sm-12 text-center'>
      <h3>GRACIAS POR TU COMPRA</h3>
      <p>Tu orden fue registrada con el numero: {itemid}</p>
      </div>

      <div className='divbtn'>
      <Link className="nav-link"  to='/'>
        <button type="button" className="btn btn-primary">Salir</button>
        </Link>
      </div>
    </div>
  )
}

export default OrderDetail