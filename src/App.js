import "@fontsource/roboto/300.css";
import "./App.css";
import Navbar from "./components/Navbar";

function App() {
  const prop = "soy una prop";
  return <Navbar prop={prop} />; //* Mando una prop
}

export default App;
