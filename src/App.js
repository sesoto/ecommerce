import './App.css';
import NavBar from "./components/NavBar/NavBar";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import { useContext } from 'react';
// Rutas
import HomePage from './pages/Home';
import ProductsPage from './pages/Products';
import AboutPage from './pages/About';
import ContactPage from './pages/Contact';
import NotFoundPage from './pages/NotFound';
import DetailPage from './pages/Detail';
import CategoryPage from './pages/Category';
import CartPage from './pages/Cart';

// Contextos
import { CartProvider } from './context/CartContext';

function App() {
  return (
    // JSX
    <div className="App">
      <CartProvider>
        <BrowserRouter>
        <NavBar />
          <Routes>
            <Route path='/' element={ <HomePage /> }/>
            <Route path='/productos' element={ <ProductsPage /> }/>
            <Route path='/nosotros' element={ <AboutPage /> }/>
            <Route path='/contacto' element={ <ContactPage /> }/>
            <Route path="/:categoria/" element={<CategoryPage />}/>
            <Route path="/:categoria/:id" element={<DetailPage />}/>
            <Route path='/carrito' element={ <CartPage /> }/>
            <Route path='*' element={ <NotFoundPage /> } />
          </Routes>
        </BrowserRouter>
      </CartProvider>
      
    </div>
  );
}

export default App;
