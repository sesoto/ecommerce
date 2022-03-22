import './App.css';
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from './components/Products/ItemListContainer';

function App() {
  return (
    // JSX
    <div className="App">
      <NavBar />

      <ItemListContainer />
      
    </div>
  );
}

export default App;
