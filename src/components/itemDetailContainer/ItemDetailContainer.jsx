import { useEffect, useState } from 'react';
import Button, {ButtonChild} from '../button/Button';


import  {getISingletem} from "../../services/firebase";
import ItemDetail from '../itemDetail/ItemDetail';
import { useParams } from 'react-router-dom';
import { cartContext } from '../../storage/cartContext';
import { useContext } from "react";
import Counter from '../counter/Counter';
import './ItemDetailContainer.css';
import Loader from '../loader/Loader';
import { componentsContext } from '../../storage/statesComponents';
import Modal from 'react-bootstrap/Modal';
import Button2 from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';





function ItemDetailContainer() {


  const {DesactivarGrid,ActivarGrid} =useContext(componentsContext);//DESACTIVAR GRIDHOME

//DESACTIVO EL GRIDHOME


  useEffect(()=>{

    getISingletem(itemid).then((respuesta)=>{
     
      setProduct(respuesta);
  
    }).catch((error)=>alert(`ERRORas:${error}`)).
    finally(()=>{
      DesactivarGrid();

  setIsLoading(false);
    });
   },[]);



  //VARIABLES PARA EL MODAL BOOSTRAP
const [show, setShow] = useState(false);
const [msgerrorTalle, SetmsgerrorTalle]=useState(false);

const handleClose = () => setShow(false);
const handleShow = () => setShow(true);





  const[producto,setProduct]=useState({});
  const [isLoading, setIsLoading]=useState(true);

const {addItem} =useContext(cartContext);


 const {itemid} = useParams();


function getTalle(talle){
  if(talle!==undefined){
    SetmsgerrorTalle(false);
  }
producto.tallecompra=talle;

}


 function handleAddToCart(count){

  if (producto.talles){
  if (producto.tallecompra===undefined){
SetmsgerrorTalle(true);
  }
  if (producto.tallecompra!==undefined){
    SetmsgerrorTalle(false);
    producto.cantidad=count;
    addItem(producto);
    handleShow();
      }

}
  else{
    SetmsgerrorTalle(false);
producto.cantidad=count;
  addItem(producto);

 // alert('entre a handle to CART con : '+producto.title+'/cantidad'+count+'function '+addItem);
  handleShow();
//alert (`Agregaste el..${producto.title} al carrito cantidad del prod: ${count}`);
}
};


    




 


if(isLoading)
return <Loader/>;

    return (
      <div>
  <ItemDetail  getTalle={getTalle} producto={producto} />
<div className='row'>


  <div className='col-lg-6 col-md-5 col-xs-12 text-center ms-auto'>
  

   
          <p className='text-danger'><strong>{msgerrorTalle ? 'Debe Seleccionar un Talle' : ''}
         
          </strong></p>
  

<div className='countcontainer'>
{producto.stock < 1 &&
        <h4 className='text-danger'>
          SIN STOCK!!
        </h4>
      }
      {producto.stock > 0 &&
  <Counter handleAddToCart={handleAddToCart}/>
      }
  </div>
  </div>
  </div>

  <div className='ModalBt'>

  <Modal 
       size="lg"
      show={show} 
      onHide={handleClose}
      aria-labelledby="example-custom-modal-styling-title"
      dialogClassName="modal-90w"
      >
        
        <Modal.Header closeButton>
        <div className='d-flex justify-content-center text-center w-100'>
          
          <img  width="140px" src="/assets/img/logozamora.png" alt="logo zamora"></img>
          </div>
          
          <Modal.Title> 
       
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <div className='row'>
          <div className='col-lg-2'>
          <img  width="30px" src="/assets/img/accept.png" alt="icono ok"></img>
          </div>
          <div className='col-lg-10'>
          <p className='ModalBt_texto'>  Artículo añadido correctamente a tu compra</p>
          </div>
          </div>
         
</Modal.Body>
        <Modal.Footer>
        
          <Button2 variant="secondary" onClick={handleClose}>
            CONTINUAR EN EL SITIO
          </Button2>
         
          <Link to='/checkout'>
          <Button2 variant="primary" onClick={handleClose}>
            FINALIZAR COMPRA
          </Button2>
          </Link>
        </Modal.Footer>
      </Modal>
      </div>


</div>
 

  )
}

export default ItemDetailContainer