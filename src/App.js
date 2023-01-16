


import ItemListContainer from './components/itemListContainer/ItemListContainer';
import NavBar from './components/navbar/NavBar';
import Footer from './components/footer/Footer';
import HomeGrid from './components/homeGrid/HomeGrid';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import ItemDetailContainer from './components/itemDetailContainer/ItemDetailContainer';
import EscudosBanner from './components/escudosBanner/EscudosBanner';
// componente APP

//CAMEL CASE PARA EL- LOS ESTILOS CSS o GUIONES
function App() {


  /*
let styleheader={
backgroundColor:"black",
marginTop: "40px",
border: "solid 3px red",
};
*/


  return (
   <>
  <BrowserRouter>
      <NavBar/>
      <Routes>
      <Route path='/category/:idcategory' element={<ItemListContainer/>}/>
        <Route path='/' element={<ItemListContainer/>}/>
        <Route path='/detalle/:itemid' element={<ItemDetailContainer/>}/>

      </Routes>
   
   <HomeGrid/>
      <hr></hr>
      
      <Footer/>
      </BrowserRouter>

    </>
    
  );
 
}


export default App;
