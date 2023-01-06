


import ItemListContainer from './components/itemListContainer/ItemListContainer';
import NavBar from './components/navbar/NavBar';
import Footer from './components/footer/Footer';
import HomeGrid from './components/homeGrid/HomeGrid';

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
  
      <NavBar/>
   <ItemListContainer greeting="Bienvenidos a Zamora Sports"></ItemListContainer>
   <HomeGrid/>
      <hr></hr>
      <Footer/>


    </>
    
  );
 
}


export default App;
