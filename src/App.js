import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import ItemListContainer from './pages/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './pages/ItemDetailContainer/ItemDetailContainer';
import NavBar from './components/NavBar/NavBar';
import Cart from './pages/Cart/Cart';
import CartContext from './context/CartProvider'
function App() {
  return (
    
   <BrowserRouter>
   <CartContext>
   <NavBar/>
   <Routes>
   <Route path="/" element={<ItemListContainer />} />
   <Route path='/filtrar/:filtrado'  element={<ItemListContainer/>} />
   <Route path='/detail/:id'  element={<ItemDetailContainer/>} />
   <Route path="cart" element={<Cart/>} />
   </Routes>
   </CartContext>
   </BrowserRouter>
   
  );
}

export default App;
