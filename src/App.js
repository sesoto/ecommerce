import './App.css';
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from './components/Products/ItemListContainer';
import ItemDetailContainer from './components/Products/ItemDetailContainer';

function App() {
  return (
    // JSX
    <div className="App">
      <NavBar />

      <ItemListContainer />
      
      <ItemDetailContainer />
      
    </div>
  );
}

export default App;
