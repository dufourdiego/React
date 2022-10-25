import '@fontsource/roboto/300.css';
import './App.css';
import Navbar from "./components/Navbar";
import ItemListContainer from './components/ItemListContainer';
import logo from "./PcGamer.jpg"

function App() {
  return (
    <>
    <Navbar></Navbar>
    <ItemListContainer greeting={'Bienvenidos a D&D Informática'}/>
    <div className='logo'>
    <img src={logo} ></img>
    </div>
    </>
  );
}

export default App;

