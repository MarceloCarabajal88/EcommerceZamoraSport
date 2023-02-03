


import ItemListContainer from './components/itemListContainer/ItemListContainer';
import NavBar from './components/navbar/NavBar';
import Footer from './components/footer/Footer';
import HomeGrid from './components/homeGrid/HomeGrid';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import ItemDetailContainer from './components/itemDetailContainer/ItemDetailContainer';
import EscudosBanner from './components/escudosBanner/EscudosBanner';
import { createContext } from 'react'
import { CartContextProvider } from './storage/cartContext';
import CartContainer from './components/cartContainer/CartContainer';
import { StatesComponentsProvider } from './storage/statesComponents';
import CarouselHome from './components/carouselHome/CarouselHome';
import OrderDetail from './components/ordenDetail/OrderDetail';

// componente APP



//CAMEL CASE PARA EL- LOS ESTILOS CSS o GUIONES
function App() {



  return (
   <>
   <CartContextProvider>
    <StatesComponentsProvider>
  <BrowserRouter>
      <NavBar/>
      <CarouselHome/>
      <Routes>
      <Route path='/category/:idcategory' element={<ItemListContainer/>}/>
        <Route path='/' element={<ItemListContainer/>}/>
        <Route path='/detalle/:itemid' element={<ItemDetailContainer/>}/>
      
        <Route path='/cartContainer' element={<CartContainer/>}/>
        <Route path='/thank-you/:itemid' element={<OrderDetail/>}/>
      </Routes>
     
    <HomeGrid/>
  
      
      <Footer/>
      </BrowserRouter>
      </StatesComponentsProvider>
      </CartContextProvider>
    </>
    
  );
 
}


export default App;
