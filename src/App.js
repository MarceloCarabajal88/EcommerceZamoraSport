


import ItemListContainer from './components/itemListContainer/ItemListContainer';
import NavBar from './components/navbar/NavBar';
import Footer from './components/footer/Footer';
import HomeGrid from './components/homeGrid/HomeGrid';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import ItemDetailContainer from './components/itemDetailContainer/ItemDetailContainer';
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
        <Route path='/' element={<ItemListContainer/>}/>
        <Route path='/detalle/:userId' element={<ItemDetailContainer/>}/>
      </Routes>
   
   <HomeGrid/>
      <hr></hr>
      <Footer/>
      </BrowserRouter>

    </>
    
  );
 
}


export default App;
