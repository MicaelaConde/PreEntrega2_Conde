import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import ItemListContainer from './pages/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './pages/ItemDetailContainer/ItemDetailContainer';
import NavBar from './components/NavBar/NavBar';
import Cart from './pages/Cart/Cart';
import CartProvider from './context/CartProvider'
function App() {
  return (
    <CartProvider>
   <BrowserRouter>
   <NavBar/>
   <Routes>
   <Route path="/" element={<ItemListContainer />} />
   <Route path='/filtrar/:filtrado'  element={<ItemListContainer/>} />
   <Route path='/detail/:id'  element={<ItemDetailContainer/>} />
   <Route path="cart" element={<Cart/>} />
   </Routes>
   </BrowserRouter>
   </CartProvider>
  );
}

export default App;
