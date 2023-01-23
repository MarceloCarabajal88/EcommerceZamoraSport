import React from 'react';
import './Loader.css';
import { DotSpinner } from '@uiball/loaders'




function Loader() {
  return (
    <div className='d-flex justify-content-center contenedorloader'>
       <DotSpinner 
 size={45}
 speed={0.9} 
 color="#0880c7" 
/>

</div>
  )
}

export default Loader