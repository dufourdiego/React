import '@fontsource/roboto/300.css';
import './App.css';
import Navbar from "./components/Navbar";
import ItemListContainer from './components/ItemListContainer';


function App() {
  return (
    <>
    <Navbar></Navbar>
    <ItemListContainer greeting={'Bienvenidos a D&D Informática'}/>
    
    </>
  );
}

export default App;

