
import Cart from './Cart';


import React, { useEffect, useState } from "react";

import { Link } from 'react-router-dom';

function CartContainer() {

 



  return (

    <div>
<Cart/>
<div className='container'>
  <Link to='/checkout'>
<button>Finalizar Compra</button>
</Link>
</div>

    </div>





  )
}

export default CartContainer