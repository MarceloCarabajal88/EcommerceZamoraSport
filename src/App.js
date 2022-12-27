import './App.css';

import ItemListContainer from './components/itemListContainer/ItemListContainer';
import NavBar from './components/navbar/NavBar';


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
  
      <NavBar></NavBar>
   <ItemListContainer greeting="Bienvenidos a Zamora Sports"></ItemListContainer>

      <hr></hr>
    
    </>
    
  );
 
}


export default App;
